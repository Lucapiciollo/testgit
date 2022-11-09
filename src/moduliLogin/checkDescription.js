export default function checkDescription(divNewElemento) {
  let divDescription = document.createElement('div');
  divDescription.setAttribute('class', 'accordion-item');
  let h2Description = document.createElement('h2');
  h2Description.setAttribute('clsass', 'accordion-header');
  let btnDescription = document.createElement('button');
  btnDescription.setAttribute('type', 'button');
  btnDescription.setAttribute('class', 'accordion-button collapsed');
  btnDescription.setAttribute('data-bs-toggle', 'collapse');
  btnDescription.setAttribute('data-bs-target', '#panelsStayOpen-elementDescription' + idElementDescription);
  let btnDescriptiontext = document.createTextNode('Descrizione Pie Elemento');
  let divDescriptionBody = document.createElement('div');
  divDescriptionBody.setAttribute('id', 'panelsStayOpen-elementDescription' + idElementDescription);
  divDescriptionBody.setAttribute('class', 'accordion-collapse collapse accordion-body');
  let labelfr = document.createElement('label');
  labelfr.setAttribute('for', 'fr');
  let frtxt = document.createTextNode('fr-FR');
  labelfr.appendChild(frtxt);
  let inputfr = document.createElement('input');
  inputfr.setAttribute('type', 'text');
  inputfr.setAttribute('id', 'fr');
  let labelen = document.createElement('label');
  labelen.setAttribute('for', 'en');
  let entxt = document.createTextNode('en-US');
  labelen.appendChild(entxt);
  let inputen = document.createElement('input');
  inputen.setAttribute('type', 'text');
  inputen.setAttribute('id', 'en');
  let labelit = document.createElement('label');
  labelit.setAttribute('for', 'it');
  let ittxt = document.createTextNode('it-IT');
  labelit.appendChild(ittxt);
  let inputit = document.createElement('input');
  inputit.setAttribute('type', 'text');
  inputit.setAttribute('id', 'it');

  btnDescription.appendChild(btnDescriptiontext);
  h2Description.appendChild(btnDescription);
  divDescription.appendChild(h2Description);
  divDescriptionBody.appendChild(labelfr);
  divDescriptionBody.appendChild(inputfr);
  divDescriptionBody.appendChild(labelen);
  divDescriptionBody.appendChild(inputen);
  divDescriptionBody.appendChild(labelit);
  divDescriptionBody.appendChild(inputit);

  divDescription.appendChild(divDescriptionBody);
  divNewElemento.appendChild(divDescription);
  idElementDescription = idElementDescription+ 1;
}