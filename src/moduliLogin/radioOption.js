export default function radioOption(divNewElemento) {
  let divOption = document.createElement('div');
  divOption.setAttribute('class', 'accordion-item');
  let h2Option = document.createElement('h2');
  h2Option.setAttribute('clsass', 'accordion-header');
  let btnOption = document.createElement('button');
  btnOption.setAttribute('type', 'button');
  btnOption.setAttribute('class', 'accordion-button collapsed');
  btnOption.setAttribute('data-bs-toggle', 'collapse');
  btnOption.setAttribute('data-bs-target', '#panelsStayOpen-elementRadioLabel' + idOption);
  let btnOptiontext = document.createTextNode('Label 1');
  let divOptionBody = document.createElement('div');
  divOptionBody.setAttribute('id', 'panelsStayOpen-elementRadioLabel' + idOption);
  divOptionBody.setAttribute('class', 'accordion-collapse collapse accordion-body');
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

  btnOption.appendChild(btnOptiontext);
  h2Option.appendChild(btnOption);
  divOption.appendChild(h2Option);
  divOptionBody.appendChild(labelfr);
  divOptionBody.appendChild(inputfr);
  divOptionBody.appendChild(labelen);
  divOptionBody.appendChild(inputen);
  divOptionBody.appendChild(labelit);
  divOptionBody.appendChild(inputit);

  divOption.appendChild(divOptionBody);
  divNewElemento.appendChild(divOption);

  let divLabelAioni = document.createElement('div');
  let labelAzioni = document.createElement('label');
  let labelText = document.createTextNode('Azioni');
  labelAzioni.appendChild(labelText);
  divLabelAioni.appendChild(labelAzioni);
  divOptionBody.appendChild(divLabelAioni);
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

  divOptionBody.appendChild(divCheck);
  idOption = idOption+ 1;
}