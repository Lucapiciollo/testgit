import macroSezione from "./macrosezione.js";
import selected from "./selected.js";

let btnAggiungi = document.getElementById('btnAggiungi');
btnAggiungi.addEventListener("click", () => {
    aggiungiElemento()
});

function aggiungiElemento() {
    macroSezione();
}

selected();
macroSezione();