import ApiService from '../services/ApiService';

// Funzione per estrarre gli ambi
export async function estraiAmbi(setGiocata, setMessage, setMessageError, setLoading, setAmbiCaricati, setIsAuthenticated) {
    setLoading(true);
    try {
        const data = await ApiService.getAmbi();
        setGiocata(data.giocata);
        setMessage(data.message);
        setAmbiCaricati(true);
    } catch (error) {
        let descError = error.status === 401?'utente non riconosciuto':'errore nel recupero dei dati, riprova più tardi';
        let messageError = [error.status,descError]
        setMessageError(messageError);
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
