from fastapi import APIRouter, HTTPException, Depends, status
from typing import List, Optional
from datetime import datetime

router = APIRouter(tags=["API"])

# Health check endpoint
@router.get("/health", status_code=status.HTTP_200_OK)
async def health_check():
    return {
        "status": "healthy",
        "timestamp": datetime.now().isoformat(),
        "service": "marinaflow-api"
    }

# Example endpoints
@router.get("/hello/{name}")
async def say_hello(name: str):
    return {"message": f"Ciao {name}, benvenuto in MarinaFlow!"}

@router.get("/yachts")
async def get_yachts():
    # Questo è un esempio, poi implementeremo il database
    return [
        {"id": 1, "name": "Ocean Dream", "type": "Sailboat", "length": 12},
        {"id": 2, "name": "Sea Breeze", "type": "Motor Yacht", "length": 15},
        {"id": 3, "name": "Marina Queen", "type": "Catamaran", "length": 10},
    ]

@router.post("/bookings")
async def create_booking():
    # Placeholder per creazione prenotazione
    return {"message": "Booking endpoint - da implementare"}

# Models placeholder
@router.get("/models")
async def get_data_models():
    return {
        "models": ["Yacht", "Booking", "Customer", "Invoice", "Service"]
    }
