
// //const leaonardo = ['leonardo', 'silva', 27, 'maschio', 'perù', false, 'via dodecanneso 16', ['musica', 'pagliaccio', 'bullo']] //BUUUUUU

// const leaonardo = {
//     name: 'leonardo', 
//     surname: 'silva', 
//     age: 27, 
//     gender: 'maschio', 
//     nationality: 'perù', 
//     isMarried: false, 
//     address: {
//         street: 'via dodecanneso',
//         civic: 16,
//         city: 'genova',
//         country: 'italia'
//     }, 
//     interests: ['musica', 'pagliaccio', 'bullo'] 
// }

// /// ACCEDERE ALLE PROPRIETÀ

// console.log(leaonardo);

// console.log(leaonardo.name);

// console.log(leaonardo.address.street)

// console.log(leaonardo.interests[0])

// /// CAMBIARE, AGGIUNGERE O RIMUOVERE UNA PROPRIETÀ

// leaonardo.age = 25;

// leaonardo.address.civic = 30;

// leaonardo.interests[2] = 'super bullo'

// leaonardo.siblings = 1; // nuova proprietà

// delete leaonardo.gender; // eliminare una proprietà

// console.log(leaonardo);

// /// FUNZIONI COME PROPRIETÀ

// function saluta(){
//     console.log('ciao sono leonardo!!')
// }

// leaonardo.blatera = saluta;


// leaonardo.blatera();

////////////////////////////

// function calculateMean(nbrArray) {

//     let sum = 0;
//     for (let i = 0; i < nbrArray.length; i++) {

//         const element = nbrArray[i];
//         sum = sum + element;
//     }
//     const mean = sum / nbrArray.length;

//     return mean;
// }


// const leaonardo  = {
//     name: 'leonardo',
//     surname: 'silva',
//     yob: 1998,
//     marks: [5, 8, 10, 7]
// }

// const evelyn  = {
//     name: 'evelyn',
//     surname: 'medina',
//     yob: 1984,
//     marks: [9, 8, 10, 9]
// }

// const luis  = {
//     name: 'luis',
//     surname: 'amoretti',
//     yob: 2004,
//     marks: [10, 10, 8, 5]
// }

// const students = [leaonardo, evelyn, luis];


// console.log(students[0].name)

// for (let i = 0; i < students.length; i++) {
//     const student = students[i];
    
//     console.log(student.name, student.surname, calculateMean(student.marks))

// }

///FOR IN

// const ariel = {
//     name: 'Ariello',
//     age: 4,
//     race: 'border collie',
//     type: 'dog',
//     'peggior nemico': 'husky'
// }

// let emptyString = '';

// for (const key in ariel) {
    
//     const value = ariel[key];

//     emptyString = emptyString + key + ': ' + value + '\n';
// }

// console.log(emptyString);

/// NOTAZIONE CON PARENTESI QUADRE
// console.log(ariel.name);
// console.log(ariel['name']);

// console.log(ariel['peggior nemico']);


// JSON (JavaScript Object Notation);


// const leaonardo = {
//     name: 'leonardo', 
//     surname: 'silva', 
//     age: 27, 
//     gender: 'maschio', 
//     nationality: 'perù', 
//     isMarried: false, 
//     address: {
//         street: 'via dodecanneso',
//         civic: 16,
//         city: 'genova',
//         country: 'italia'
//     }, 
//     interests: ['musica', 'pagliaccio', 'bullo'] 
// }

// console.log(leaonardo);

// const leoString = JSON.stringify(leaonardo);

// console.log(leoString)

// const dataString = '{"name": "Andrea", "surname": "Asioli", "yob": 1978, "isMarried": false}'

// console.log(dataString);

// const data = JSON.parse(dataString);

// console.log(data);


// const pippo = 3;

// const pluto = 3;

// console.log(pippo === pluto);


// const ariel = {
//     name: 'Ariello',
//     age: 4,
//     race: 'border collie',
//     type: 'dog',
//     'peggior nemico': 'husky'
// }

// const billy = {
//     name: 'Ariello',
//     age: 4,
//     race: 'border collie',
//     type: 'dog',
//     'peggior nemico': 'husky'
// }


// console.log(ariel === billy);


// const puppy = ariel;


// console.log(ariel === puppy);


// billy.age = 12;

// console.log(billy);
// console.log(ariel);

// puppy.race = 'husky';

// console.log(puppy);
// console.log(ariel);