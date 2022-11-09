import selected from "./selected.js";
import removeElement from "./removeElement.js";
export default function element(sezione) {
  let divHeadler = document.createElement('div');
  divHeadler.setAttribute('class', 'accordion-item');
  divHeadler.setAttribute('id', 'element' + (numElement));
  let h2Title = document.createElement('h2');
  h2Title.setAttribute('clsass', 'accordion-header');
  let btnTitle = document.createElement('button');
  btnTitle.setAttribute('type', 'button');
  btnTitle.setAttribute('class', 'accordion-button collapsed');
  btnTitle.setAttribute('data-bs-toggle', 'collapse');
  btnTitle.setAttribute('data-bs-target', '#panelsStayOpen-elementSez' + (numElement));
  let btnTitletext = document.createTextNode('Elemento 1 di sezione ' + (numeroSezioni));
  let divBody = document.createElement('div');
  divBody.setAttribute('id', 'panelsStayOpen-elementSez' + (numElement));
  divBody.setAttribute('class', 'accordion-collapse collapse accordion-body');
  let selectList = document.createElement('select');
  selectList.setAttribute('name', 'selezione');
  selectList.setAttribute('id', (numeroSezioni));
  selectList.addEventListener('change', () => { selected() })
  selectList.style.marginBottom = "10px";
  for (let sel = 0; sel < radioList.length; sel++) {
    let option = document.createElement('option');
    option.setAttribute('value', radioList[sel]);
    option.text = radioList[sel];
    selectList.appendChild(option);
  }
  let divElemento = document.createElement('div');
  divElemento.setAttribute('class', 'selectedElement')
  divElemento.setAttribute('id', (numeroSezioni))

  let btnRemoveElement = document.createElement('button');
  btnRemoveElement.setAttribute('type', 'button');
  btnRemoveElement.setAttribute('id', numeroSezioni);
  btnRemoveElement.setAttribute('class', 'btn btn-danger');
  let idElement = 'element' + (numElement);
  btnRemoveElement.addEventListener('click', () => { removeElement(idElement) });
  btnRemoveElement.style.float = "left";
  let btnRemoveElementtext = document.createTextNode('Rimuovi elemento');

  btnRemoveElement.appendChild(btnRemoveElementtext);
  divHeadler.appendChild(btnRemoveElement);

  btnTitle.appendChild(btnTitletext);
  h2Title.appendChild(btnTitle);
  divHeadler.appendChild(h2Title);
  divBody.appendChild(selectList);
  divBody.appendChild(divElemento);

  divHeadler.appendChild(divBody);
  sezione.appendChild(divHeadler);

  numElement = numElement +1;
}