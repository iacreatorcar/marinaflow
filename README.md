# MarinaFlow - Sistema Gestione Marina

Backend FastAPI + Frontend HTML/CSS/JS per la gestione di porti turistici

---

## 📋 INDICE

- [Panoramica](#panoramica)
- [Backend API](#backend-api)
- [Frontend](#frontend)
- [Installazione](#installazione)
- [Credits](#credits)
- [Licenza](#licenza)

---

## 🎯 PANORAMICA

MarinaFlow è un sistema per la gestione di porti turistici.

**Funzionalità:**
- Gestione yacht e imbarcazioni
- Sistema prenotazioni
- Dashboard interattiva
- API RESTful
- Frontend responsive

---

## 🔧 BACKEND API

| Metodo | Endpoint | Descrizione |
|--------|---------|-------------|
| GET | `/` | Homepage |
| GET | `/api/health` | Health check |
| GET | `/api/yachts` | Lista yacht |
| POST | `/api/bookings` | Crea prenotazione |
| GET | `/api/docs` | Documentazione Swagger |

---

## 🎨 FRONTEND

- HTML5, CSS3, JavaScript
- Design responsive
- Card yacht interattive
- Form prenotazioni con validazione

---

## 🚀 INSTALLAZIONE

```bash
git clone https://github.com/iacreatorcar/marinaflow.git
cd marinaflow
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python -m src.marinaflow.main

👨‍💻 CREDITS
Carmine D'Alise

GitHub: @iacreatorcar

📜 LICENZA
CC BY-NC-ND 4.0

<p align="center"> Sviluppato con Python e FastAPI da Carmine D'Alise<br> © 2026 </p> ```