# Aakash Sah Portfolio Website

A modern full-stack developer portfolio built with React, Tailwind CSS, FastAPI, PostgreSQL, and JWT authentication.

Live Domain: https://aakashsah247.com.np

---

## Project Overview

This portfolio website is designed to showcase my skills, projects, resume, and contact information. It also includes a full-stack contact system where visitors can send messages and an admin dashboard where messages can be managed securely.

---

## Features

### Frontend
- Modern responsive portfolio UI
- Navbar and hero section
- About section
- Skills section
- Projects section
- Contact form
- Resume download
- Footer with social links
- Mobile responsive navigation
- Scroll-to-top button
- Admin login page
- Protected admin dashboard

### Backend
- FastAPI REST API
- Contact message API
- PostgreSQL database integration
- Admin login API
- JWT authentication
- Protected admin routes
- Delete contact messages
- Environment variable support

---

## Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- React Icons
- Framer Motion

### Backend
- FastAPI
- Uvicorn
- SQLAlchemy
- PostgreSQL
- Python-Jose
- Python-Dotenv

### Database
- PostgreSQL

---
## Frontend Setup
cd client
npm install
npm run dev

## Backend Setup
cd server
pip install -r requirements.txt
uvicorn app.main:app --reload

## Contact Form Flow
User submits contact form
        ↓
React frontend sends request
        ↓
FastAPI backend receives data
        ↓
SQLAlchemy saves message
        ↓
PostgreSQL stores message
        ↓
Admin dashboard displays message

## Security Features
JWT-based admin authentication
Protected backend admin APIs
Environment variables for secrets
CORS configuration
Admin route protection in frontend

## Author

Aakash Sah
GitHub: https://github.com/Aakashsah247
Portfolio: https://aakashsah247.com.np


## Folder Structure

```txt
portfolio/
│
├── client/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── common/
│   │   │   ├── layout/
│   │   │   └── sections/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── server/
│   ├── app/
│   │   ├── database/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── schemas/
│   │   └── main.py
│   │
│   ├── requirements.txt
│   └── .env
│
├── README.md
└── .gitignore


