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

// function findGreaterNumber(n1, n2) {

//     // let choosenNumber;

//     // if( n1 < n2 ){
//     //     choosenNumber = n2;
//     // } else {
//     //     choosenNumber = n1;
//     // }

//     // return choosenNumber;

//     if (n1 < n2) {
//         return n2;
//     } else {
//         return n1;
//     }

// }


// console.log(findGreaterNumber(30, 31))

// const first = 50;
// const second = 100;

// const greater = findGreaterNumber(first, second);

// console.log(greater);

// const findGreaterNumberLambda = (n1, n2) => {
//     if (n1 < n2) {
//         return n2;
//     } else {
//         return n1;
//     }
// }

// const findGreaterNumberLambdaShort = (n1, n2) => n1 < n2 ? n2 : n1;

// function findGreaterNumberShort(n1, n2) {
//     return n1 < n2 ? n2 : n1;
// }

// 20) Scrivere una funzione che date in input due stringhe ritorni la più corta;

// function findShortestString(s1, s2){

//     if(s1.length < s2.length){
//         return s1;
//     } else {
//         return s2;
//     }

// }

// console.log(findShortestString('ciao mamma!', 'ciao nonnina!!'))


// 21) Scrivere una funzione che data in input una stringa ritorni la sua iniziale;

// function findFirstChar(str) {
//     // return str.charAt(0);
//     return str[0];
// }

// const findFirstCharLambda = str => str[0];

// console.log(findFirstChar('leaonardo'));

// 22) scrivere una funzione che dati in input una stringa e un numero,
// logghi la stringa tante volte quante il numereo dato;

// function stringMultiLogger(str, times) {

//     for (let i = 0; i < times; i++) {

//         console.log(str);

//     }

// }

// const stringMultiLoggerLambda = (str, times) => {

//     for (let i = 0; i < times; i++) {
//         console.log(str);  
//     }

// }

// const result = stringMultiLogger('leonardo', 30);

// console.log(result)


//23) You can get the Nth character, or letter, from a string by writing [N] after the string (for example, string[2]). The resulting value will be a string containing only one character (for example, "b"). The first character has position 0, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.
//Write a function called countBs that takes a string as its only argument and returns a number that indicates how many uppercase B characters there are in the string.
//Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase B characters). Rewrite countBs to make use of this new function.


// function countBs(str) {

//     let counter = 0;

//     for (let i = 0; i < str.length; i++) {

//         const selectedChar = str[i];
//         const lowerChar = selectedChar.toLowerCase()

//         if (lowerChar === 'b') {
//             counter++
//         }

//     }

//     return counter;
// }

// console.log(countBs('babbeo')) //->3
// console.log(countBs('leonardo')) //->0
// console.log(countBs('BAMBINO')) //->2

// function countChar(str, char) {

//     let counter = 0;

//     for (let i = 0; i < str.length; i++) {

//         const selectedChar = str[i];

//         const selectedLower = selectedChar.toLowerCase();
//         const charLower = char.toLowerCase();

//         if (selectedLower === charLower) {
//             counter++
//         }

//     }

//     return counter;

// }

// console.log(countChar('mammamia', 'm')) //->4
// console.log(countChar('mammamia', 'i')) //->1
// console.log(countChar('leonardo', 'L')) //->1


// function countCharSensitive(str, char, isSensitive) {

//     let counter = 0;

//     for (let i = 0; i < str.length; i++) {

//         let selectedChar = str[i];

//         if (!isSensitive) {
//             selectedChar = selectedChar.toLowerCase();
//             char = char.toLowerCase()
//         }

//         if (selectedChar === char) {
//             counter++
//         }

//     }

//     return counter;

// }

// console.log(countCharSensitive('leonardo', 'L', false)) //->1
// console.log(countCharSensitive('leonardo', 'L', true)) //->0


//24) Inversione di un numero
//Scrivi una funzione invertiNumero che prenda un numero come parametro e restituisca il numero con le cifre invertite (es. 123 → 321).

// function reverseNumber(nbr) {

//     const nbrToString = String(nbr);
    
//     let reversed = '';

//     for (let i = nbrToString.length - 1 ; i >= 0 ; i--) {
        
//         const char = nbrToString[i];
//         reversed += char;
        
//     }

//     const reversedToNumber = Number(reversed);
//     return reversedToNumber;
// }

// console.log(reverseNumber(123345))

//25) Tabellina
//Scrivi una funzione tabellina che prenda un numero come parametro e stampi in console la tabellina di quel numero fino a 10.

// function tabellina(nbr){
//     console.log(nbr * 1);
//     console.log(nbr * 2);
//     console.log(nbr * 3);
//     console.log(nbr * 4);
//     console.log(nbr * 5);
//     console.log(nbr * 6);
//     console.log(nbr * 7);
//     console.log(nbr * 8);
//     console.log(nbr * 9);
//     console.log(nbr * 10);
// }

// tabellina(3);
// tabellina(10);

// function tabellinaEvolution(nbr){
//     for (let i = 1; i < 11; i++) {
//         const result = nbr * i;
//         console.log(result);
//     }
// }

// tabellinaEvolution(3);
// tabellinaEvolution(10);

// function tabellinaString(nbr){

//     let tabellinaStr = '';

//     for (let i = 1; i < 11; i++) {
//         const result = nbr * i;
//         tabellinaStr += result;
//         tabellinaStr += ' ';
//     }

//     return tabellinaStr;
// }

// for (let i = 1; i < 11; i++) {
//     console.log(tabellinaString(i))
// }

//26) Fibonacci
//Scrivi una funzione fibonacci che prenda un numero N come parametro e restituisca l’N-esimo numero della sequenza di Fibonacci.

// function fibo(pos) {

//     let first = 0;
//     let second = 1;

//     if (pos === 1) {
//         return first;
//     } else if (pos === 2){
//         return second;
//     } else if (pos > 2) {
//         let fib;
//         for (let i = 3; i <= pos; i++) {
//             fib = first + second;
//             first = second;
//             second = fib;
//         }
//         return fib;
//     } else {
//         console.log('ERRRRRORE!!')
//     }

// }

// console.log(fibo(7));

// function fiboRecursive(pos) {
    
//     if (pos === 0) {
//         return 0;
//     } else if (pos === 1){
//         return 1;
//     } else {
//         return fiboRecursive(pos - 1) + fiboRecursive(pos - 2);
//     }

// }

//27)  Conteggio vocali
//Scrivi una funzione contaVocali che prenda una stringa come parametro e restituisca il numero di vocali presenti.

// function countVowels(str) {

//     let counter = 0;

//     for (let i = 0; i < str.length; i++) {

//         const selectedChar = str[i];
//         const lowerChar = selectedChar.toLowerCase()

//         if (lowerChar === 'a' 
//             || lowerChar === 'e' 
//             || lowerChar === 'i' 
//             || lowerChar === 'o' 
//             || lowerChar === 'u') {
//             counter++
//         }

//     }

//     return counter;
// }

// console.log(countVowels('aiuola'))

//28) Sconto
//Scrivi una funzione applicaSconto che prenda due numeri come parametri (prezzo e percentuale di sconto) e restituisca il prezzo scontato.

// function applySale(price, salePercent) {

//     const sale = price / 100 * salePercent;
//     const priceWithSale = price - sale;

//     return priceWithSale;
    
// }

// console.log(applySale(100, 20));

//29) Conversione gradi
//Scrivi una funzione convertiGradi che prenda un numero come parametro (gradi Celsius) e restituisca la conversione in Fahrenheit

// function celsiusToFahrenheit(c){

//     const f = (c * (9 / 5)) + 32;
//     return f; 
// }

// console.log(celsiusToFahrenheit(30));

//30) Verifica password
//Scrivi una funzione verificaPassword che prenda una stringa e restituisca true se:
// - Ha almeno 8 caratteri
// - Contiene almeno una lettera maiuscola
// - Contiene almeno un carattere speciale tra questi '!#@$%'
// - Non contiene la parola 'cacca'

// function hasSpecialCharacters(str){
//     if (str.includes("!")
//         || str.includes('#')
//         || str.includes('@')
//         || str.includes('$')
//         || str.includes('%')) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function containsUppercaseChar(str){
//     if (str.toLowerCase() === str) {
//         return false;
//     } else {
//         return true;
//     }
// }

// function isTooShort(str){
//     if(str.length < 8){
//         return true;
//     } else {
//         return false;
//     }
// }

// function containsCacca(str){
//     if(str.includes('cacca')){
//         return true;
//     } else {
//         return false;
//     }
// }

// function checkPassword(password) {
//     // if(password.length < 8){
//     //     return false;
//     // } else {
//     //     if(password.toLowerCase() === password){
//     //         return false;
//     //     } else {
//     //         if (password.includes("!")
//     //         || password.includes('#')
//     //         || password.includes('@')
//     //         || password.includes('$')
//     //         || password.includes('%')) {
//     //             if (password.includes('cacca')) {
//     //                 return false;
//     //             } else {
//     //                 return true;
//     //             }
//     //         } else {
//     //             return false;
//     //         }
//     //     }
//     // }


//     if (isTooShort(password)) {
//         return false;
//     } else if (!containsUppercaseChar(password)){
//         return false;
//     } else if (!hasSpecialCharacters(password)){
//         return false;
//     } else if (containsCacca(password)) {
//         return false;
//     } else {
//         return true;
//     }

 

// }


// console.log(checkPassword('caccacaccacacca'));
// console.log(checkPassword('Leonardo!'));

// 31) Somma dei numeri fino a n
// Scrivi una funzione sommaFinoAN(n) che restituisce la somma dei numeri da 1 a n.
// sommaFinoAN(5) -> 1 + 2 + 3 + 4 + 5 -> 15
// 32) Conteggio cifre
// Scrivi una funzione contaCifre(num) che restituisce il numero di cifre di un numero
// contaCifre(5) -> 1
// contaCifre(1245) -> 4
// 33) Somma delle cifre
// Scrivi una funzione sommaCifre(num) che restituisce la somma delle cifre di un numero
// sommaCifre(5) -> 5
// sommaCifre(1245) -> 12
// 34) Conversione valuta
// Scrivi una funzione euroToDollaro(euro) che converte un importo in euro in dollari (1 euro = 1.1 dollari).
// 35) Calcolo area rettangolo
// Scrivi una funzione areaRettangolo(base, altezza) che restituisce l’area di un rettangolo.
// 36) Calcolo media
// Scrivi una funzione media(a, b, c) che restituisce la media di tre numeri.
// 37) Generatore di password casuale
// Scrivi una funzione generaPasswordCasuale() che restituisce una password di 8 caratteri usando solo lettere maiuscole e numeri (usa Math.random())
// 38) Potenza con ciclo
// Scrivi una funzione potenzaCiclo(base, esponente) che calcola la potenza usando un ciclo.
// 39) Scrivi un validatore di email con queste regole:
// -deve contenere una @
// -deve contenere un punto posizionato dopo la @
// -le parti di testo prima della @ e tra la @ e il punto devono almeno avere tre lettere
// -il punto non può essere l'ultimo carattere
// 40) crea un converitore tra italiano e farfallino(https://it.wikipedia.org/wiki/Alfabeto_farfallino)