/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

                                //SPIEGAZIONE E CORREZIONE 
/*                  
in questo primo esercizio abbiamo un ciclo for() con un index "i" ed al suo interno un console.log() per stampare il valore dell'index ad ogni ciclo
il problema di questo ciclo però è il simbolo di maggiore questo perche i è inizialemnte minore di 5 quindi dobbiamo correggerlo con i < 5 
altrimente il ciclo non si sarebbe mai dal momento che i = 0  e 5 è maggiore 
*/

// ---------------------------------------------ESERCIZIO 2------------------------------------------------------------------
// function addIfEven(num) {
//     if (num % 2 === 0) {
//         return num + 5;
//     }
//     return num;
    
// }

                                                 //SPIEGAZIONE E CORREZIONE 
/*
in questo secondo esercizio viene creata una funzione addIfEven() alla quale viene passato un valore "num",  ed al suo interno invece con una condizione if() 
chiediamo di dividere il numero per 2 e SE il resto (grazie all'operatore modulo %) è 0 allora facciamo return di num + 5.
però c'è un problema
1- all'interno delle parentesi nell'if() troviamo num % 2 = 0 ---> ma in questo caso stiamo "assegnando" 0 a 2 % num ma noi vogliamo vedere se il resto è uguale a 0
quindi scriviamo num % 2 === 0.
*/

// ----------------------------------------------ESERCIZIO 3-----------------------------------------------------------------
// function loopToFive() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//     }
// }

                                                     //SPIEGAZIONE E CORREZIONE 
/*
in questo terzo esercizio abbiamo una funzione loopToFive() con al suo interno un ciclo for() che dovrebbe mostrare a console il valore di "i" ad
ogni ciclo, qua il problema sta nella scrittura della condizione "let i = 0, i < 5, i++"---> in questo caso le virgole devono essere punti e virgola
*/


// //--------------------------------------------------------ESERCIZIO 4 --------------------(suggerimento: ci sono 7 errori)
function displayEvenNumbers(arrPrincipale) {
   const arrSecondario = [];

    for (let i = 0; i < arrPrincipale.length; i++) {
        if (arrPrincipale[i] % 2 === 0) {
            arrSecondario.push(arrPrincipale[i]);
        }
       
    }
    console.log(arrSecondario);
    return arrSecondario;

}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
displayEvenNumbers(numbers); // dovrebbe restituire [2,4,6,8]

/*
qui abbiamo una funzione  displayEvenNumbers() che non prende alcun valore, e dovrebbe dato un array[] di partenza restituire un secondo array[] con
tutti i numeri divisibili per 2 e lo fa con un ciclo for che cicla il primo array[] e con un if che divide ognii numero e SE il numero diviso tramite 
operatore modulo "%" riporta resto 0 allora vuol dire ch è divisibile per 2 e quindi tramite la fuzione push() viene inserito nel nuovo array[].

ma ci sono alcuni errori partiamo dagli errori sintattici:
1- (let i = 0; i < numbers.length - 1; i++;)----> il ";" dopo "i++"
2- (numbers % 2 = 0); -----> il punto e virgola dopo le parentesi e un solo uguale perche non stiamo cambiando valore a num % 2 ma vogliamo verificare che sia === a 0
3- il return deve essere inserito fuori dal ciclo for altrimenti restituirà n array quanti sono i cicli
4- il "i < numbers.length - 1"---> -1 nel for non serve in questo caso perche altrimenti andremo a lasciare l'ultimo numero fuori dall'elelnco di num da dividere

e poi ci sono degli errori di logica:
1- io avrei innanzi tutto inserito le variabili per gli array[] come valore da dare alla funzione quindi displayEvenNumbers(arrPrincipale) mentre il secondo lo creiamo all'interno della funzione 
2- quando si definisce un array[] è buona norma definirlo con "const" piuttosto che "let"
3- nell'if dobbiamo inserire arrPrincipale[i]---> perche verifico se il numero è pari 
4-  arrSecondario.push(arrPrincipale[i]);---> nel push inserisco non l'index ma l'array con l'index corrente 
*/