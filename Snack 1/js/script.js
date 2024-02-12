// Snack 1:
// - Scrivi una funzione che accetti una stringa come argomento e 
//   la restituisca girata (es. "Ciao" -> "oaiC")


// creiamo una funzione che inverta una stringa
function reverseString() {

    // chiediamo all'utente di inserire la parola o un numero tramite prompt
    let userWord = prompt("Inserisci una parola:");

    // controlliamo che la parola inserita dall'utente sia corretta
    if (userWord === null || userWord === "") {

        return "Nessuna parola inserita.";
    }

    // prendiamo la parola e cond split('') la dividiamo in un array di caratteri
    // con .reverse() invertiamo l'array
    // con .join('')lo riconvertiasmo dinuovo in una stringa
    let reverseUserWord = userWord.split('').reverse().join('');
    return reverseUserWord;
}

// Esempio di utilizzo:
let reverseUserWord = reverseString();
// console.log(reverseUserWord);

// creo una costante per stampare in pagina il risultato
const resultElement = document.querySelector("#reverse");

// stampo in pagina la parola invertita
resultElement.innerText = reverseUserWord;