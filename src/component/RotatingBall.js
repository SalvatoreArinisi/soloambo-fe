import React, { useState, useEffect } from "react";
import "./RotatingBall.css"; // Importa il file CSS separato per lo stile

const RotatingBall = () => {
  const numeri = [5, 8, 3]; // Numeri da ruotare
  const colori = ["#5cb85c", "#ffffff", "#ff0000"]; // Colori (verde, bianco, rosso)
  const [indice, setIndice] = useState(0); // Stato per il numero e il colore correnti

  useEffect(() => {
    const interval = setInterval(() => {
      setIndice((prevIndice) => (prevIndice + 1) % numeri.length); // Cambia indice
    }, 2200); // Intervallo sincronizzato con l'animazione

    return () => clearInterval(interval); // Pulizia dell'intervallo
  }, [numeri.length]);

  return (
    <div
      className="pallina"
      style={{ backgroundColor: colori[indice] }} // Cambia colore della pallina
    >
      <div className="contenitore-numero">
        <div className="cerchio-nero">
          <div className="numero">{numeri[indice]}</div>
        </div>
      </div>
    </div>
  );
};

export default RotatingBall;
