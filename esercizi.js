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
//         console.log("dispari");
//     }

// }

// 8) usando un ciclo logga i numeri da 1 a 100 mettendo un asterisco vicino ai multipli di 7

// for (let i = 1; i <= 100; i++) {

//     if (i % 7 === 0) {
//         console.log(i + '*');
//     } else {
//         console.log(i);
//     }

// }

// 9) usando un ciclo logga i numeri da 1 a 100 mettendo un asterisco vicino ai quadrati perfetti

// for (let i = 1; i <= 100 ; i++) {

//     let squareRoot = Math.sqrt(i);

//     if (Number.isInteger(squareRoot)) {
//         console.log(i + "*");
//     } else {
//         console.log(i);
//     }

// }

// 10) chiedi all'utente un numero (positivo) di partenza e poi logga tutti i numeri dal numero dato fino a 0


// let userResponse = prompt('Dammi un numero positivo?');

// let userNumber = Number(userResponse);

// for (let i = userNumber; i >= 0; i--) {

//     console.log(i);

// }


// 11) chiedi all'utente due numeri e logga tutti i numeri pari compresi tra i numeri forniti dall'utente

// const number1 = prompt('inserisci il primo numero?');
// const convertedNumber1 = Number(number1);

// const number2 = prompt('inserisci il secondo numero?');
// const convertedNumber2 = Number(number2);

// for (let i = convertedNumber1; i <= convertedNumber2; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// 12) chiedi all'utente quanti anni ha e digli quante ore ha gia' vissuto

// let age = Number(prompt('Quanti anni hai?'));

// const hours = age * 365 * 24;

// console.log('Hai gia sprecato ' + hours + ' ore');

// 13) Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######


// let line = '#';

// for (let i = 0; i < 7; i++) {

//     console.log(line);

//     line = line + '#';

// }

//14) Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
//When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

// for (let i = 1; i <= 100; i++) {

//     if (i % 3 === 0) {
//         console.log('fizz');
//     } else if (i % 5 === 0){
//         console.log('buzz');
//     } else {
//         console.log(i);
//     }

// }

// for (let i = 1; i <= 100; i++) {

//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log('fizzbuzz');
//     } else if (i % 5 === 0){
//         console.log('buzz');
//     } else if (i % 3 === 0){
//         console.log('fizz');
//     } else {
//         console.log(i);
//     }

// }

// for (let i = 1; i <= 100; i++) {

//     if (i % 3 === 0 && i % 5 !== 0) {
//         console.log('fizz');
//     } else if (i % 5 === 0 && i % 3 !== 0){
//         console.log('buzz');
//     } else if (i % 3 === 0 && i % 5 === 0){
//         console.log('fizzbuzz');
//     } else {
//         console.log(i);
//     }

// }

// for (let i = 1; i <= 100; i++) {

//     let response = '';

//     if (i % 3 === 0) {
//         response = response + 'fizz';
//     }
//     if (i % 5 === 0) {
//         response = response + 'buzz';
//     }
//     if (response === '') {
//         console.log(i);
//     } else {
//         console.log(response);
//     }

// }



// 1 : 3 = 0 -> r: 1 -> 1 % 3 = 1
// 2 : 3 = 0 -> r: 2 -> 2 % 3 = 2
// 3 : 3 = 1 -> r: 0 -> 3 % 3 = 0
// ---
// 5 : 3 = 1 -> r: 2 -> 5 % 3 = 2
// ---
// 27 : 3 = 9 -> r: 0 -> 27 % 3 = 0


// 15) Chessboard
// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
// Passing this string to console.log should show something like this:
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # #
//When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

// for (let i = 0; i < 8; i++) { 
//     if (i % 2 === 0) {
//         console.log(' # # # #');
//     } else {
//         console.log('# # # # ');
//     }
// }


// let chessboard = '';

// for (let i = 0; i < 8; i++) { 
//     if (i % 2 === 0) {
//         chessboard = chessboard + ' # # # #\n';
//     } else {
//         chessboard = chessboard + '# # # # \n';
//     }
// }

// console.log(chessboard);

// let size = 18;

// let chessboard = '';

// for (let line = 0; line < size; line++) {
//     for (let column = 0; column < size; column++) {
//         if (line % 2 === 0) {
//             if (column % 2 === 0) {
//                 chessboard = chessboard + ' ';
//             } else {
//                 chessboard = chessboard + '#';
//             }
//         } else {
//             if (column % 2 === 0) {
//                 chessboard = chessboard + '#';
//             } else {
//                 chessboard = chessboard + ' ';
//             }
//         }
//     }
//     chessboard = chessboard + '\n';
// }

// console.log(chessboard)


// let size = 50;

// let chessboard = '';

// for (let line = 0; line < size; line++) {
//     for (let column = 0; column < size; column++) {
//         if ((line + column) % 2 === 0) {
//             chessboard = chessboard + ' ';
//         } else {
//             chessboard = chessboard + '#';
//         }
//     }
//     chessboard = chessboard + '\n';
// }

// console.log(chessboard)


// 16) Scrivere una funzione che mi dice se un numero è pari;

// function checkEven(inputNumber) {

//     const isEven = inputNumber % 2 === 0;
    
//     return isEven;
// }

// const checkEvenLambda = inputNumber => inputNumber % 2 === 0;

// const res1 = checkEven(22);
// console.log(res1);
// const res2 = checkEven(21);
// console.log(res2);

// const res3 = checkEvenLambda(221);
// console.log(res3);
// const res4 = checkEvenLambda(212);
// console.log(res4);

// 17) scrivere una funzione che moltiplichi una stringa per un numero
// es: se inserisco 'cacca' e 3, l'output sarà 'caccacaccacacca'

// function multiplyString(inputString, multiplier){

//     let multipliedString = '';

//     for (let i = 0; i < multiplier; i++) {
        
//         //multipliedString = multipliedString + inputString;
//         multipliedString += inputString;

//     }

//     return multipliedString;

// }

// const multiplyStringLambda = (inputString, multiplier) => inputString.repeat(multiplier);


// const res5 = multiplyString('pippo', 3)

// console.log(res5)

// const res6 = multiplyString('cacca', 100)

// console.log(res6)

// const res7 = multiplyStringLambda('basta', 5)

// console.log(res7)

// const res8 = multiplyStringLambda('incubo', 10)

// console.log(res8)

// 18) Scrivi una funzione che dato un numero mi dice se è intero oppure no

// function checkInteger(n) {

//     const isInteger = n % 1 === 0

//     return isInteger;

// }

// const checkIntegerLambda = n => n % 1 === 0;


// const res9 = checkInteger(3);

// console.log(res9);

// const res10 = checkInteger(3.14);

// console.log(res10);

// const res11 = checkInteger(30);

// console.log(res11);

// const res12 = checkInteger(0.5);

// console.log(res12);

// 19) Scrivere una funzione che dati in input due numeri ritorni il maggiore;
// 20) Scrivere una funzione che date in input due stringhe ritorni la più corta;
// 21) Scrivere una funzione che data in input una stringa ritorni la sua iniziale;
// 22) scrivere una fuzione che dati in input una stringa e un numero, 
// logghi la stringa tante volte quante il numereo dato; 