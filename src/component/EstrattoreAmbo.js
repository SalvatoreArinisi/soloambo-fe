import React, { useState } from 'react';
import { estraiAmbi } from '../controller/AmbiController'; // Importa dal controller
import './Estrattore.css';
import Ambi from "./Ambi";

function EstrattoreAmbo({ setAmbi }) {
    const [giocata, setGiocata] = useState(null);
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleFetchAmbi = () => {
        setAmbi(true)
        estraiAmbi(setGiocata, setMessage, setLoading); // Chiama la funzione dal controller
    };

    return (
        <div className="EstrattoreContainer">
            <header>Gioca i tuoi ambi!</header>
            {loading && <p>Caricamento...</p>}
            {giocata && (
                <div className="giocata">
                    <h2>giocali sulla ruota di {giocata.ruota} il {giocata.dataEstrazione}</h2>                 
                    <Ambi ambi={giocata.ambi} />
                    <p>{message}</p>
                </div>
            )}
            <div className="ButtonContainer">
                <button onClick={handleFetchAmbi}>Estrai Ambi</button>
            </div>
        </div>
    );
}

export default EstrattoreAmbo;
