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
┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│ Browser │ ──> │ Frontend │ ──> │ Backend │
│ (Vercel) │ <── │ (HTML/CSS) │ <── │ (FastAPI) │
└─────────────┘ └─────────────┘ └─────────────┘
│
▼
┌─────────────┐
│ Database │
│ (Docker) │
└─────────────┘


---

## 🔧 BACKEND API

| Metodo | Endpoint | Descrizione |
|--------|---------|-------------|
| GET | `/` | Homepage API |
| GET | `/api/health` | Health check server |
| GET | `/api/hello/{name}` | Saluto personalizzato |
| GET | `/api/yachts` | Lista yacht disponibili |
| POST | `/api/bookings` | Crea nuova prenotazione |
| GET | `/api/docs` | Documentazione Swagger |
| GET | `/api/redoc` | Documentazione ReDoc |

---

## 🎨 FRONTEND

### Caratteristiche

- ✅ Design professionale con palette marina
- ✅ Completamente responsive (mobile/tablet/desktop)
- ✅ Griglia yacht dinamica con card animate
- ✅ Form prenotazioni con validazione
- ✅ Dashboard con statistiche in tempo reale
- ✅ Feedback visivi (successo/errore/caricamento)

### Tecnologie

- **HTML5** semantico
- **CSS3** con Flexbox/Grid
- **JavaScript** vanilla (nessun framework)
- **Fetch API** per comunicazione con backend

👨‍💻 CREDITS
Carmine D'Alise

🐙 GitHub: @iacreatorcar

📧 Email: iacreatorcar@gmail.com

📍 Italia

📜 LICENZA
Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International

<p align="center"> <strong>MarinaFlow</strong> · Sviluppato con 🐍⚡ da <strong>Carmine D'Alise</strong><br> © 2026 · Tutti i diritti riservati · Privacy Strong by Design </p><p align="center"> <a href="https://github.com/iacreatorcar/marinaflow">GitHub</a> · <a href="#-marinaflow---sistema-gestione-marina">Torna su</a> </p> ```