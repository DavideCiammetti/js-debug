/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
// function checkAge(myAge) {
//     let message = '';

//     if (myAge < 18) {
//         message = `Sei troppo giovane! Hai ${myAge} anni!`;
//         console.log(message);
//         return message;
//     } else {
//         message = 'Hai più di 18 anni!';
//         console.log(message);
//         return message;
//     }
// }

// const myAge = 32;
// checkAge(myAge);

/*
  questa funzione dovrebbe servire per sapere se l'età è piu o meno di 18 anni e per falo si una un if ed un else dove nell'if validiamo se l'età è minore di 18 
  e stampa un mex altrimenti se l'eta è superiore stampa un altro messsaggio, ma noto 2 problemi 
  1- per quanto riguarda la logica, perche una funzione per avere il senso della funzione deve essere riutilizzabile quindi sposterei la variabiabilemyAge 
  come parametro da dare alla function e quella variabile message non serve molto.
  2-nel codice stiamo assegnando a una "const" 2 messaggi il che ci darà errore quindi do a message "let" cosi possiamo sovrascrivere il suo valore nell'if
*/

// ---------------------------------------------------------ESERCIZIO 2------------------------------------------
// function printColorsNumber(colors) {

//     console.log(`Nella mia palette ci sono ${colors.length} colori!`);
// }

// const colors = ['blue', 'red', 'yellow', 'green', 'black'];
// printColorsNumber(colors);

/*
    printColorsNumber()---> questa funzione prende un array[] e stampa la lungheza dell'array[] ma qui ci sono 2 errori:
    1- colors.lenght---> lenght si scrive length
    2- inserirei l'array come parametro da dare alla funzione piuttosto che inserirslo l suo interno
*/

// // ---------------------------------------------------ESERCIZIO 3--------------------------------------------
// function addNumbers(userNumber) {
//     const total = userNumber + 12;

//     console.log(`Il risultato finale è ${total}`);
// }
// const userNumber = Number(prompt('Inserisci un numero'));
// addNumbers(userNumber);

/*
prende la funzione addNumbers()---> e la usa per far inserire un numero all'utente e sommarci 12 ma in questo modo ci sono diversi errori :
1- il prmpt da stringhe e non numeri qundi dobbiamo conertire la stringa in nuero
2- inserisco il promt come parametro da dare alla funzione per renderla più versatile
*/


// // ----------------------------------------------------ESERCIZIO 4-------------------------------------------
function checkAccess(userEmail) {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    let grantAccess = false;

    if (addresses.includes(userEmail)) {
        grantAccess = true;

        if (grantAccess === true) {
            console.log('Accesso consentito!');
        } 
    }else {
        console.log('Accesso negato!');
    }

}
const userEmail = prompt('Inserisci il tuo indirizzo email');
checkAccess(userEmail);

/*
    questa funzione checkAccess()----> prende un array[] di email e ha il compito di vedere se l'email inserita dall'utente è nel registro mail
    quindi in questo caso inserirei la userEmail come parametro da dare alla funzione e l'array[]di mail lo lascio dentro perche fa parte della funzione 
    essendo l'argomento validatore 
    pero c'è anche un altro problema e cioè che l'if che converte il valore grantAccess da false a true non è incluso con gli altri if e essendo lo scope
    interno all'if allora sara sempre negativo il risultato.
    in fine tolgo true e false dagli apici sono boolean value non string e inserisco else in fondo all'if principale
*/


// // -------------------------------------------------ESERCIZIO 5 (suggerimento: c'è un solo errore)-----------------------------------
// function checkAccessImproved() {
//     const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

//     const userEmail = prompt('Inserisci il tuo indirizzo email');

//     let grantAccess = 'false';

//     for (let i = 0; i < addresses.length; i++) {
//         const email = addresses[i];

//         if (userEmail.length > 5) {

//             if (email === userEmail) {
//                 grantAccess = 'true';

//             }

//         }

//         if (grantAccess) {
//             console.log('Accesso consentito!');
//         } else {
//             console.log('Accesso negato!');
//         }
//     }
//     checkAccessImproved();





























