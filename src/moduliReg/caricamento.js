import getCookie from "./cookie.js"
export default function caricamento() {
    let datoCookie = JSON.parse(getCookie("Segnalazioni"));
    document.querySelector('#oggettoSegnalazione').setAttribute('value', datoCookie.oggettoSegnalazione);
    let tipoSegnalazione = document.querySelectorAll('input[name=radioTipoSegnalazione]');
    tipoSegnalazione[datoCookie.tipoSegnalazione - 1].setAttribute('checked', 'true');
    document.querySelector('#descrizione').innerHTML = datoCookie.descrizione;
    document.querySelector('#periodo').setAttribute('value', datoCookie.periodo);
    document.querySelector('#sede').setAttribute('value', datoCookie.sede);
    let luogoFisico = document.querySelectorAll('input[name=radioLuogoFisico]');
    luogoFisico[datoCookie.luogoFisico - 1].setAttribute('checked', 'true');
    document.querySelector('#luogoFisicoNota').setAttribute('value', datoCookie.luogoFisicoNota);
    let azioni = document.querySelectorAll('input[name=radioAzioni]');
    azioni[datoCookie.azioni - 1].setAttribute('checked', 'true');
    document.querySelector('#autore').setAttribute('value', datoCookie.autore);
    document.querySelector('#altriEventuali').innerHTML = datoCookie.altriEventuali;
    document.querySelector('#nomeUtente').setAttribute('value', datoCookie.nomeUtente);
    document.querySelector('#cognomeUtente').setAttribute('value', datoCookie.cognomeUtente);
    document.querySelector('#telefonoUtente').setAttribute('value', datoCookie.telefonoUtente);
    document.querySelector('#emailUtente').setAttribute('value', datoCookie.emailUtente);
    document.querySelector('#qualificaUtente').setAttribute('value', datoCookie.qualificaUtente);
    document.querySelector('#termini').setAttribute('checked', datoCookie.termini);
}