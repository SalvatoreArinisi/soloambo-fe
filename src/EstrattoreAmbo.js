import React, { useState } from 'react';
import { estraiAmbi } from './AmbiController'; // Importa dal controller
import './Estrattore.css';

function EstrattoreAmbo() {
    const [giocata, setGiocata] = useState(null);
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleFetch = () => {
        estraiAmbi(setGiocata, setMessage, setLoading); // Chiama la funzione dal controller
    };

    return (
        <div className="AppContainer">
            <header>Estrazione Lotto</header>
            <button onClick={handleFetch}>Estrai un Ambo</button>
            {loading && <p>Caricamento...</p>}
            {giocata && (
                <div>
                    <h2>Ruota: {giocata.ruota}</h2>
                    <h3>Ambi:</h3>
                    <ul>
                        {giocata.ambi.map((ambo, index) => (
                            <li key={index}>
                                {ambo.num1} e {ambo.num2}
                            </li>
                        ))}
                    </ul>
                    <p>Data Estrazione: {giocata.dataEstrazione}</p>
                    <p>Importo Consigliato: {giocata.importoConsigliato}</p>
                    <p>Messaggio: {message}</p>
                </div>
            )}
        </div>
    );
}

export default EstrattoreAmbo;
