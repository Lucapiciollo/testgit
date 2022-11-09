export default function textPlaceholder(divNewElemento) {
  let divPlaceholder = document.createElement('div');
  divPlaceholder.setAttribute('class', 'accordion-item');
  let h2Placeholder = document.createElement('h2');
  h2Placeholder.setAttribute('clsass', 'accordion-header');
  let btnPlaceholder = document.createElement('button');
  btnPlaceholder.setAttribute('type', 'button');
  btnPlaceholder.setAttribute('class', 'accordion-button collapsed');
  btnPlaceholder.setAttribute('data-bs-toggle', 'collapse');
  btnPlaceholder.setAttribute('data-bs-target', '#panelsStayOpen-elementPlaceholder' + idPlaceholder);
  let btnPlaceholderText = document.createTextNode('Placeholder Elemento');
  let divPlaceholderBody = document.createElement('div');
  divPlaceholderBody.setAttribute('id', 'panelsStayOpen-elementPlaceholder' + idPlaceholder);
  divPlaceholderBody.setAttribute('class', 'accordion-collapse collapse accordion-body');

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

  btnPlaceholder.appendChild(btnPlaceholderText);
  h2Placeholder.appendChild(btnPlaceholder);
  divPlaceholder.appendChild(h2Placeholder);
  divPlaceholderBody.appendChild(labelfr);
  divPlaceholderBody.appendChild(inputfr);
  divPlaceholderBody.appendChild(labelen);
  divPlaceholderBody.appendChild(inputen);
  divPlaceholderBody.appendChild(labelit);
  divPlaceholderBody.appendChild(inputit);

  divPlaceholder.appendChild(divPlaceholderBody);
  divNewElemento.appendChild(divPlaceholder);
  idPlaceholder = idPlaceholder+ 1;
}