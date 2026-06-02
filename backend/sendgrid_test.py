import os
from dotenv import load_dotenv
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

load_dotenv()

SENDGRID_API_KEY = os.getenv("SENDGRID_API_KEY")
FROM_EMAIL = os.getenv("FROM_EMAIL")
TO_EMAIL = os.getenv("TO_EMAIL")

message = Mail(
    from_email=FROM_EMAIL,
    to_emails=TO_EMAIL,
    subject="SendGrid Test Email from Nancy Portfolio",
    plain_text_content="This is a test email from my portfolio FastAPI backend."
)

try:
    sg = SendGridAPIClient(SENDGRID_API_KEY)
    response = sg.send(message)

    print("Status Code:", response.status_code)
    print("Email sent successfully.")

except Exception as e:
    print("Error:", e)