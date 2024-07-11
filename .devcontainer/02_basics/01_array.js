// arrays
// The Array object, as with arrays in other programming languages, 
// enables storing a collection of multiple items under 
// a single variable name, and has members for performing common array operations.

const myArray= [0,3,4,5,6,7,true,"abhishek"]// can mix data types in it 
const myHeros =["shaktiman", "nagraj"]

const myarr= new Array(1,2,3,4,56)
console.log(myArray[3])

//Array methods

// console.log(myarr.push(6))
// console.log(myarr);

// myarr.unshift(9)//always pushes the values in start of array
// myarr.shift()
// console.log(myarr.includes(9));// to find weather the given elment is present inside the arry or not
// console.log(myarr.indexOf(4));// checks the index of number inside the given array returns -1 when element is not present inside arry

// const newarr= myarr.join()//join is basically used for coverting the arry into String from object format 

// console.log(newarr);
// console.log(typeof(newarr));

// console.log(myarr);

//Slice, splice

console.log("A", myarr);

const mynewarr1= myarr.slice(1,3)// doesnt not manipulate array but prints from the given index leaving the last index

console.log(mynewarr1);
console.log("B",myarr);

const mynewarr2 = myarr.splice(1,3)// completely removes or manipulate the original array

console.log(mynewarr2);
console.log("C",myarr);
