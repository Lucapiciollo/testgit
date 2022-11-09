export default function riordina() {
    let numSezioni = document.querySelectorAll('.sezione');
    for (let n=0; n<numSezioni.length;n++) {
        numSezioni[n].childNodes[1].childNodes[0].firstChild.textContent = "sezione " + (n+1);
        let internoSez = numSezioni[n].childNodes[1].childNodes[1].childNodes[0].childNodes;
        for (let m = 0; m<internoSez.length; m++) {
            let x = internoSez[m].childNodes[0].textContent;
            if (m==0) {
                internoSez[m].childNodes[0].firstChild.textContent = "Titolo sezione " + (n+1);
            }
            else if (m==(internoSez.length - 1)) {
                internoSez[m].childNodes[1].firstChild.textContent = "Footer sezione " + (n+1);
            }
            else if (m!=0 && m<(internoSez.length - 1)) {
                internoSez[m].childNodes[1].lastChild.textContent = "Elemento " + m + " di sezione " + (n+1);
            }
        }
    }
}