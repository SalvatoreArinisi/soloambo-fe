import React, { useState } from 'react';
import { estraiAmbi } from '../controller/AmbiController';
import './Estrattore.css';
import Ambi from "./Ambi";
import Utility from '../Utility';

function EstrattoreAmbo({ setLoading,setAmbiCaricati}) {
    const [giocata, setGiocata] = useState(null);
    const [message, setMessage] = useState('');

    const handleFetchAmbi = () => {
        estraiAmbi(setGiocata, setMessage, setLoading, setAmbiCaricati); 
    };

    return (
        <div className="EstrattoreContainer">
            <header>Gioca i tuoi ambi!</header>
            {giocata && (
                <div className="giocata">
                    <h2 className="message-down">giocali sulla ruota di {giocata.ruota} il {Utility.estraiGiornoEMese(giocata.dataEstrazione)}</h2>                 
                    <Ambi ambi={giocata.ambi} />
                    <p className="message-up">{message}</p>
                </div>
            )}
            <div className="ButtonContainer">
                <button onClick={handleFetchAmbi}>Estrai Ambi</button>
            </div>
        </div>
    );
}

export default EstrattoreAmbo;
