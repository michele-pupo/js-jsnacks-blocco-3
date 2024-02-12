//  Snack 5 (bonus):
//  - Scrivi una funzione che accetti una stringa come parametro e restituisca 
//    la stessa stringa ma con le iniziali delle parole tutte in maiuscolo
//    Es: funzioneEsempio("nel mezzo del cammin di nostra vita")  
//    :freccia_destra:  "Nel Mezzo Del Cammin Di Nostra Vita"


// chiediamo all'utente di inserire una frase tramite prompt
let input = prompt("Inserisci una frase:");

// verifichiamo che l'utente abbia scritto qualcosa
if (input === null || input === "") {

    // se l'utente non ha scritto nulla
    // console.log("Nessuna frase inserita.");
    alert("Nessuna frase inserita, ricarica la pagina");

} else {
    
    // altrimenti procediamo ad effettuare la conversione delle iniziali tramite la funzione
    let phraseCapitalInitials = capitalInitials(input);
    console.log(phraseCapitalInitials);

    // stampiamo in pagina la frase ottenuta
    // creo una costante per stampare in pagina il risultato
    const resultElement = document.querySelector("#capital-initials");

    // stampo in pagina la frase ottenuta
    resultElement.innerText = phraseCapitalInitials;
}


// creiamo una funzione per rendere le prime lettere delle parole maiuscole
function capitalInitials(stringa) {
    
    // dividiamo la stringa in parole
    let words = stringa.split(' ');
    console.log(words);
    
    // iteriamo con un ciclo for su ogni parola dell'array ottenuto
    for (let i = 0; i < words.length; i++) {

        // prendiamo ogni parola che è contenuta nell'array e per ogni parola
        // con .charAt(0), cioè al carattere posto per primo applichiamo .toUpperCase()
        words[i] = words[i].charAt(0).toUpperCase();

    }
    
    // il metodo .join(' ') ci restuirà una stringa presa dall'array con, in questo caso,
    // uno spazio tra le parole
    return words.join(' ');
}
