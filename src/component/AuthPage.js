import React, { useState } from 'react';
import './AuthPage.css';
import userController from '../controller/UserController';

function AuthPage({ setIsAuthenticated, setLoading }) {
    const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);

    const handleRegistration = () => {
        console.log('Registration clicked');
    };

    return (
        <div className="AuthContainer">
            {!isLoginFormVisible ? (
                <div className="ButtonContainer">
                    <button
                        onClick={() => setIsLoginFormVisible(true)} className="AuthButton">Login
                    </button>
                    <button
                        onClick={handleRegistration} className="AuthButton">Registrazione

                    </button>
                </div>
            ) : (
                <LoginForm setIsAuthenticated={setIsAuthenticated} setLoading={setLoading} setIsLoginFormVisible={setIsLoginFormVisible} />
            )}
        </div>
    );
}



function LoginForm({ setIsAuthenticated, setLoading, setIsLoginFormVisible }) {

    const [errorMessage, setErrorMessage] = useState('');
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const [opacizzaLoginForm, setOpacityLoginForm] = useState('');
    const handleAuthenticateClick = async () => {

        setErrorMessage(''); // Resetta eventuali errori precedenti del componente LoginForm

        setLoading(true);
        setOpacityLoginForm(true);

        const loginResponse = await userController.login(nickname, password);

        if (loginResponse.status) {
            setIsAuthenticated(loginResponse.message); // Passa il messaggio di benvenuto
            // Salva nel localStorage
            localStorage.setItem('nickname', nickname);
            localStorage.setItem('password', password);
        } else {
            setErrorMessage(loginResponse.message);
        }
        setLoading(false);
        setOpacityLoginForm(false);
    };

    const onCancel = () => {
        setIsLoginFormVisible(false);
    }

    return (
        <div className={`LoginFormContainer ${opacizzaLoginForm ? 'opacizza' : ''}`}>
            {errorMessage && <p className="ErrorMessage">{errorMessage}</p>}
            <div className="InputContainer">
                <label>Nickname:</label>
                <input
                    type="text"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    className="AuthInput"
                    placeholder="Inserisci il nickname"
                />
            </div>
            <div className="InputContainer">
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="AuthInput"
                    placeholder="Inserisci la password"
                />
            </div>
            <div className="ButtonContainer">
                <button onClick={handleAuthenticateClick} className="AuthButton">
                    Autenticati
                </button>
                <button onClick={onCancel} className="AuthButton">
                    Annulla
                </button>
            </div>
        </div>
    );
}

export default AuthPage;