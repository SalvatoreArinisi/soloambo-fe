// src/App.js
import React, { useState } from 'react';
import AuthPage from './AuthPage';
import EstrattoreAmbo from './EstrattoreAmbo';
import './App.css';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [welcomeMessage, setWelcomeMessage] = useState(''); // Stato per il messaggio di benvenuto
    const [opacityToBI, setOpacityToBI] = useState(false); // Stato per l'opacità dell'immagine di background

    const handleLoginSuccess = (message) => {
        setIsAuthenticated(true);         // Imposta lo stato di autenticazione a true
        setWelcomeMessage(message);       // Salva il messaggio di benvenuto
    };

    return (
        <div className={`App ${opacityToBI ? 'dimmed-background' : ''}`}>
            {!isAuthenticated ? (
                <AuthPage setIsAuthenticated={handleLoginSuccess} />
            ) : (
                <>
                    {welcomeMessage && <p className="WelcomeMessage">{welcomeMessage}</p>}
                    <EstrattoreAmbo setOpacityToBI={setOpacityToBI}/>
                </>
            )}
        </div>
    );
}

export default App;
