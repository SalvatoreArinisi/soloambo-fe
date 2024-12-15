import React, { useState } from 'react';

function AuthForm({ 
    onSubmit,  // Metodo dinamico: login o registrazione
    setIsAuthenticated,
    setLoading,
    onCancel,
    formTitle // Titolo del form
}) {
    const [errorMessage, setErrorMessage] = useState('');
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const [isFormDisabled, setIsFormDisabled] = useState(false);

    const handleSubmitClick = async () => {
        setErrorMessage(''); // Resetta eventuali errori
        setLoading(true);
        setIsFormDisabled(true);

        const response = await onSubmit(nickname, password);

        if (response.status) {
            setIsAuthenticated(response.message); // Messaggio di successo
            // Salva nel localStorage
            localStorage.setItem('nickname', nickname);
            localStorage.setItem('password', password);
        } else {
            setErrorMessage(response.message);
        }

        setLoading(false);
        setIsFormDisabled(false);
    };

    return (
        <div className={`AuthFormContainer ${isFormDisabled ? 'opacizza' : ''}`}>
            <h2>{formTitle}</h2>
            {errorMessage && <p className="ErrorMessage">{errorMessage}</p>}
            <div className="InputContainer">
                <label>Nickname:</label>
                <input
                    type="text"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    className="AuthInput"
                    placeholder="Inserisci il nickname"
                    disabled={isFormDisabled}
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
                    disabled={isFormDisabled}
                />
            </div>
            <div className="ButtonContainer">
                <button onClick={handleSubmitClick} className="AuthButton" disabled={isFormDisabled}>
                    Conferma
                </button>
                <button onClick={onCancel} className="AuthButton">
                    Annulla
                </button>
            </div>
        </div>
    );
}

export default AuthForm;
