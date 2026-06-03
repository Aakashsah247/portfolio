from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.schemas.contact import ContactCreate
from app.models.contact import Contact
from app.database.deps import get_db

from fastapi import HTTPException
from fastapi import Depends
from app.database.deps import get_db

from app.routes.auth import verify_token


router = APIRouter()


@router.post("/contact")
def create_contact(data: ContactCreate, db: Session = Depends(get_db)):

    new_message = Contact(
        name=data.name,
        email=data.email,
        message=data.message
    )

    db.add(new_message)
    db.commit()
    db.refresh(new_message)

    return {
        "success": True,
        "message": "Message saved successfully"
    }


@router.get("/messages")
def get_messages(
    db: Session = Depends(get_db),
    admin: str = Depends(verify_token)):
    messages = db.query(Contact).order_by(Contact.id.desc()).all()

    return messages

@router.delete("/messages/{id}")
def delete_message(
    id: int,
    db: Session = Depends(get_db),
    admin: str = Depends(verify_token)):
    msg = db.query(Contact).filter(Contact.id == id).first()

    if not msg:
        raise HTTPException(status_code=404, detail="Message not found")

    db.delete(msg)
    db.commit()

    return {
        "success": True,
        "message": "Message deleted"
    }
