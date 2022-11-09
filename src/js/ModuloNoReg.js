let btn = document.getElementById('bottone');
import conferma from '../moduliNoReg/conferma.js';
import caricamento from '../moduliNoReg/caricamento.js';

btn.addEventListener("click", ()=>{
    conferma();
});

caricamento();