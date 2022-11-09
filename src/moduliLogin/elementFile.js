import textTitle from "./textTitle.js";
import checkDescription from "./checkDescription.js";
export default function elementFile(divElemento) {
  let divNewElemento = document.createElement('div');
  divNewElemento.setAttribute('class', 'accordion elemento');
  textTitle(divNewElemento);
  checkDescription(divNewElemento);
  divElemento.appendChild(divNewElemento);
}