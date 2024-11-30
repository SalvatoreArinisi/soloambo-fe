import React, { useState, useEffect } from 'react';
import { getPrivacy } from '../controller/AmbiController';

function PrivacyPolicy() {
    const [privacyData, setPrivacyData] = useState('');

    useEffect(() => {
        getPrivacy(setPrivacyData);
    }, []);

    return (
        <div>
            <h1>{privacyData.titolo}</h1>
            <p>{privacyData.aggiornamento}</p>

            {privacyData && privacyData.sezioni.map((section, index) => (
                <div key={index}>
                    <h2>{section.titolo}</h2>
                    <p>{section.contenuto}</p>
                    {section.email && (
                        <a
                            href={`mailto:${section.email}`}
                            style={{ color: '#007bff', textDecoration: 'underline' }}
                        >
                            {section.email}
                        </a>
                    )}
                </div>
            ))}
        </div>
    );
}

export default PrivacyPolicy;
