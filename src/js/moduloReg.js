let btn = document.getElementById('bottone');
import conferma from '../moduliReg/conferma.js';
import caricamento from '../moduliReg/caricamento.js';

btn.addEventListener("click", ()=>{
    conferma();
});

caricamento();