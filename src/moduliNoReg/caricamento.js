import getCookie from "../moduliReg/cookie.js"
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
    document.querySelector('#termini').setAttribute('checked', datoCookie.termini);
}