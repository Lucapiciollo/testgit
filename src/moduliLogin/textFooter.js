export default function textFooter(divNewElemento) {
  let divFooter = document.createElement('div');
  divFooter.setAttribute('class', 'accordion-item');
  let h2Footer = document.createElement('h2');
  h2Footer.setAttribute('clsass', 'accordion-header');
  let btnFooter = document.createElement('button');
  btnFooter.setAttribute('type', 'button');
  btnFooter.setAttribute('class', 'accordion-button collapsed');
  btnFooter.setAttribute('data-bs-toggle', 'collapse');
  btnFooter.setAttribute('data-bs-target', '#panelsStayOpen-elementFooter' + idFooter);
  let btnFooterText = document.createTextNode('Footer Elemento');
  let divFooterBody = document.createElement('div');
  divFooterBody.setAttribute('id', 'panelsStayOpen-elementFooter' + idFooter);
  divFooterBody.setAttribute('class', 'accordion-collapse collapse accordion-body');

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

  btnFooter.appendChild(btnFooterText);
  h2Footer.appendChild(btnFooter);
  divFooter.appendChild(h2Footer);
  divFooterBody.appendChild(labelfr);
  divFooterBody.appendChild(inputfr);
  divFooterBody.appendChild(labelen);
  divFooterBody.appendChild(inputen);
  divFooterBody.appendChild(labelit);
  divFooterBody.appendChild(inputit);

  divFooter.appendChild(divFooterBody);
  divNewElemento.appendChild(divFooter);
  idFooter = idFooter+ 1;
}