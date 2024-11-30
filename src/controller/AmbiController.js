import ApiService from '../services/ApiService';

// Funzione per estrarre gli ambi
export async function estraiAmbi(setGiocata, setMessage, setLoading, setAmbiCaricati) {
    setLoading(true);
    try {
        const data = await ApiService.getAmbi();
        setGiocata(data.giocata);
        setMessage(data.message);
        setAmbiCaricati(true);
    } catch (error) {
        console.error('Errore durante il recupero dei dati:', error);
        setMessage('Si è verificato un errore durante il recupero dei dati.');
    } finally {
        setLoading(false);
    }
}

export async function getPrivacy(setPrivacyData) {
    try{
        const jsonContent = await ApiService.getPrivacy();
        setPrivacyData(jsonContent);
    }catch (error) {
        console.error('Errore durante caricamento pagina privacy:', error);
        setPrivacyData("Errore durante caricamneto privacy");
    }
}

// Qui puoi aggiungere altre funzioni per future esigenze
// export async function altraFunzione() { ... }
