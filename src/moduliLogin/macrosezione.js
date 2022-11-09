import nuovaSezione from "./nuovaSezione.js";
import removeSection from "./removeSection.js";
import riordina from "./riordina.js";
import selected from "./selected.js";
export default function macroSezione() {
  let macroSezione = document.createElement('div');
  macroSezione.setAttribute('id', 'sezione' + (numeroSezioni));
  macroSezione.setAttribute('class', 'accordion sezione');
  
  let divHeadler = document.createElement('div');
  divHeadler.setAttribute('class', 'accordion-item');
  let h2Title = document.createElement('h2');
  h2Title.setAttribute('clsass', 'accordion-header');
  let btnTitle = document.createElement('button');
  btnTitle.setAttribute('type', 'button');
  btnTitle.setAttribute('class', 'accordion-button collapsed');
  btnTitle.setAttribute('data-bs-toggle', 'collapse');
  btnTitle.setAttribute('data-bs-target', '#panelsStayOpen-sezione' + (numeroSezioni));
  let btnTitletext = document.createTextNode('sezione ' + (numeroSezioni));

  let btnRemoveSection = document.createElement('button');
  btnRemoveSection.setAttribute('type', 'button');
  btnRemoveSection.setAttribute('id', 'sezione' + (numeroSezioni));
  btnRemoveSection.setAttribute('class', 'btn btn-danger');
  let idSezione = macroSezione.id;
  btnRemoveSection.addEventListener('click', () => { removeSection(idSezione) });
  btnRemoveSection.style.float = "right";
  let btnRemoveSectiontext = document.createTextNode('rimuovi');

  let divBody = document.createElement('div');
  divBody.setAttribute('id', 'panelsStayOpen-sezione' + (numeroSezioni));
  divBody.setAttribute('class', 'accordion-body accordion-collapse collapse');
  
  nuovaSezione(divBody);
  
  btnTitle.appendChild(btnTitletext);
  h2Title.appendChild(btnTitle);
  divHeadler.appendChild(h2Title);
  
  btnRemoveSection.appendChild(btnRemoveSectiontext);
  macroSezione.appendChild(btnRemoveSection);

  divHeadler.appendChild(divBody);
  macroSezione.appendChild(divHeadler);
  
  document.getElementById('corpo').appendChild(macroSezione);
  selected();
  riordina()
  numeroSezioni = numeroSezioni+1;
}