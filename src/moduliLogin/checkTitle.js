export default function checkTitle(divNewElemento) {
  let divTitle = document.createElement('div');
  divTitle.setAttribute('class', 'accordion-item');
  let h2Title = document.createElement('h2');
  h2Title.setAttribute('clsass', 'accordion-header');
  let btnTitle = document.createElement('button');
  btnTitle.setAttribute('type', 'button');
  btnTitle.setAttribute('class', 'accordion-button collapsed');
  btnTitle.setAttribute('data-bs-toggle', 'collapse');
  btnTitle.setAttribute('data-bs-target', '#panelsStayOpen-elementTitle ' + idCheckTitle);
  let btnTitletext = document.createTextNode('Titolo Elemento');
  let divTitleBody = document.createElement('div');
  divTitleBody.setAttribute('id', 'panelsStayOpen-elementTitle ' + idCheckTitle);
  divTitleBody.setAttribute('class', 'accordion-collapse collapse accordion-body');
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

  btnTitle.appendChild(btnTitletext);
  h2Title.appendChild(btnTitle);
  divTitle.appendChild(h2Title);
  divTitleBody.appendChild(labelfr);
  divTitleBody.appendChild(inputfr);
  divTitleBody.appendChild(labelen);
  divTitleBody.appendChild(inputen);
  divTitleBody.appendChild(labelit);
  divTitleBody.appendChild(inputit);

  divTitle.appendChild(divTitleBody);
  divNewElemento.appendChild(divTitle);

  let divLabelAioni = document.createElement('div');
  let labelAzioni = document.createElement('label');
  let labelText = document.createTextNode('Azioni');
  labelAzioni.appendChild(labelText);
  divLabelAioni.appendChild(labelAzioni);
  divTitleBody.appendChild(divLabelAioni);
  let divCheck = document.createElement('div');
  let p1 = document.createElement('p');
  let p2 = document.createElement('p');
  let p3 = document.createElement('p');
  let inputHide = document.createElement('input');
  inputHide.setAttribute('type', 'text');
  inputHide.setAttribute('placeholder', 'hide');
  let inputShow = document.createElement('input');
  inputShow.setAttribute('type', 'text');
  inputShow.setAttribute('placeholder', 'show');
  let inputDisabled = document.createElement('input');
  inputDisabled.setAttribute('type', 'text');
  inputDisabled.setAttribute('placeholder', 'disabled');

  p1.appendChild(inputHide);
  p2.appendChild(inputShow);
  p3.appendChild(inputDisabled);
  divCheck.appendChild(p1);
  divCheck.appendChild(p2);
  divCheck.appendChild(p3);

  divTitleBody.appendChild(divCheck);
  idCheckTitle = idCheckTitle+ 1;
}