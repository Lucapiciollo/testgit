export default function dati() {
    const nuovoDato = {
        formato: "con registrazione",
        oggettoSegnalazione: oggettoSegnalazione.value,
        tipoSegnalazione: document.querySelector('input[name=radioTipoSegnalazione]:checked').value,
        descrizione: descrizione.value,
        periodo: periodo.value,
        sede: sede.value,
        luogoFisico: document.querySelector('input[name=radioLuogoFisico]:checked').value,
        luogoFisicoNota: luogoFisicoNota.value,
        azioni: document.querySelector('input[name=radioAzioni]:checked').value,
        autore: autore.value,
        altriEventuali: altriEventuali.value,
        nomeUtente: nomeUtente.value,
        cognomeUtente: cognomeUtente.value,
        telefonoUtente: telefonoUtente.value,
        emailUtente: emailUtente.value,
        qualificaUtente: qualificaUtente.value,
        termini: "true"
    }
    const datoJson = JSON.stringify(nuovoDato);
    document.cookie = "Segnalazioni =" + datoJson;
    window.location.assign("../pages/Index.html");
}