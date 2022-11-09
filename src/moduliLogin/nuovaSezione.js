import title from "./title.js";
import element from "./element.js";
import footer from "./footer.js";
export default function nuovaSezione(divBody) {
  let sezione = document.createElement('div');
  sezione.setAttribute('class', 'accordion-item');
  title(sezione);
  element(sezione);
  footer(sezione);
  divBody.appendChild(sezione);
}