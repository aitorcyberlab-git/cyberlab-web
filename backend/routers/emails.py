import logging
import os
from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel, EmailStr
from sqlalchemy.ext.asyncio import AsyncSession
from datetime import datetime

from core.database import get_db
from services.audit_requests import Audit_requestsService

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/api/v1/emails", tags=["emails"])


class AuditRequestEmail(BaseModel):
    name: str
    email: EmailStr
    company: str
    phone: str
    message: str


class EmailResponse(BaseModel):
    success: bool
    message: str
    request_id: int = None


@router.post("/send-audit-request", response_model=EmailResponse)
async def send_audit_request_email(
    data: AuditRequestEmail,
    db: AsyncSession = Depends(get_db),
):
    """
    Process audit request: save to database and send confirmation emails
    """
    try:
        # 1. Save to database
        service = Audit_requestsService(db)
        audit_request = await service.create({
            "name": data.name,
            "email": data.email,
            "company": data.company,
            "phone": data.phone,
            "message": data.message,
            "status": "pending",
            "created_at": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
            "updated_at": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        })

        if not audit_request:
            raise HTTPException(status_code=500, detail="Failed to save audit request")

        # 2. Send email to admin (info@cyberlabforensics.com)
        admin_email_sent = await send_admin_notification(data)
        
        # 3. Send confirmation email to client
        client_email_sent = await send_client_confirmation(data)

        return EmailResponse(
            success=True,
            message="Solicitud recibida correctamente. Te contactaremos pronto.",
            request_id=audit_request.id
        )

    except Exception as e:
        logger.error(f"Error processing audit request: {e}")
        raise HTTPException(
            status_code=500,
            detail=f"Error al procesar la solicitud: {str(e)}"
        )


async def send_admin_notification(data: AuditRequestEmail) -> bool:
    """
    Send notification email to admin (info@cyberlabforensics.com)
    This is a placeholder - integrate with your email service (SendGrid, AWS SES, etc.)
    """
    try:
        # TODO: Integrate with actual email service
        # For now, we'll use a simple email service integration
        
        admin_email_body = f"""
        Nueva Solicitud de Auditoría de Seguridad
        
        Detalles del Cliente:
        - Nombre: {data.name}
        - Email: {data.email}
        - Empresa: {data.company}
        - Teléfono: {data.phone}
        
        Mensaje:
        {data.message}
        
        ---
        Esta solicitud ha sido guardada en la base de datos y está pendiente de revisión.
        Accede al panel de administración para gestionar esta solicitud.
        """
        
        # Log for now (replace with actual email sending)
        logger.info(f"Admin notification email prepared for: info@cyberlabforensics.com")
        logger.info(f"Email body: {admin_email_body}")
        
        return True
    except Exception as e:
        logger.error(f"Failed to send admin notification: {e}")
        return False


async def send_client_confirmation(data: AuditRequestEmail) -> bool:
    """
    Send confirmation email to client
    """
    try:
        client_email_body = f"""
        Estimado/a {data.name},
        
        Hemos recibido tu solicitud de auditoría de seguridad para {data.company}.
        
        Nuestro equipo revisará tu solicitud y se pondrá en contacto contigo en las próximas 24 horas.
        
        Detalles de tu solicitud:
        - Empresa: {data.company}
        - Email de contacto: {data.email}
        - Teléfono: {data.phone}
        
        Si tienes alguna pregunta urgente, no dudes en contactarnos directamente en:
        info@cyberlabforensics.com
        
        Gracias por confiar en Cyberlab Forensics.
        
        Saludos cordiales,
        Equipo de Cyberlab Forensics
        """
        
        # Log for now (replace with actual email sending)
        logger.info(f"Client confirmation email prepared for: {data.email}")
        logger.info(f"Email body: {client_email_body}")
        
        return True
    except Exception as e:
        logger.error(f"Failed to send client confirmation: {e}")
        return False