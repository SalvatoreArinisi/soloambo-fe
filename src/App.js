import React, { useState } from 'react';
import './App.css';
import AuthPage from './component/AuthPage';
import EstrattoreAmbo from './component/EstrattoreAmbo';
import RotatingBall from "./component/RotatingBall";


function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [welcomeMessage, setLoginMessage] = useState(''); // Stato per il messaggio di benvenuto
    const [isLoading, setLoading] = useState(false); // Stato per eventi di caricamento
    const [ambiCaricati, setAmbiCaricati] = useState(false); // quando gli ambi sono caricati completamente 

    const handleLoginSuccess = (message) => {
        setIsAuthenticated(true); // Imposta lo stato di autenticazione a true
        setLoginMessage(message); // Mostra il messaggio
    };

    return (
        <div className={`App ${isLoading || ambiCaricati ? 'dimmed-background' : ''}`}>
            {!isAuthenticated ? (
                <AuthPage setIsAuthenticated={handleLoginSuccess} setLoading={setLoading} />
            ) : (
                <>
                    {!ambiCaricati && welcomeMessage && <p className="WelcomeMessage">{welcomeMessage}</p>}
                    <EstrattoreAmbo setLoading={setLoading} setAmbiCaricati={setAmbiCaricati}/>
                </>
            )}
            {isLoading && <RotatingBall />}
        </div>
    );
}

export default App;
