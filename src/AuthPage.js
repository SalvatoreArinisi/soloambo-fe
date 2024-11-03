// src/AuthPage.js
import React from 'react';
import './AuthPage.css';

function AuthPage({ setIsAuthenticated }) {
    const handleLogin = () => {
        console.log('Login clicked');
        // Logica per la gestione del login (es. reindirizzamento o autenticazione)
        setIsAuthenticated(true); // Simula l'autenticazione con successo
    };

    const handleRegistration = () => {
        console.log('Registration clicked');
        // Logica per la gestione della registrazione
    };

    return (
        <div className="AuthContainer">
            <h1>Benvenuto su SoloAmbo</h1>
            <div className="ButtonContainer">
                <button onClick={handleLogin} className="AuthButton">Login</button>
                <button onClick={handleRegistration} className="AuthButton">Registrazione</button>
            </div>
        </div>
    );
}

export default AuthPage;
