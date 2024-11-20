import React, { useState } from 'react';
import './App.css';
import AuthPage from './component/AuthPage';
import EstrattoreAmbo from './component/EstrattoreAmbo';
import RotatingBall from "./component/RotatingBall";
import Ambi from "./component/Ambi";

const ambiData = [
    { num1: 53, num2: 63 },
    { num1: 63, num2: 72 },
    { num1: 71, num2: 90 },
    { num1: 61, num2: 85 },
];

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [welcomeMessage, setLoginMessage] = useState(''); // Stato per il messaggio di benvenuto
    const [opacityToBI, setOpacityToBI] = useState(false); // Stato per l'opacità dell'immagine di background
    const [isLoading, setIsLoading] = useState(false); // Stato per gestire RotatingBall

    const handleLoginSuccess = (message) => {
        setIsAuthenticated(true); // Imposta lo stato di autenticazione a true
        setLoginMessage(message); // Mostra il messaggio
    };

    const handleLoginStart = (stato) => {
        setOpacityToBI(stato);
        setIsLoading(stato); // Attiva/disattiva RotatingBall
    };

    return (
        <div className={`App ${opacityToBI ? 'dimmed-background' : ''}`}>
            {!isAuthenticated ? (
                <AuthPage setIsAuthenticated={handleLoginSuccess} onLoginStart={handleLoginStart} />
            ) : (
                <>
                    {welcomeMessage && <p className="WelcomeMessage">{welcomeMessage}</p>}
                    <EstrattoreAmbo setOpacityToBI={setOpacityToBI} />
                </>
            )}
            {isLoading && <RotatingBall />}
            <Ambi ambi={ambiData} />
        </div>
    );
}

export default App;
