export default function title(sezione) {
  let divHeadler = document.createElement('div');
  divHeadler.setAttribute('class', 'accordion-item');
  let h2Title = document.createElement('h2');
  h2Title.setAttribute('clsass', 'accordion-header');
  let btnTitle = document.createElement('button');
  btnTitle.setAttribute('type', 'button');
  btnTitle.setAttribute('class', 'accordion-button collapsed');
  btnTitle.setAttribute('data-bs-toggle', 'collapse');
  btnTitle.setAttribute('data-bs-target', '#panelsStayOpen-tittleSez' + (numeroSezioni));
  let btnTitletext = document.createTextNode('Titolo sezione ' + (numeroSezioni));
  let divBody = document.createElement('div');
  divBody.setAttribute('id', 'panelsStayOpen-tittleSez' + (numeroSezioni));
  divBody.setAttribute('class', 'accordion-body accordion-collapse collapse');
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