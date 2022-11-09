import addElement from "./addElement.js";
export default function footer(sezione) {
  let divHeadler = document.createElement('div');
  divHeadler.setAttribute('class', 'accordion-item');
  divHeadler.setAttribute('id', 'footerSez' + (numeroSezioni));
  let h2Title = document.createElement('h2');
  h2Title.setAttribute('clsass', 'accordion-header');
  let btnTitle = document.createElement('button');
  btnTitle.setAttribute('type', 'button');
  btnTitle.setAttribute('class', 'accordion-button collapsed');
  btnTitle.setAttribute('data-bs-toggle', 'collapse');
  btnTitle.setAttribute('data-bs-target', '#panelsStayOpen-footerSez' + (numeroSezioni));
  let btnTitletext = document.createTextNode('Footer sezione ' + (numeroSezioni));
  let divBody = document.createElement('div');
  divBody.setAttribute('id', 'panelsStayOpen-footerSez' + (numeroSezioni));
  divBody.setAttribute('class', 'accordion-collapse collapse accordion-body');
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

  let btnAddElement = document.createElement('button');
  btnAddElement.setAttribute('type', 'button');
  btnAddElement.setAttribute('id', numeroSezioni);
  btnAddElement.setAttribute('class', 'btn btn-primary');
  let sezNumero = numeroSezioni;
  btnAddElement.addEventListener('click', () => { addElement(sezione, sezNumero) });
  btnAddElement.style.float = "left";
  let btnAddElementtext = document.createTextNode('Aggiungi elemento');

  btnAddElement.appendChild(btnAddElementtext);
  divHeadler.appendChild(btnAddElement);

  btnTitle.appendChild(btnTitletext);
  h2Title.appendChild(btnTitle);
  divHeadler.appendChild(h2Title);
  divBody.appendChild(labelfr);
  divBody.appendChild(inputfr);
  divBody.appendChild(labelen);
  divBody.appendChild(inputen);
  divBody.appendChild(labelit);
  divBody.appendChild(inputit);

  divHeadler.appendChild(divBody);
  sezione.appendChild(divHeadler);
}