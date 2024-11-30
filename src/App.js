import React, { useState } from 'react';
import './App.css';
import AuthPage from './component/AuthPage';
import EstrattoreAmbo from './component/EstrattoreAmbo';
import RotatingBall from "./component/RotatingBall";
import PrivacyPolicy from './component/PrivacyPolicy';
import MobileMenu from './component/MenuMobile';


function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [welcomeMessage, setLoginMessage] = useState(''); // Stato per il messaggio di benvenuto
    const [isLoading, setLoading] = useState(false); // Stato per eventi di caricamento
    const [ambiCaricati, setAmbiCaricati] = useState(false); // quando gli ambi sono caricati completamente 
    const [showPrivacy, setShowPrivacy] = useState(false);

    const handleLoginSuccess = (message) => {
        setIsAuthenticated(true); // Imposta lo stato di autenticazione a true
        setLoginMessage(message); // Mostra il messaggio
    };

    return (
        <div className={`App ${isLoading || ambiCaricati ? 'dimmed-background' : ''}`}>
            <header>
                Benvenuto su SoloAmbo
                <button
                    onClick={() => setShowPrivacy(true)}  // Apri la modale
                    className="header-button"
                >
                    Regolamento
                </button>           
                <MobileMenu onRegulationClick={() => setShowPrivacy(true)} />
            </header>
            {showPrivacy && (
                <div className="modal">
                    <div className="modal-content">
                        <PrivacyPolicy />
                        <button onClick={() => setShowPrivacy(false)} className="close-btn">
                            Chiudi
                        </button>
                    </div>
                </div>
            )}
            {!isAuthenticated ? (
                <AuthPage setIsAuthenticated={handleLoginSuccess} setLoading={setLoading} />
            ) : (
                <>
                    {!ambiCaricati && welcomeMessage && <p className="WelcomeMessage">{welcomeMessage}</p>}
                    <EstrattoreAmbo setLoading={setLoading} setAmbiCaricati={setAmbiCaricati} />
                </>
            )}
            {isLoading && <RotatingBall />}
        </div>
    );
}

export default App;
