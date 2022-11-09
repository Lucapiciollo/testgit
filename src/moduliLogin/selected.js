import ciclosel from "./ciclosel.js";
export default function selected() {
  let elemento = document.querySelectorAll('.elemento');
  for (let e = 0; e < elemento.length; e++) {
    elemento[e].remove();
  }
  let divElemento = document.querySelectorAll('.selectedElement');
  let selezione = document.querySelectorAll('select');
  for (let i = 0; i < divElemento.length; i++) {

    ciclosel(divElemento[i], selezione[i]);
  }
}