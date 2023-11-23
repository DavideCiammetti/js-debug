/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i < 5; i++) {
    console.log(i);
}

/*
in questo primo esercizio abbiamo un ciclo for() con un index "i" ed al suo interno un console.log() per stampare il valore dell'index ad ogni ciclo
il problema di questo ciclo però è il simbolo di maggiore questo perche i è inizialemnte minore di 5 quindi dobbiamo correggerlo con i < 5 
altrimente il ciclo non si sarebbe mai dal momento che i = 0  e 5 è maggiore 
*/

// ---------------------------------------------ESERCIZIO 2------------------------------------------------------------------
// function addIfEven(num) {
//     if (num % 2 = 0) {
//         return num + 5;
//     }
//     return num;
// }


// // ESERCIZIO 3
// function loopToFive() {
//     for (let i = 0, i < 5, i++) {
//         console.log(i);
//     }
// }


// // ESERCIZIO 4 (suggerimento: ci sono 7 errori)
// function displayEvenNumbers() {
//     let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//     let evenNumbers = [];
//     for (let i = 0; i < numbers.length - 1; i++;) {
//         if (numbers % 2 = 0); {
//             evenNumbers.push(i);
//         }
//         return evenNumbers;
//     }
// }
// displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]