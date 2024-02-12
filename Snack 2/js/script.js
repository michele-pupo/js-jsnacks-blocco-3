// Snack 2:
// - Scrivi una funzione che fonda due array presi come parametri 
//   (date per scontato che abbiano lo stesso numero di elementi) 
//   prendendo alternativamente gli elementi da uno e dall’altro
// - es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

// creiamo i due array con lunghezza uguale
let array1 = ['Misurare', 
              'progressi', 
              'programmazione',
              'linee',
              'codice',
              'come',
              'i',
              'della',
              'di',
              'dal',
              'peso'];

let array2 = ['i', 
              'della', 
              'dalle',
              'di',
              'é',
              'misurare',
              'progressi',
              'costruzione',
              'aerei',
              'loro',
              '.'];


// creiamo una funzione che fonda insieme i 2 array
function foundationArray(array1, array2) {

    // creiamo un array vuoto dove verranno inseriti i due array dondati insieme
    let resultMergeArray = [];

        // tramite un ciclo for iteriamo tra i due array
        for (let i = 0; i < array1.length; i++) {
                resultMergeArray.push(array1[i]);
                resultMergeArray.push(array2[i]);
            }
                return resultMergeArray;
            }

// creiamo una costante per il nuovo array
const resultMergePhrase = foundationArray(array1, array2);
console.log(resultMergePhrase);