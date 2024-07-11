//Primitive

//7 types: String , Number , Boolean , null, Undefined, Symbol, BigInt

const score=100;
const scorevalue=100.3;

const isLoggedin= false
const outsideTemp= null
let usermail;

const id= Symbol('123');
const anotherid= Symbol('123');
console.log(id===anotherid)

const bignumber =245433333333333333333333354643n// n is used to declare bigint

console.log(typeof(bignumber))


//Reference( Non-Primitive)
// Array , Objects , Funtions

const heros =["Shaktiman", "nagraj","Kilwish"];
let myobj={
    name:"Hitesh",
    age : 22
}

const myFunction= function(){
    console.log("hello world");
}

// https://262.ecma-international.org/5.1/#sec-11.4.3


//***********************************************************************************************

//  Stack always creates a copy (Primitive), Heap it only take the reference of original value(Non- Primitive)

let muYoutubenae= "hiteshchoudarydotcom"
let anothername= muYoutubenae
anothername="chaiorcode"
console.log(anothername);
console.log(muYoutubenae);

let userone={
    email: "user@google.com",
    upi: "user@ybl"
}

let usertwo= userone

usertwo.email= "abhishek@gmail.com"

console.log(userone);
console.log(usertwo);
