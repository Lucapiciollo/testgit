import riordina from "./riordina.js"
export default function removeSection (idSezione) {
    let removeDiv = document.getElementById(idSezione);
    removeDiv.remove();
    riordina();
}