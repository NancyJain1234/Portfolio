import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from dotenv import load_dotenv
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart 


load_dotenv()

app = FastAPI(title="Nancy Portfolio API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ContactRequest(BaseModel):
    name: str
    email: EmailStr
    message: str

@app.get("/")
def home():
    return {"message": "Nancy Portfolio FastAPI backend is running"}

@app.post("/api/contact")
def contact(data: ContactRequest):
    email_user = os.getenv("EMAIL_USER")
    email_password = os.getenv("EMAIL_PASSWORD")
    to_email = os.getenv("TO_EMAIL")

    msg = MIMEMultipart()
    msg["From"] = email_user
    msg["To"] = to_email
    msg["Subject"] = f"Portfolio Contact - {data.name}"

    body = f"""
    Name: {data.name}
    Email: {data.email}

    Message:
    {data.message}
    """

    msg.attach(MIMEText(body, "plain"))

    try:
        server = smtplib.SMTP("smtp.gmail.com", 587)
        server.starttls()
        server.login(email_user, email_password)
        server.send_message(msg)
        server.quit()

        return {
            "success": True,
            "message": "Email sent successfully"
        }

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )