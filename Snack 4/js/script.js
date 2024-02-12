// Snack 4 (bonus):
// - Scrivi una funzione  che accetti una stringa come parametro e restituisca 
//   la stringa con i caratteri ordinati alfabeticamente
//   Es: riordina("webmaster") :freccia_destra: "abeemrstw"

// creiamo una parola che prenda le lettere della parola inserite come prompt e le
// riordini in ordine alfabetico
function reorderString() {

    // prompt per inserire la parola
    const string = prompt("Inserisci una parola:");

    // verifichiamo che l'utente abbia scritto qualcosa
    if (string === null || string === "" || !isNaN(parseFloat(string))) {

        return alert("Nessuna parola inserita, ricarica la pagina");
    }

    // converti la stringa in un array di caratteri con .split(''), 
    // ordiniamo l'array in ordine alfabetico con .sort(), 
    // uniamo dinuovo l'array ottenuto ina stringa con .join('')
    return string.split('').sort().join('');
}


// creiamo una costante che richiami la funzione
const sortedString = reorderString();
// console.log(sortedString);

// stampiamo in pagina la parola ottenuta
// creo una costante per stampare in pagina il risultato
const resultElement = document.querySelector("#word");

// stampo in pagina la parola ottenuta
resultElement.innerText = sortedString;