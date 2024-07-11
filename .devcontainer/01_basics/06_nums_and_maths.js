const score = 400
// console.log(score);

const balance = new Number(200)
// console.log(balance);

// console.log(typeof(balance.toString().length));
// console.log(balance.toFixed(2));//its used to show number of decimal value alotted to the given number
const othernumber = 123.239352533;

// console.log(othernumber.toPrecision(5));// this funtion is used to show how many numbers will displayed over the screen

const hundreds = 100000000;

// console.log(hundreds.toLocaleString('en-In'));

// ********************************************************* Maths *********************************************************

// console.log(Math);
// console.log(Math.abs(-3));//always convert the negative value to positive
// console.log(Math.round(4.8));// to round of the vlaue 
// console.log(Math.ceil(4.4));// alwaya goes to the next value of number or increaments it
// console.log(Math.floor(4.9))// keeps the base vlaue
// console.log(Math.min(4,8,5,7));


console.log((Math.random()*10) + 1);
console.log((Math.random()*10) + 1);


const max = 40
const min =30

console.log(Math.floor(Math.random() * (max - min + 1) + min))
