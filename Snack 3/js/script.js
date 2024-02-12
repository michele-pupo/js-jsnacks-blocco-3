// Snack 3:
// - Scrivi una funzione che accetti tre argomenti:
//   un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo 
//   quanto il numero di elementi dell’array).
// Es:
//    abbiamo un array così: arrayNumeri = [0, 1, 2, 3, 4, 5, 6]
//    La nostra funzione viene dichiarata ad esempio così function 
//    tagliaArray(array, posizioneMin, posizioneMax)
//    La funzione ritornerà un nuovo array con i valori che hanno la posizione 
//    compresa tra “posizioneMin” e “posizioneMax”
//    Nel nostro caso, se la chiamassimo così tagliaArray(arrayNumeri, 2, 4) 
//    ci restituirebbe un array così composto:
//    [2, 3, 4]


// creiamo i due array con lunghezza uguale
let array1 = [0, 1, 2, 3, 4, 5, 6];

// creiamo una funzione che tagli l'array e lo restituisca come indicato
function tagliaArray(array, posizioneMin, posizioneMax) {

    // se la posizione minima indicata sarà minore di 0, oppure se la posizione massima 
    // sarà maggiore o uaguele alla lunghezza dell'array, oppure se la posizione minima
    // sarà maggiore o uale alla posizione massima, tutto ciò darà un errore
    if (posizioneMin < 0 || posizioneMax >= array.length || posizioneMin >= posizioneMax) {

        return "Errore: posizioni non valide.";
    }
    
    // il metodo ".slice" estrae parti di un array
    return array.slice(posizioneMin, posizioneMax + 1);
}

// Esempio di utilizzo:
let arrayTrimmed = tagliaArray(array1, 2, 4);
console.log(arrayTrimmed);

// creo una costante per stampare in pagina il risultato
const resultElement = document.querySelector("#new-array");

// stampo in pagina la frase ottenuta
resultElement.innerText = arrayTrimmed;