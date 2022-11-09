import checkTitle from "./checkTitle.js";
import checkDescription from "./checkDescription.js";
export default function elementCheck(divElemento) {
  let divNewElemento = document.createElement('div');
  divNewElemento.setAttribute('class', 'accordion elemento');
  checkTitle(divNewElemento);
  checkDescription(divNewElemento);
  divElemento.appendChild(divNewElemento);
}