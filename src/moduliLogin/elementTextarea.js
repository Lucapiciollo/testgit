import textTitle from "./textTitle.js";
import textPlaceholder from "./textPlaceholder.js";
import textFooter from "./textFooter.js";
export default function elementTextarea(divElemento) {
  let divNewElemento = document.createElement('div');
  divNewElemento.setAttribute('class', 'accordion elemento');
  textTitle(divNewElemento);
  textPlaceholder(divNewElemento);
  textFooter(divNewElemento);
  divElemento.appendChild(divNewElemento);
}