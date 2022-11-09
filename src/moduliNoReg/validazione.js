import dati from "./dati.js";
export default function validazione() {
    if (V_oggettoSegnalazione == true &&
        V_tipoSegnalazione == true &&
        V_descrizione == true &&
        V_periodo == true &&
        V_luogoFisico == true &&
        V_luogoFisicoNota == true &&
        V_azioni == true &&
        V_autore == true &&
        V_altriEventuali == true &&
        V_termini == true) {
        dati();
        alert('Tutti i campi obbligatori sono compilati! \n Verrai reindirizzato alla Home!');
    } else {
        alert('Attenzione! Compilare tutti i campi obbligatori!');
    }
}