import json
import logging
from typing import List, Optional

from datetime import datetime, date

from fastapi import APIRouter, Body, Depends, HTTPException, Query
from pydantic import BaseModel
from sqlalchemy.ext.asyncio import AsyncSession

from core.database import get_db
from services.audit_requests import Audit_requestsService

import aiosmtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import os
# Set up logging
logger = logging.getLogger(__name__)

router = APIRouter(prefix="/api/v1/entities/audit_requests", tags=["audit_requests"])


# ---------- Pydantic Schemas ----------
class Audit_requestsData(BaseModel):
    """Entity data schema (for create/update)"""
    name: str
    email: str
    company: str
    phone: str
    message: str
    status: str = 'pending'                          # ← valor por defecto
    created_at: datetime = datetime.now()            # ← valor por defecto
    updated_at: Optional[datetime] = None


class Audit_requestsUpdateData(BaseModel):
    """Update entity data (partial updates allowed)"""
    name: Optional[str] = None
    email: Optional[str] = None
    company: Optional[str] = None
    phone: Optional[str] = None
    message: Optional[str] = None
    status: Optional[str] = None
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None


class Audit_requestsResponse(BaseModel):
    """Entity response schema"""
    id: int
    name: str
    email: str
    company: str
    phone: str
    message: str
    status: str
    created_at: datetime
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True


class Audit_requestsListResponse(BaseModel):
    """List response schema"""
    items: List[Audit_requestsResponse]
    total: int
    skip: int
    limit: int


class Audit_requestsBatchCreateRequest(BaseModel):
    """Batch create request"""
    items: List[Audit_requestsData]


class Audit_requestsBatchUpdateItem(BaseModel):
    """Batch update item"""
    id: int
    updates: Audit_requestsUpdateData


class Audit_requestsBatchUpdateRequest(BaseModel):
    """Batch update request"""
    items: List[Audit_requestsBatchUpdateItem]


class Audit_requestsBatchDeleteRequest(BaseModel):
    """Batch delete request"""
    ids: List[int]


# ---------- Routes ----------
@router.get("", response_model=Audit_requestsListResponse)
async def query_audit_requestss(
    query: str = Query(None, description="Query conditions (JSON string)"),
    sort: str = Query(None, description="Sort field (prefix with '-' for descending)"),
    skip: int = Query(0, ge=0, description="Number of records to skip"),
    limit: int = Query(20, ge=1, le=2000, description="Max number of records to return"),
    fields: str = Query(None, description="Comma-separated list of fields to return"),
    db: AsyncSession = Depends(get_db),
):
    """Query audit_requestss with filtering, sorting, and pagination"""
    logger.debug(f"Querying audit_requestss: query={query}, sort={sort}, skip={skip}, limit={limit}, fields={fields}")
    
    service = Audit_requestsService(db)
    try:
        # Parse query JSON if provided
        query_dict = None
        if query:
            try:
                query_dict = json.loads(query)
            except json.JSONDecodeError:
                raise HTTPException(status_code=400, detail="Invalid query JSON format")
        
        result = await service.get_list(
            skip=skip, 
            limit=limit,
            query_dict=query_dict,
            sort=sort,
        )
        logger.debug(f"Found {result['total']} audit_requestss")
        return result
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error querying audit_requestss: {str(e)}", exc_info=True)
        raise HTTPException(status_code=500, detail=f"Internal server error: {str(e)}")


@router.get("/all", response_model=Audit_requestsListResponse)
async def query_audit_requestss_all(
    query: str = Query(None, description="Query conditions (JSON string)"),
    sort: str = Query(None, description="Sort field (prefix with '-' for descending)"),
    skip: int = Query(0, ge=0, description="Number of records to skip"),
    limit: int = Query(20, ge=1, le=2000, description="Max number of records to return"),
    fields: str = Query(None, description="Comma-separated list of fields to return"),
    db: AsyncSession = Depends(get_db),
):
    # Query audit_requestss with filtering, sorting, and pagination without user limitation
    logger.debug(f"Querying audit_requestss: query={query}, sort={sort}, skip={skip}, limit={limit}, fields={fields}")

    service = Audit_requestsService(db)
    try:
        # Parse query JSON if provided
        query_dict = None
        if query:
            try:
                query_dict = json.loads(query)
            except json.JSONDecodeError:
                raise HTTPException(status_code=400, detail="Invalid query JSON format")

        result = await service.get_list(
            skip=skip,
            limit=limit,
            query_dict=query_dict,
            sort=sort
        )
        logger.debug(f"Found {result['total']} audit_requestss")
        return result
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error querying audit_requestss: {str(e)}", exc_info=True)
        raise HTTPException(status_code=500, detail=f"Internal server error: {str(e)}")


@router.get("/{id}", response_model=Audit_requestsResponse)
async def get_audit_requests(
    id: int,
    fields: str = Query(None, description="Comma-separated list of fields to return"),
    db: AsyncSession = Depends(get_db),
):
    """Get a single audit_requests by ID"""
    logger.debug(f"Fetching audit_requests with id: {id}, fields={fields}")
    
    service = Audit_requestsService(db)
    try:
        result = await service.get_by_id(id)
        if not result:
            logger.warning(f"Audit_requests with id {id} not found")
            raise HTTPException(status_code=404, detail="Audit_requests not found")
        
        return result
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error fetching audit_requests {id}: {str(e)}", exc_info=True)
        raise HTTPException(status_code=500, detail=f"Internal server error: {str(e)}")


@router.post("", response_model=Audit_requestsResponse, status_code=201)
async def create_audit_requests(
    data: Audit_requestsData,
    db: AsyncSession = Depends(get_db),
):
    """Create a new audit_requests"""
    logger.debug(f"Creating new audit_requests with data: {data}")
    
    service = Audit_requestsService(db)
    try:
        result = await service.create(data.model_dump())
        if not result:
            raise HTTPException(status_code=400, detail="Failed to create audit_requests")
        
        logger.info(f"Audit_requests created successfully with id: {result.id}")

        # ✅ Enviar email tras guardar en BD
        await send_audit_email(data)

        return result
    except ValueError as e:
        logger.error(f"Validation error creating audit_requests: {str(e)}")
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        logger.error(f"Error creating audit_requests: {str(e)}", exc_info=True)
        raise HTTPException(status_code=500, detail=f"Internal server error: {str(e)}")

# Añade esta función auxiliar en el mismo archivo
async def send_audit_email(data: Audit_requestsData):
    try:
        msg = MIMEMultipart("alternative")
        msg["Subject"] = f"Nueva solicitud de auditoría - {data.company}"
        msg["From"] = os.getenv("SMTP_USER")
        msg["To"] = os.getenv("AUDIT_RECIPIENT_EMAIL")
        msg["Reply-To"] = data.email

        html = f"""
        <html>
          <body style="font-family: Arial, sans-serif; color: #333;">
            <h2 style="color: #00D9FF;">Nueva Solicitud de Auditoría</h2>
            <hr/>
            <p><strong>Nombre:</strong> {data.name}</p>
            <p><strong>Email:</strong> {data.email}</p>
            <p><strong>Empresa:</strong> {data.company}</p>
            <p><strong>Teléfono:</strong> {data.phone}</p>
            <p><strong>Mensaje:</strong><br/>{data.message}</p>
            <hr/>
            <p style="color: #999; font-size: 12px;">Solicitud recibida desde el formulario web.</p>
          </body>
        </html>
        """

        msg.attach(MIMEText(html, "html"))

        await aiosmtplib.send(
            msg,
            hostname=os.getenv("SMTP_HOST"),
            port=int(os.getenv("SMTP_PORT", 465)),
            username=os.getenv("SMTP_USER"),
            password=os.getenv("SMTP_PASSWORD"),
            start_tls=True,
        )
        logger.info(f"Email de auditoría enviado correctamente para {data.company}")
    except Exception as e:
        # No bloqueamos la respuesta si falla el email
        logger.error(f"Error enviando email de auditoría: {str(e)}")

@router.post("/batch", response_model=List[Audit_requestsResponse], status_code=201)
async def create_audit_requestss_batch(
    request: Audit_requestsBatchCreateRequest,
    db: AsyncSession = Depends(get_db),
):
    """Create multiple audit_requestss in a single request"""
    logger.debug(f"Batch creating {len(request.items)} audit_requestss")
    
    service = Audit_requestsService(db)
    results = []
    
    try:
        for item_data in request.items:
            result = await service.create(item_data.model_dump())
            if result:
                results.append(result)
        
        logger.info(f"Batch created {len(results)} audit_requestss successfully")
        return results
    except Exception as e:
        await db.rollback()
        logger.error(f"Error in batch create: {str(e)}", exc_info=True)
        raise HTTPException(status_code=500, detail=f"Batch create failed: {str(e)}")


@router.put("/batch", response_model=List[Audit_requestsResponse])
async def update_audit_requestss_batch(
    request: Audit_requestsBatchUpdateRequest,
    db: AsyncSession = Depends(get_db),
):
    """Update multiple audit_requestss in a single request"""
    logger.debug(f"Batch updating {len(request.items)} audit_requestss")
    
    service = Audit_requestsService(db)
    results = []
    
    try:
        for item in request.items:
            # Only include non-None values for partial updates
            update_dict = {k: v for k, v in item.updates.model_dump().items() if v is not None}
            result = await service.update(item.id, update_dict)
            if result:
                results.append(result)
        
        logger.info(f"Batch updated {len(results)} audit_requestss successfully")
        return results
    except Exception as e:
        await db.rollback()
        logger.error(f"Error in batch update: {str(e)}", exc_info=True)
        raise HTTPException(status_code=500, detail=f"Batch update failed: {str(e)}")


@router.put("/{id}", response_model=Audit_requestsResponse)
async def update_audit_requests(
    id: int,
    data: Audit_requestsUpdateData,
    db: AsyncSession = Depends(get_db),
):
    """Update an existing audit_requests"""
    logger.debug(f"Updating audit_requests {id} with data: {data}")

    service = Audit_requestsService(db)
    try:
        # Only include non-None values for partial updates
        update_dict = {k: v for k, v in data.model_dump().items() if v is not None}
        result = await service.update(id, update_dict)
        if not result:
            logger.warning(f"Audit_requests with id {id} not found for update")
            raise HTTPException(status_code=404, detail="Audit_requests not found")
        
        logger.info(f"Audit_requests {id} updated successfully")
        return result
    except HTTPException:
        raise
    except ValueError as e:
        logger.error(f"Validation error updating audit_requests {id}: {str(e)}")
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        logger.error(f"Error updating audit_requests {id}: {str(e)}", exc_info=True)
        raise HTTPException(status_code=500, detail=f"Internal server error: {str(e)}")


@router.delete("/batch")
async def delete_audit_requestss_batch(
    request: Audit_requestsBatchDeleteRequest,
    db: AsyncSession = Depends(get_db),
):
    """Delete multiple audit_requestss by their IDs"""
    logger.debug(f"Batch deleting {len(request.ids)} audit_requestss")
    
    service = Audit_requestsService(db)
    deleted_count = 0
    
    try:
        for item_id in request.ids:
            success = await service.delete(item_id)
            if success:
                deleted_count += 1
        
        logger.info(f"Batch deleted {deleted_count} audit_requestss successfully")
        return {"message": f"Successfully deleted {deleted_count} audit_requestss", "deleted_count": deleted_count}
    except Exception as e:
        await db.rollback()
        logger.error(f"Error in batch delete: {str(e)}", exc_info=True)
        raise HTTPException(status_code=500, detail=f"Batch delete failed: {str(e)}")


@router.delete("/{id}")
async def delete_audit_requests(
    id: int,
    db: AsyncSession = Depends(get_db),
):
    """Delete a single audit_requests by ID"""
    logger.debug(f"Deleting audit_requests with id: {id}")
    
    service = Audit_requestsService(db)
    try:
        success = await service.delete(id)
        if not success:
            logger.warning(f"Audit_requests with id {id} not found for deletion")
            raise HTTPException(status_code=404, detail="Audit_requests not found")
        
        logger.info(f"Audit_requests {id} deleted successfully")
        return {"message": "Audit_requests deleted successfully", "id": id}
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error deleting audit_requests {id}: {str(e)}", exc_info=True)
        raise HTTPException(status_code=500, detail=f"Internal server error: {str(e)}")