import React, { useState, useEffect } from "react";
import "./Ambi.css";

const COLORS = [
    "#ff5733", // Rosso
    "#3498db", // Blu
    "#f1c40f", // Giallo
    "#9b59b6", // Viola
];

const Ambi = ({ ambi }) => {
    const [shakingPairs, setShakingPairs] = useState([]);

    useEffect(() => {
        // Animazione delle coppie una alla volta
        ambi.forEach((_, index) => {
            const timer = setTimeout(() => {
                setShakingPairs((prev) => [...prev, index]);
            }, index * 1000); // 1 secondo tra una coppia e l'altra
            return () => clearTimeout(timer);
        });
    }, [ambi]);

    return (
        <div className="ambi-container">
            {ambi.map((ambo, index) => (
                <div
                    key={index}
                    className={`ambo-pair ${
                        index % 2 === 0 ? "move-from-left" : "move-from-right"
                    }`}
                    style={{ animationDelay: `${index * 1}s` }}
                >
                    <div className="ball" style={{ backgroundColor: COLORS[index % COLORS.length] }}>
                        <div
                            className={`ball-number ${
                                shakingPairs.includes(index) ? "shake" : ""
                            }`}
                        >
                            {ambo.num1}
                        </div>
                    </div>
                    <div className="ball" style={{ backgroundColor: COLORS[index % COLORS.length] }}>
                        <div
                            className={`ball-number ${
                                shakingPairs.includes(index) ? "shake" : ""
                            }`}
                        >
                            {ambo.num2}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Ambi;
