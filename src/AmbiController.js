// src/AmbiController.js
import ApiService from './ApiService';

// Funzione per estrarre gli ambi
export async function estraiAmbi(setGiocata, setMessage, setLoading) {
    setLoading(true);
    try {
        const data = await ApiService.getAmbi();
        setGiocata(data.giocata);
        setMessage(data.message);
    } catch (error) {
        console.error('Errore durante il recupero dei dati:', error);
        setMessage('Si è verificato un errore durante il recupero dei dati.');
    } finally {
        setLoading(false);
    }
}

// Qui puoi aggiungere altre funzioni per future esigenze
// export async function altraFunzione() { ... }
