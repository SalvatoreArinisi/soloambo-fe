import React, { useState } from 'react';

function AuthForm({
    onSubmit,  // Metodo dinamico: login o registrazione
    setIsAuthenticated,
    setLoading,
    onCancel,
    formTitle,
    isRegistration
}) {
    const [errorMessage, setErrorMessage] = useState('');
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isFormDisabled, setIsFormDisabled] = useState(false);

    const handleSubmitClick = async () => {
        setErrorMessage(''); // Resetta eventuali errori
        setLoading(true);
        setIsFormDisabled(true);

        // Validazione per la registrazione
        if (isRegistration && password !== confirmPassword) {
            setErrorMessage('Le password non coincidono.');
            setLoading(false);
            setIsFormDisabled(false);
            return;
        }

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
                    maxLength={16} // Limite massimo di 12 caratteri
                    disabled={isFormDisabled}
                />
            </div>
            <div className="InputContainer">
                <label>Password:</label>
                <input
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="AuthInput"
                    placeholder="Inserisci la password"
                    maxLength={16} // Limite massimo di 12 caratteri
                    disabled={isFormDisabled}
                />
            </div>
            {isRegistration && (
                <div className="InputContainer">
                    <label>Conferma Password:</label>
                    <input
                        type="text"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="AuthInput"
                        placeholder="Conferma la password"
                        maxLength={12}
                        disabled={isFormDisabled}
                    />
                </div>
            )}            
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
