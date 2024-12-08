import React, { useState } from 'react';
import './AuthPage.css';
import '../App.css';
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
                <LoginForm setIsAuthenticated={setIsAuthenticated} setLoading={setLoading} setIsLoginFormVisible={setIsLoginFormVisible}/>
            )}
        </div>
    );
}



function LoginForm({ setIsAuthenticated, setLoading, setIsLoginFormVisible }) {

    const [errorMessage, setErrorMessage] = useState('');
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');

    const handleAuthenticateClick = async () =>  {
        
        setErrorMessage(''); // Resetta eventuali errori precedenti del componente LoginForm
               
        setLoading(true); 

        const loginResponse = await userController.login(nickname, password);
       
        if (loginResponse.status) {
            setIsAuthenticated(loginResponse.message); // Passa il messaggio di benvenuto
        } else {
            setErrorMessage(loginResponse.message);
        }
        setLoading(false); 

    };

    const onCancel = ()=>{
        setIsLoginFormVisible(false);
    }

    return (
        <div className="LoginFormContainer">
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