import logging
from typing import Optional, Dict, Any, List

from sqlalchemy import select, func
from sqlalchemy.ext.asyncio import AsyncSession

from models.audit_requests import Audit_requests

logger = logging.getLogger(__name__)


# ------------------ Service Layer ------------------
class Audit_requestsService:
    """Service layer for Audit_requests operations"""

    def __init__(self, db: AsyncSession):
        self.db = db

    async def create(self, data: Dict[str, Any]) -> Optional[Audit_requests]:
        """Create a new audit_requests"""
        try:
            obj = Audit_requests(**data)
            self.db.add(obj)
            await self.db.commit()
            await self.db.refresh(obj)
            logger.info(f"Created audit_requests with id: {obj.id}")
            return obj
        except Exception as e:
            await self.db.rollback()
            logger.error(f"Error creating audit_requests: {str(e)}")
            raise

    async def get_by_id(self, obj_id: int) -> Optional[Audit_requests]:
        """Get audit_requests by ID"""
        try:
            query = select(Audit_requests).where(Audit_requests.id == obj_id)
            result = await self.db.execute(query)
            return result.scalar_one_or_none()
        except Exception as e:
            logger.error(f"Error fetching audit_requests {obj_id}: {str(e)}")
            raise

    async def get_list(
        self, 
        skip: int = 0, 
        limit: int = 20, 
        query_dict: Optional[Dict[str, Any]] = None,
        sort: Optional[str] = None,
    ) -> Dict[str, Any]:
        """Get paginated list of audit_requestss"""
        try:
            query = select(Audit_requests)
            count_query = select(func.count(Audit_requests.id))
            
            if query_dict:
                for field, value in query_dict.items():
                    if hasattr(Audit_requests, field):
                        query = query.where(getattr(Audit_requests, field) == value)
                        count_query = count_query.where(getattr(Audit_requests, field) == value)
            
            count_result = await self.db.execute(count_query)
            total = count_result.scalar()

            if sort:
                if sort.startswith('-'):
                    field_name = sort[1:]
                    if hasattr(Audit_requests, field_name):
                        query = query.order_by(getattr(Audit_requests, field_name).desc())
                else:
                    if hasattr(Audit_requests, sort):
                        query = query.order_by(getattr(Audit_requests, sort))
            else:
                query = query.order_by(Audit_requests.id.desc())

            result = await self.db.execute(query.offset(skip).limit(limit))
            items = result.scalars().all()

            return {
                "items": items,
                "total": total,
                "skip": skip,
                "limit": limit,
            }
        except Exception as e:
            logger.error(f"Error fetching audit_requests list: {str(e)}")
            raise

    async def update(self, obj_id: int, update_data: Dict[str, Any]) -> Optional[Audit_requests]:
        """Update audit_requests"""
        try:
            obj = await self.get_by_id(obj_id)
            if not obj:
                logger.warning(f"Audit_requests {obj_id} not found for update")
                return None
            for key, value in update_data.items():
                if hasattr(obj, key):
                    setattr(obj, key, value)

            await self.db.commit()
            await self.db.refresh(obj)
            logger.info(f"Updated audit_requests {obj_id}")
            return obj
        except Exception as e:
            await self.db.rollback()
            logger.error(f"Error updating audit_requests {obj_id}: {str(e)}")
            raise

    async def delete(self, obj_id: int) -> bool:
        """Delete audit_requests"""
        try:
            obj = await self.get_by_id(obj_id)
            if not obj:
                logger.warning(f"Audit_requests {obj_id} not found for deletion")
                return False
            await self.db.delete(obj)
            await self.db.commit()
            logger.info(f"Deleted audit_requests {obj_id}")
            return True
        except Exception as e:
            await self.db.rollback()
            logger.error(f"Error deleting audit_requests {obj_id}: {str(e)}")
            raise

    async def get_by_field(self, field_name: str, field_value: Any) -> Optional[Audit_requests]:
        """Get audit_requests by any field"""
        try:
            if not hasattr(Audit_requests, field_name):
                raise ValueError(f"Field {field_name} does not exist on Audit_requests")
            result = await self.db.execute(
                select(Audit_requests).where(getattr(Audit_requests, field_name) == field_value)
            )
            return result.scalar_one_or_none()
        except Exception as e:
            logger.error(f"Error fetching audit_requests by {field_name}: {str(e)}")
            raise

    async def list_by_field(
        self, field_name: str, field_value: Any, skip: int = 0, limit: int = 20
    ) -> List[Audit_requests]:
        """Get list of audit_requestss filtered by field"""
        try:
            if not hasattr(Audit_requests, field_name):
                raise ValueError(f"Field {field_name} does not exist on Audit_requests")
            result = await self.db.execute(
                select(Audit_requests)
                .where(getattr(Audit_requests, field_name) == field_value)
                .offset(skip)
                .limit(limit)
                .order_by(Audit_requests.id.desc())
            )
            return result.scalars().all()
        except Exception as e:
            logger.error(f"Error fetching audit_requestss by {field_name}: {str(e)}")
            raise