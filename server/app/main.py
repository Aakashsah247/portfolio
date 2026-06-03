from fastapi import FastAPI
from app.routes.contact import router as contact_router
from fastapi.middleware.cors import CORSMiddleware

from app.database.db import Base,engine
from app.models.contact import Contact
from app.routes.auth import router as auth_router

app= FastAPI()

Base.metadata.create_all(bind=engine)



app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],   
)

app.include_router(contact_router)
app.include_router(auth_router)

@app.get("/")
def root():
    return {"message": "portfolio API is running"}

