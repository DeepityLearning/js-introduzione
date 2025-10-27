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


// for (let i=1; i >= 100; i++);
// if (i % 7==0)

// 9) usando un ciclo logga i numeri da 1 a 100 mettendo un asterisco vicino ai quadrati perfetti

// let squareRoot = Math.sqrt(i);

// for (let i=1; i<=100;i++) {

// }


// 10) chiedi all'utente un numero (positivo) di partenza e poi logga tutti i numeri dal numero dato fino a 0


// let userResponse = promt("Inserisci un numero positivo di partenza");

// let numero = parseInt(prompt("Inserisci un numero positivo di partenza:"));
// if (isNaN(numero) || numero < 0) {
//   console.log("Per favore inserisci un numero positivo valido.");
//   } else {

// for (let i = numero; i >= 0; i--) {
//     console.log(i);
//   }
// }

// 11) chiedi all'utente due numeri e logga tutti i numeri pari compresi tra i numeri forniti dall'utente

// let num1 = promt("Inserisci il primo numero:");
// let num2 = prompt("Inserisci il secondo numero:");
// let min = Math.min(num1, num2);
// let max = Math.max(num1, num2);

// if (isNaN(num1) || isNaN(num2)) {
//   console.log("Per favore inserisci due numeri validi.");
// } else {
// console.log(`Numeri pari tra ${min} e ${max}:`);

// }
//  for (let i = min; i <= max; i++) {
//     if (i % 2 === 0) {
//       console.log(i);
//     }
// }


// 12) chiedi all'utente quanti anni ha e digli quante ore ha gia' vissuto

// let anni = parseInt(prompt("Quanti anni hai?"));
// let oreVissute = anni * 365 * 24;

// if (isNaN(anni) || anni < 0) {
//   console.log("Per favore inserisci un'età valida.");
// } else {
//       console.log(`Hai vissuto circa ${oreVissute} ore!`);
// }

// Write a loop that makes seven calls to 
// console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######
// It may be useful to know that you can find the 
// length of a string by writing .length after it.
// let abc = "abc";
// console.log(abc.length);
// //→ 3

// variabile triangle che contiene "#"
// let triangle = "#";

// // purché la lunghezza della stringa sia minore o uguale a 7
// while (triangle.length <= 7) {
//   // stampa la stringa
//     console.log(triangle);
//   // aggiunge un altro "#"
//     triangle += "#";
// }

// let startingString = "#";
// for (let triangle = 0; triangle <=7; triangle++){


//     console.log("#")
//     line + ""
// }

// //Write a program that uses console.log to print all the numbers from 1
// // to 100, with two exceptions. For numbers divisible by 3, print "Fizz"
// // instead of the number, and for numbers divisible by 5 (and not 3), 
// // print "Buzz" instead.
// // When you have that working, modify your program to print "FizzBuzz
// // " for numbers that are divisible by both 3 and 5 (and still print 
// // "Fizz" or "Buzz" for numbers divisible by only one of those).
// // (This is actually an interview question that has been claimed to weed
// // out a significant percentage of programmer candidates. So if you solved
// // it, your labor market value just went up.)

// for (let i = 0; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else {
//         console.log(i);
//     }
// }


// // Write a program that creates a string that represents an 8×8 grid,
// // using newline characters to separate lines. At each position of the 
// // grid there is either a space or a "#" character. The characters 
// // should form a chessboard.
// // Passing this string to console.log should show something like this:
// //  # # # #
// // # # # #
// //  # # # #
// // # # # #
// //  # # # #
// // # # # #
// //  # # # #
// // # # # #
// // When you have a program that generates this pattern, define a binding 
// // size = 8 and change the program so that it works for any size,
// // outputting a grid of the given width and height.

// let size = 8;
// let content = "";

// // Ciclo righe
// for (let i = 0; i < size; i++) { 
//     // Ciclo colonne
//     for (let x = 0; x < size; x++) {
//         // Se l'addizione è pari stampa "#"
//         if ((i + x) % 2 ===0) {
//             content += " ";
//         // se è dispari stampa " "
//         } else {
//             content += "#";
//         }
//     }
//     // A fine riga, a capo
//     content += "\n";
// }
// console.log(content);

// // 
// for (let i=0; i < 8; i++){
//     if (i%2 === 0)
//         console.log(" # # # #") 
// } else {
//     console.log("# # # # ")
// }
// //
// let chessboard= " ";
// for (let i=0;i<8;i++){
//     if ( i%2 === 0) {
//         chessboard = chessboard + " # # # #\n"

//     }
//     else{
//         chessboard = chessboard + "# # # # \n"
//     }
// }

// let size1 = 9;
// for (let line = 0; line < size1; line++){
//     for (let column = 0; column < size1; column++){
//         if (line % 2 === 0) {
//             if (column % 2 ===0){
//                 chessboard = chessboard + " ";
//             }else {
//                   chessboard = chessboard + "#";
//         }
    
//     }else {
//         if (column % 2 === 0){
//             chessboard=chessboard + "#";
//         }else{
//             chessboard = chessboard + " ";
//         }
//     }

//     console.log ()
//     }
// }

