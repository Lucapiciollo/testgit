import validazione from "./validazione.js";

export default function conferma() {
   let x = document.querySelectorAll('.errore');
   for (let i = 0; i < x.length; i++) {
       x[i].remove();
   }
   let errore;
   let oggettoSegnalazione = document.getElementById('oggettoSegnalazione').value;
   if (oggettoSegnalazione == '') {
       showErrore();
       document.getElementById('formOggetto').appendChild(errore);
   } else {
       V_oggettoSegnalazione = true;
   }

   let tipoSegnalazione = document.querySelectorAll('input[name=radioTipoSegnalazione]');
   if (tipoSegnalazione[0].checked == false && tipoSegnalazione[1].checked == false && tipoSegnalazione[2].checked == false && tipoSegnalazione[3].checked == false) {
       showErrore();
       document.getElementById('formTipo').appendChild(errore);
   } else {
       V_tipoSegnalazione = true;
   }

   let descrizione = document.getElementById('descrizione').value;
   if (descrizione == '') {
       showErrore();
       document.getElementById('formDescrizione').appendChild(errore);
   } else {
       V_descrizione = true;
   }

   let periodo = document.getElementById('periodo').value;
   if (periodo == '') {
       showErrore();
       document.getElementById('formPeriodo').appendChild(errore);
   } else {
       V_periodo = true;
   }

   let luogoFisico = document.querySelectorAll('input[name=radioLuogoFisico]');
   let luogoFisicoNota = document.getElementById('luogoFisicoNota').value;
   if (luogoFisico[0].checked == false && luogoFisico[1].checked == false && luogoFisicoNota == '') {
       showErrore();
       document.getElementById('formLuogo').appendChild(errore);
   } else if ([luogoFisico[0].checked == true | luogoFisico[1].checked == true] && luogoFisicoNota == '') {
       showErrore();
       document.getElementById('formLuogo').appendChild(errore);
   } else {
       V_luogoFisico = true;
       V_luogoFisicoNota = true;
   }

   let azioni = document.querySelectorAll('input[name=radioAzioni]');
   if (azioni[0].checked == false && azioni[1].checked == false && azioni[2].checked == false && azioni[3].checked == false && azioni[4].checked == false) {
       showErrore();
       document.getElementById('formAzioni').appendChild(errore);
   } else {
       V_azioni = true;
   }

   let autore = document.getElementById('autore').value;
   if (autore == '') {
       showErrore();
       document.getElementById('formAutore').appendChild(errore);
   } else {
       V_autore = true;
   }

   let altriEventuali = document.getElementById('altriEventuali').value;
   if (altriEventuali == '') {
       showErrore();
       document.getElementById('formAltriEventuali').appendChild(errore);
   } else {
       V_altriEventuali = true;
   }

   let termini = document.getElementById('termini').checked;
   if (termini == false) {
       showErrore();
       document.getElementById('formTermini').appendChild(errore);
   } else {
       V_termini = true;
   }

   function showErrore(){
       errore = document.createElement('p');
       let paragrafo = document.createTextNode("*campo obbligatorio");
       errore.style.color = "red";
       errore.style.fontWeight = "bold";
       errore.setAttribute("class", "errore");
       errore.appendChild(paragrafo);
   }

   validazione({V_oggettoSegnalazione,
       V_tipoSegnalazione,
       V_descrizione,
       V_periodo,
       V_luogoFisico,
       V_luogoFisicoNota,
       V_azioni,
       V_autore,
       V_altriEventuali,
       V_termini,
   });
}