console.log("Ciaone");


const multiplyBy2 = function (n){
 const result =  n * 2;
 return result;

} 



function multiplyBy3 (n){
    const result = n*3;
    return result;
}

const multiplyBy4 = (n) => {
    const result = n*4;
    return  result;
}

const multiplyBy5 = (n) => {
    return n * 5;

}

const multiplyBy6 = (n) => n*6;

const lara = multiplyBy5(500);
console.log(lara);

function checkMultiple(n1, n2) {
    const isMultiple = (n1 % n2 === 0);
    return isMultiple;

}

const sandro = checkMultiple(10, 3);
console.log(sandro);

const checkMultipleLambda = (n1, n2) => {
    const isMultiple = n1 % n2 === 0;
}

const checkMultipleLambdaShort = (n1, n2) => n1 % n2 === 0;

function getNow (){
    const now = new Date();
    return now;
}

const getNow = qua;
console.log (qua)

function logUppercase(inputString){
    const inputStringUppercase = inputString.toUpperCase(); 
    console.log(inputStringUppercase);
}



