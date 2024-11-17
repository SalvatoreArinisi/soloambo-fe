import React, { useState } from 'react';
import './AuthPage.css';
import userController from '../controller/UserController'; 

function AuthPage({ setIsAuthenticated, onLoginStart }) {
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async () => {
        setErrorMessage(''); // Resetta eventuali errori precedenti
        onLoginStart(true); // Mostra RotatingBall

        const nickname = "Salvatore";
        const password = "123";
        const loginResponse = await userController.login(nickname, password);
       
        if (loginResponse.status) {
            setIsAuthenticated(loginResponse.message); // Passa il messaggio di benvenuto
        } else {
            setErrorMessage(loginResponse.message);
        }
        onLoginStart(false); 
    };

    const handleRegistration = () => {
        console.log('Registration clicked');
    };

    return (
        <div className="AuthContainer">
            <h1>Benvenuto su SoloAmbo</h1>
            {errorMessage && <p className="ErrorMessage">{errorMessage}</p>}
            <div className="ButtonContainer">
                <button onClick={handleLogin} className="AuthButton">Login</button>
                <button onClick={handleRegistration} className="AuthButton">Registrazione</button>
            </div>
        </div>
    );
}

export default AuthPage;