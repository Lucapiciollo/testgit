import riordina from "./riordina.js"
export default function removeElement (idElement) {
    let removeDiv = document.getElementById(idElement);
    removeDiv.remove();
    riordina();
}