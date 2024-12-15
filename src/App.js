import React, { useState,useEffect } from 'react';
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

    useEffect(() => {
        setIsAuthenticated(localStorage.getItem('nickname') !== null && localStorage.getItem('password') !== null);
    }, []); 

    const handleLogin = (message) => {
        setIsAuthenticated(true); // Imposta lo stato di autenticazione a true
        setLoginMessage(message); // Mostra il messaggio
    };

    const logoutClick = () => {
        setIsAuthenticated(false);
    }

    return (
        <div className={`App ${isLoading || ambiCaricati ? 'dimmed-background' : ''}`}>
            <header>
                <p className="benvenutoSuSoloAmbo">Benvenuto su SoloAmbo</p>
                <button
                    onClick={() => setShowPrivacy(true)}  // Apri la modale
                    className="header-button"
                >
                    Regolamento
                </button>      
                {isAuthenticated && ( <button className="header-button" onClick={logoutClick} >logout</button> )}
                <MobileMenu onRegulationClick={() => setShowPrivacy(true)} onLogoutClick = {() => logoutClick()} isAuthenticated={isAuthenticated}/>
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
                <AuthPage setIsAuthenticated={handleLogin} setLoading={setLoading} />
            ) : (
                <>
                    {!ambiCaricati && welcomeMessage && <p className="WelcomeMessage">{welcomeMessage}</p>}
                    <EstrattoreAmbo setIsAuthenticated={setIsAuthenticated} setLoading={setLoading} setAmbiCaricati={setAmbiCaricati} />
                </>
            )}
            {isLoading && <RotatingBall />}
        </div>
    );
}

export default App;
