
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

const leaonardo  = {
    name: 'leonardo',
    surname: 'silva',
    yob: 1998,
    marks: [5, 8, 10, 7]
}

const evelyn  = {
    name: 'evelyn',
    surname: 'medina',
    yob: 1984,
    marks: [9, 8, 10, 9]
}

const luis  = {
    name: 'luis',
    surname: 'amoretti',
    yob: 2004,
    marks: [10, 10, 8, 5]
}

const students = [leaonardo, evelyn, luis];


console.log(students[0].name)

for (let i = 0; i < students.length; i++) {
    const student = students[i];
    
    console.log(student.name, student.surname)
}