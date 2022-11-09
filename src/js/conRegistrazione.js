
var V_oggettoSegnalazione = false;
var V_tipoSegnalazione = false;
var V_descrizione = false;
var V_periodo = false;
var V_luogoFisico = false;
var V_luogoFisicoNota = false;
var V_azioni = false;
var V_autore = false;
var V_altriEventuali = false;
var V_nomeUtente = false;
var V_cognomeUtente = false;
var V_telefonoUtente = false;
var V_emailUtente = false;
var V_termini = false;

function conferma() {
    let x = document.querySelectorAll('.errore');
    for (i = 0; i < x.length; i++) {
        x[i].remove();
    }

    var oggettoSegnalazione = document.getElementById('oggettoSegnalazione').value;
    if (oggettoSegnalazione == '') {
        var errore = document.createElement('p');
        var paragrafo = document.createTextNode("*campo obbligatorio");
        errore.style.color = "red";
        errore.style.fontWeight = "bold";
        errore.setAttribute("class", "errore");
        errore.appendChild(paragrafo);
        document.getElementById('formOggetto').appendChild(errore);
    } else {
        V_oggettoSegnalazione = true;
    }

    var tipoSegnalazione = document.querySelectorAll('input[name=radioTipoSegnalazione]');
    if (tipoSegnalazione[0].checked == false && tipoSegnalazione[1].checked == false && tipoSegnalazione[2].checked == false && tipoSegnalazione[3].checked == false) {
        var errore = document.createElement('p');
        var paragrafo = document.createTextNode("*campo obbligatorio");
        errore.style.color = "red";
        errore.style.fontWeight = "bold";
        errore.setAttribute("class", "errore");
        errore.appendChild(paragrafo);
        document.getElementById('formTipo').appendChild(errore);
    } else {
        V_tipoSegnalazione = true;
    }

    var descrizione = document.getElementById('descrizione').value;
    if (descrizione == '') {
        var errore = document.createElement('p');
        var paragrafo = document.createTextNode("*campo obbligatorio");
        errore.style.color = "red";
        errore.style.fontWeight = "bold";
        errore.setAttribute("class", "errore");
        errore.appendChild(paragrafo);
        document.getElementById('formDescrizione').appendChild(errore);
    } else {
        V_descrizione = true;
    }

    var periodo = document.getElementById('periodo').value;
    if (periodo == '') {
        var errore = document.createElement('p');
        var paragrafo = document.createTextNode("*campo obbligatorio");
        errore.style.color = "red";
        errore.style.fontWeight = "bold";
        errore.setAttribute("class", "errore");
        errore.appendChild(paragrafo);
        document.getElementById('formPeriodo').appendChild(errore);
    } else {
        V_periodo = true;
    }

    var luogoFisico = document.querySelectorAll('input[name=radioLuogoFisico]');
    var luogoFisicoNota = document.getElementById('luogoFisicoNota').value;
    if (luogoFisico[0].checked == false && luogoFisico[1].checked == false && luogoFisicoNota == '') {
        var errore = document.createElement('p');
        var paragrafo = document.createTextNode("*campo obbligatorio");
        errore.style.color = "red";
        errore.style.fontWeight = "bold";
        errore.setAttribute("class", "errore");
        errore.appendChild(paragrafo);
        document.getElementById('formLuogo').appendChild(errore);
    } else if ([luogoFisico[0].checked == true | luogoFisico[1].checked == true] && luogoFisicoNota == '') {
        var errore = document.createElement('p');
        var paragrafo = document.createTextNode("*campo obbligatorio");
        errore.style.color = "red";
        errore.style.fontWeight = "bold";
        errore.setAttribute("class", "errore");
        errore.appendChild(paragrafo);
        document.getElementById('formLuogo').appendChild(errore);
    } else {
        V_luogoFisico = true;
        V_luogoFisicoNota = true;
    }

    var azioni = document.querySelectorAll('input[name=radioAzioni]');
    if (azioni[0].checked == false && azioni[1].checked == false && azioni[2].checked == false && azioni[3].checked == false && azioni[4].checked == false) {
        var errore = document.createElement('p');
        var paragrafo = document.createTextNode("*campo obbligatorio");
        errore.style.color = "red";
        errore.style.fontWeight = "bold";
        errore.setAttribute("class", "errore");
        errore.appendChild(paragrafo);
        document.getElementById('formAzioni').appendChild(errore);
    } else {
        V_azioni = true;
    }

    var autore = document.getElementById('autore').value;
    if (autore == '') {
        var errore = document.createElement('p');
        var paragrafo = document.createTextNode("*campo obbligatorio");
        errore.style.color = "red";
        errore.style.fontWeight = "bold";
        errore.setAttribute("class", "errore");
        errore.appendChild(paragrafo);
        document.getElementById('formAutore').appendChild(errore);
    } else {
        V_autore = true;
    }

    var altriEventuali = document.getElementById('altriEventuali').value;
    if (altriEventuali == '') {
        var errore = document.createElement('p');
        var paragrafo = document.createTextNode("*campo obbligatorio");
        errore.style.color = "red";
        errore.style.fontWeight = "bold";
        errore.setAttribute("class", "errore");
        errore.appendChild(paragrafo);
        document.getElementById('formAltriEventuali').appendChild(errore);
    } else {
        V_altriEventuali = true;
    }

    var nomeUtente = document.getElementById('nomeUtente').value;
    if (nomeUtente == '') {
        var errore = document.createElement('p');
        var paragrafo = document.createTextNode("*campo obbligatorio");
        errore.style.color = "red";
        errore.style.fontWeight = "bold";
        errore.setAttribute("class", "errore");
        errore.appendChild(paragrafo);
        document.getElementById('formNomeUtente').appendChild(errore);
    } else {
        V_nomeUtente = true;
    }

    var cognomeUtente = document.getElementById('cognomeUtente').value;
    if (cognomeUtente == '') {
        var errore = document.createElement('p');
        var paragrafo = document.createTextNode("*campo obbligatorio");
        errore.style.color = "red";
        errore.style.fontWeight = "bold";
        errore.setAttribute("class", "errore");
        errore.appendChild(paragrafo);
        document.getElementById('formCognomeUtente').appendChild(errore);
    } else {
        V_cognomeUtente = true;
    }

    var telefonoUtente = document.getElementById('telefonoUtente').value;
    if (telefonoUtente == '') {
        var errore = document.createElement('p');
        var paragrafo = document.createTextNode("*campo obbligatorio");
        errore.style.color = "red";
        errore.style.fontWeight = "bold";
        errore.setAttribute("class", "errore");
        errore.appendChild(paragrafo);
        document.getElementById('formTelefonoUtente').appendChild(errore);
    } else {
        V_telefonoUtente = true;
    }

    var emailUtente = document.getElementById('emailUtente').value;
    if (emailUtente == '') {
        var errore = document.createElement('p');
        var paragrafo = document.createTextNode("*campo obbligatorio");
        errore.style.color = "red";
        errore.style.fontWeight = "bold";
        errore.setAttribute("class", "errore");
        errore.appendChild(paragrafo);
        document.getElementById('formEmailUtente').appendChild(errore);
    } else {
        V_emailUtente = true;
    }

    var termini = document.getElementById('termini').checked;
    if (termini == false) {
        var errore = document.createElement('p');
        var paragrafo = document.createTextNode("*campo obbligatorio");
        errore.style.color = "red";
        errore.style.fontWeight = "bold";
        errore.setAttribute("class", "errore");
        errore.appendChild(paragrafo);
        document.getElementById('formTermini').appendChild(errore);
    } else {
        V_termini = true;
    }

    validazione({
        V_oggettoSegnalazione,
        V_tipoSegnalazione,
        V_descrizione,
        V_periodo,
        V_luogoFisico,
        V_luogoFisicoNota,
        V_azioni,
        V_autore,
        V_altriEventuali,
        V_nomeUtente,
        V_cognomeUtente,
        V_telefonoUtente,
        V_emailUtente,
        V_termini,
    });
}

function validazione() {
    if (V_oggettoSegnalazione == true &&
        V_tipoSegnalazione == true &&
        V_descrizione == true &&
        V_periodo == true &&
        V_luogoFisico == true &&
        V_luogoFisicoNota == true &&
        V_azioni == true &&
        V_autore == true &&
        V_altriEventuali == true &&
        V_nomeUtente == true &&
        V_cognomeUtente == true &&
        V_telefonoUtente == true &&
        V_emailUtente == true &&
        V_termini == true) {
        dati();
        alert('Tutti i campi obbligatori sono compilati! \n Verrai reindirizzato alla Home!');
    } else {
        alert('Attenzione! Compilare tutti i campi obbligatori!');
    }
}

function dati() {
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

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    console.log(ca[0]);
    return "";
}

function caricamento() {
    var datoCookie = JSON.parse(getCookie("Segnalazioni"));
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