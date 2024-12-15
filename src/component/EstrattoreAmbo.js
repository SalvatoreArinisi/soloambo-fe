import React, { useState,useEffect } from 'react';
import { estraiAmbi } from '../controller/AmbiController';
import Ambi from "./Ambi";
import Utility from '../Utility';
import './Estrattore.css';

function EstrattoreAmbo({ setIsAuthenticated, setLoading, setAmbiCaricati }) {
    const [giocata, setGiocata] = useState(null);
    const [message, setMessage] = useState('');
    const [messageError, setMessageError] = useState([]);

    useEffect(() => {
        if (messageError[0] === 401) {
            setIsAuthenticated(false);
        }
    }, [messageError,setIsAuthenticated]);

    const handleFetchAmbi = () => {

        setMessageError([]);//reset eventuali errori precedenti
        estraiAmbi(setGiocata, setMessage, setMessageError, setLoading, setAmbiCaricati, setIsAuthenticated);
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
                        display: giocata || messageError[0]? "none" : "block",
                    }}>Estrai Ambi</button>
                </div>
                {messageError && (
                <div>
                    <p className="messageError">{messageError[1]}</p>
                </div>
            )}
        </div>
    );
}

export default EstrattoreAmbo;
