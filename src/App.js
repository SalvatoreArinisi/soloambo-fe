import React, { useState } from 'react';
import './App.css';
import AuthPage from './component/AuthPage';
import EstrattoreAmbo from './component/EstrattoreAmbo';
import RotatingBall from "./component/RotatingBall";


function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [welcomeMessage, setLoginMessage] = useState(''); // Stato per il messaggio di benvenuto
    const [ambiCaricati, setAmbi] = useState(false); // Stato per evento di caricamento ambi
    const [isLoading, setIsLoading] = useState(false); // Stato per gestire il animazione di caricamento (RotatingBall)

    const handleLoginSuccess = (message) => {
        setIsAuthenticated(true); // Imposta lo stato di autenticazione a true
        setLoginMessage(message); // Mostra il messaggio
    };

    const handleLoginStart = (stato) => {
        setAmbi(stato);
        setIsLoading(stato); // Attiva/disattiva RotatingBall
    };

    return (
        <div className={`App ${ambiCaricati ? 'dimmed-background' : ''}`}>
            {!isAuthenticated ? (
                <AuthPage setIsAuthenticated={handleLoginSuccess} onLoginStart={handleLoginStart} />
            ) : (
                <>
                    {!ambiCaricati && welcomeMessage && <p className="WelcomeMessage">{welcomeMessage}</p>}
                    <EstrattoreAmbo setAmbi={setAmbi} />
                </>
            )}
            {isLoading && <RotatingBall />}
        </div>
    );
}

export default App;
