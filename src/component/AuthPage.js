import React, { useState } from 'react';
import userController from '../controller/UserController';
import AuthForm from './AuthForm';
import './AuthPage.css';

function AuthPage({ setIsAuthenticated, setLoading }) {
    const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);
    const [isRegistrazioneFormVisible, setIsRegistrazioneFormVisible] = useState(false);

    return (
        <div className="AuthContainer">
            {isLoginFormVisible ? (
                <LoginForm setIsAuthenticated={setIsAuthenticated}
                    setLoading={setLoading}
                    setIsLoginFormVisible={setIsLoginFormVisible} />
            ) : isRegistrazioneFormVisible ? (
                <RegistrazioneForm
                    setIsAuthenticated={setIsAuthenticated}
                    setLoading={setLoading}
                    setIsRegistrazioneFormVisible={setIsRegistrazioneFormVisible}
                />
            ) : (
                <div className="ButtonContainer">
                    <button
                        onClick={() => setIsLoginFormVisible(true)} className="AuthButton">Login
                    </button>
                    <button
                        onClick={() => setIsRegistrazioneFormVisible(true)} className="AuthButton">Registrazione
                    </button>
                </div>
            )}
        </div>
    );
}

function LoginForm({ setIsAuthenticated, setLoading, setIsLoginFormVisible }) {
    const handleCancel = () => {
        setIsLoginFormVisible(false);
    };

    return (
        <AuthForm
            onSubmit={userController.login} // Funzione di login
            setIsAuthenticated={setIsAuthenticated}
            setLoading={setLoading}
            onCancel={handleCancel}
            formTitle="Login"
            isRegistration={false}
        />
    );
}

function RegistrazioneForm({ setIsAuthenticated, setLoading, setIsRegistrazioneFormVisible }) {
    const handleCancel = () => {
        setIsRegistrazioneFormVisible(false);
    };

    return (
        <AuthForm
            onSubmit={userController.registrazione} // Funzione di registrazione
            setIsAuthenticated={setIsAuthenticated}
            setLoading={setLoading}
            onCancel={handleCancel}
            formTitle="Registrazione"
            isRegistration={true}
        />
    );
}

export default AuthPage;