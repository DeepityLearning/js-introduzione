//1) chiedete all'utente il nome e fategli gli auguri di compleanno
//2) chiedete all'utente la base e l'esponente e calcolate la potenza
//3) chiedete all'utente un numero e ditegli se è pari o dispari (operatore modulo)
//4) fate inserire all'utente l'età e se è maggiore o uguale a 18 rispondete "puoi entrare"
//5) fate inserire all'utente una stringa e convertitela in maiuscolo (cercare su internet)

// 1) ////////////////////////////////////////
// const firstName = prompt("Come ti chiami?");
// alert("Tanti Auguri a "+firstName);


// 2) ////////////////////////////////////////
// const numberOne = prompt("Dammi la base della potenza");
// const numberTwo = prompt("Dammi l'esponente");

// const n1Converted = Number(numberOne);
// const n2Converted = Number(numberTwo);

// const result = n1Converted**n2Converted;

// alert("Il risultato è: "+result)

// 3) /////////////////////////////////////////

// const numb = prompt("dammi un numero");

// const numbConverted = Number(numb);

// const isEven = numbConverted % 2 === 0;

// if (isEven) {
//     alert("pari")
// } else {
//     alert("dispari")
// }


// 4) /////////////////////////////////////////

// const age = prompt("dammi l'eta")

// const ageConverted = Number(age);

// const isAdult = ageConverted >= 18;

// if (isAdult) {
//     alert("puoi entrare")
// }

// 5) /////////////////////////////////////////

// let word= prompt("insert stirngs of words");
// let wordUperCase = word.toUpperCase();
// // let wordUperCase = word.toLocaleUpperCase;

// alert(wordUperCase);


// 6) fai un ciclo for che stampi il quadrato dei numeri da 1 a 100

// for (let i = 1; i <= 100; i++) {
//     const square = i ** 2;
//     console.log(square);

// }

//7) fai un ciclo che per i numeri da 1 a 100 stampi pari se il numero è pari e dispari se il numero è dispari

// for (let i = 1; i < 101; i++) {

//     if (i % 2 === 0) {
//         console.log("pari");


//     } else {
//         console.log("dispari")
//     }

// }

// 8) usando un ciclo logga i numeri da 1 a 100 mettendo un asterisco vicino ai multipli di 7
// 9) usando un ciclo logga i numeri da 1 a 100 mettendo un asterisco vicino ai quadrati perfetti
// 10) chiedi all'utente un numero (positivo) di partenza e poi logga tutti i numeri dal numero dato fino a 0
// 11) chiedi all'utente due numeri e logga tutti i numeri pari compresi tra i numeri forniti dall'utente
// 12) chiedi all'utente quanti anni ha e digli quante ore ha gia' vissuto