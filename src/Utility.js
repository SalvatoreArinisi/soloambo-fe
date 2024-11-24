class Utility {
    /**
     * Estrae il giorno e il mese da una data in formato YYYY-MM-DD.
     * @param {string} dataInput - La data in formato YYYY-MM-DD.
     * @returns {string} La stringa con giorno e mese (es. "26 novembre").
     */
    static estraiGiornoEMese(dataInput) {
        const mesi = [
            "gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno",
            "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"
        ];

        const [, mese, giorno] = dataInput.split('-');
        const nomeMese = mesi[parseInt(mese, 10) - 1];
        return `${parseInt(giorno, 10)} ${nomeMese}`;
    }
}

export default Utility;
