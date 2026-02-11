// Configurazione API
const API_URL = 'http://localhost:8000/api';

// Stato dell'applicazione
let yachts = [];

// Carica yacht all'avvio
document.addEventListener('DOMContentLoaded', () => {
    checkAPI();
    loadYachts();
    setupEventListeners();
});

// Verifica stato API
async function checkAPI() {
    try {
        const response = await fetch(`${API_URL}/health`);
        const data = await response.json();
        document.getElementById('api-status').textContent = '✅ Online';
        document.getElementById('api-status').style.color = '#0f766e';
    } catch (error) {
        document.getElementById('api-status').textContent = '❌ Offline';
        document.getElementById('api-status').style.color = '#991b1b';
    }
}

// Carica lista yacht
async function loadYachts() {
    try {
        const response = await fetch(`${API_URL}/yachts`);
        yachts = await response.json();
        displayYachts();
        updateYachtSelect();
        document.getElementById('total-yachts').textContent = yachts.length;
    } catch (error) {
        console.error('Errore caricamento yacht:', error);
        document.getElementById('yacht-list').innerHTML = '<div class="error">Errore caricamento yacht</div>';
    }
}

// Mostra yacht nella griglia
function displayYachts() {
    const yachtList = document.getElementById('yacht-list');
    
    if (yachts.length === 0) {
        yachtList.innerHTML = '<div class="loading">Nessuno yacht disponibile</div>';
        return;
    }
    
    yachtList.innerHTML = yachts.map(yacht => `
        <div class="yacht-card">
            <h4>${yacht.name}</h4>
            <div class="yacht-type">${yacht.type}</div>
            <div class="yacht-length">📏 ${yacht.length} metri</div>
        </div>
    `).join('');
}

// Aggiorna select dello yacht nel form
function updateYachtSelect() {
    const select = document.getElementById('yacht');
    select.innerHTML = '<option value="">Seleziona uno yacht</option>' +
        yachts.map(yacht => `<option value="${yacht.id}">${yacht.name} (${yacht.type})</option>`).join('');
}

// Setup event listeners
function setupEventListeners() {
    const bookingForm = document.getElementById('booking-form');
    bookingForm.addEventListener('submit', handleBooking);
}

// Gestione prenotazione
async function handleBooking(event) {
    event.preventDefault();
    
    const messageDiv = document.getElementById('booking-message');
    messageDiv.className = 'message';
    messageDiv.textContent = 'Creazione prenotazione...';
    
    const bookingData = {
        yacht_id: document.getElementById('yacht').value,
        customer: document.getElementById('customer').value,
        start_date: document.getElementById('start-date').value,
        end_date: document.getElementById('end-date').value
    };
    
    // Validazione base
    if (!bookingData.yacht_id || !bookingData.customer || !bookingData.start_date || !bookingData.end_date) {
        messageDiv.className = 'message error';
        messageDiv.textContent = '❌ Tutti i campi sono obbligatori';
        return;
    }
    
    if (new Date(bookingData.start_date) >= new Date(bookingData.end_date)) {
        messageDiv.className = 'message error';
        messageDiv.textContent = '❌ La data di fine deve essere dopo la data di inizio';
        return;
    }
    
    try {
        const response = await fetch(`${API_URL}/bookings`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookingData)
        });
        
        if (response.ok) {
            messageDiv.className = 'message success';
            messageDiv.textContent = '✅ Prenotazione creata con successo!';
            bookingForm.reset();
            
            // Aggiorna statistiche (simulato)
            document.getElementById('bookings-today').textContent = 
                parseInt(document.getElementById('bookings-today').textContent || '0') + 1;
        } else {
            throw new Error('Errore nella creazione');
        }
    } catch (error) {
        messageDiv.className = 'message error';
        messageDiv.textContent = '❌ Errore nella creazione della prenotazione';
        console.error('Booking error:', error);
    }
}

// Aggiorna statistiche ogni 30 secondi
setInterval(() => {
    checkAPI();
    loadYachts();
}, 30000);
