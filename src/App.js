import React, { useState } from 'react';
import AuthPage from './AuthPage';
import EstrattoreAmbo from './EstrattoreAmbo'; // Importa il componente per l'estrazione dell'ambo
import './App.css';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Stato per la gestione dell'autenticazione

    return (
        <div className="App">
            {!isAuthenticated ? (
                <AuthPage setIsAuthenticated={setIsAuthenticated} />
            ) : (
                <EstrattoreAmbo />
            )}
        </div>
    );
}

export default App;
