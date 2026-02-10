from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from .api.routes import router as api_router
from .core.config import settings

app = FastAPI(
    title="MarinaFlow API",
    description="Sistema di gestione marina completo",
    version="1.0.0",
    docs_url="/api/docs",
    redoc_url="/api/redoc",
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In produzione, specifica domini
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Includi router API
app.include_router(api_router, prefix="/api")

@app.get("/")
async def root():
    return {
        "message": "Benvenuto in MarinaFlow API",
        "version": "1.0.0",
        "docs": "/api/docs",
        "health": "/api/health"
    }

if __name__ == "__main__":
    uvicorn.run(
        "src.marinaflow.main:app",
        host="0.0.0.0",
        port=8000,
        reload=True,
        log_level="info"
    )
