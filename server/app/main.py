import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.contact import router as contact_router
from app.routes.auth import router as auth_router

from app.database.db import Base, engine
from app.models.contact import Contact


Base.metadata.create_all(bind=engine)

app= FastAPI()

FRONTEND_URL = os.getenv("FRONTEND_URL", "http://localhost:5173")

origins = [
    FRONTEND_URL,
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "https://portfolio-apps-kappa.vercel.app",
    "https://portfolio-apps-aakashsah247s-projects.vercel.app",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(contact_router)
app.include_router(auth_router)

@app.get("/")
def root():
    return {"message": "portfolio API is running"}

