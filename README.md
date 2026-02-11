# ⚓ MarinaFlow - Sistema Gestione Marina

**Backend FastAPI + Frontend HTML/CSS/JS per la gestione di porti turistici**

[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)
[![Python](https://img.shields.io/badge/Python-3.14%2B-blue)](https://python.org)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.128.7-009688)](https://fastapi.tiangolo.com)

---

## 📋 INDICE

- [Panoramica](#panoramica)
- [Architettura](#architettura)
- [Backend API](#backend-api)
- [Frontend](#frontend)
- [Installazione](#installazione)
- [Sviluppo](#sviluppo)
- [Credits](#credits)
- [Licenza](#licenza)

---

## 🎯 PANORAMICA

MarinaFlow è un sistema completo per la gestione di porti turistici che permette di:

- ✅ Gestire flotte di yacht e imbarcazioni
- ✅ Creare e gestire prenotazioni
- ✅ Monitorare disponibilità in tempo reale
- ✅ Generare report e statistiche
- ✅ API RESTful pronte per integrazioni
- ✅ Frontend professionale e responsive

---

## 🏗️ ARCHITETTURA

```mermaid
graph TB
    subgraph "Frontend (Vercel)"
        A[HTML/CSS/JS] --> B[Browser]
    end
    
    subgraph "Backend (FastAPI)"
        C[API Routes] --> D[Core Logic]
        D --> E[Database Models]
    end
    
    subgraph "Database (Docker)"
        F[(PostgreSQL)]
    end
    
    B <--> C
    E <--> F
    
    style A fill:#f9f,stroke:#333
    style C fill:#bbf,stroke:#333
    style F fill:#bfb,stroke:#333

