import React, { useState } from 'react';
import { estraiAmbi } from '../controller/AmbiController';
import './Estrattore.css';
import Ambi from "./Ambi";
import Utility from '../Utility';

function EstrattoreAmbo({ setLoading, setAmbiCaricati }) {
    const [giocata, setGiocata] = useState(null);
    const [message, setMessage] = useState('');

    const handleFetchAmbi = () => {
        estraiAmbi(setGiocata, setMessage, setLoading, setAmbiCaricati);
    };

    const reset = () => {
        setGiocata(null);
    };

    return (
        <div className="EstrattoreContainer">
            {giocata && (
                <div className="giocata">
                    <p className="message-down">giocali sulla ruota di {giocata.ruota} il {Utility.estraiGiornoEMese(giocata.dataEstrazione)}</p>
                    <Ambi ambi={giocata.ambi} />
                    <p className="message-up">{message}</p>
                </div>
            )}
            <div className="ButtonContainer">
                <button onClick={handleFetchAmbi} style={{
                    display: giocata ? "none" : "block",
                }}>Estrai Ambi</button>
                <button onClick={reset} style={{
                    display: giocata ? "block" : "none",
                }}>Pulisci</button>
            </div>
        </div>
    );
}

export default EstrattoreAmbo;
