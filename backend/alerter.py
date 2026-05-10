import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from dotenv import load_dotenv

load_dotenv()

SENDER = os.getenv("ALERT_EMAIL")
PASSWORD = os.getenv("ALERT_PASSWORD")
RECIPIENT = os.getenv("RECIPIENT_EMAIL")

def send_alert(room_id, power_w, devices_on):
    subject = f"[SmartFlow Alert] Wastage Detected — Room {room_id}"
    body = f"""
SmartFlow has detected unnecessary energy usage.

Room: {room_id}
Current Power: {power_w} W
Devices ON: {', '.join(devices_on)}

Recommendation: Please switch OFF devices in {room_id} — room appears unoccupied.

— SmartFlow Alert System
    """
    msg = MIMEMultipart()
    msg['From'] = SENDER
    msg['To'] = RECIPIENT
    msg['Subject'] = subject
    msg.attach(MIMEText(body, 'plain'))

    try:
        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
            server.login(SENDER, PASSWORD)
            server.send_message(msg)
            print(f"Alert sent for {room_id}")
    except Exception as e:
        print(f"Email failed: {e}")