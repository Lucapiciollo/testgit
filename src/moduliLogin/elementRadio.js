import textTitle from "./textTitle.js";
import radioOption from "./radioOption.js";
import checkDescription from "./checkDescription.js";
export default function elementRadio(divElemento) {
  let divNewElemento = document.createElement('div');
  divNewElemento.setAttribute('class', 'accordion elemento');
  textTitle(divNewElemento);
  radioOption(divNewElemento);
  checkDescription(divNewElemento);
  divElemento.appendChild(divNewElemento);
}