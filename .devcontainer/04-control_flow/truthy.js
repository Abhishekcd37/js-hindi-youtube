const useremail= ""

// if(useremail){
//     console.log("Got user email");
// }else{
//     console.log("dont have user email")
// }

// falsy vlaues=> false, 0, -0, BigInt 0n, "", null, undefined, NaN
// truthy vlaues=> "0", 'false', " ", [], {}, function(){} 

if(useremail.length=== 0){
    // console.log("array is empty");
}

const emptyobj = {}

// if(Object.keys(emptyobj.length===0)){
//     console.log("object is empty");
// }

// Nullish Coalescing operator (??): null undefined
// The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand
//  when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

let val1;
// val1 = 5 ?? 10
// val1 = null?? 89
val1 = undefined?? 89

console.log(val1);
    
// ternary operator

// condition ? true : false

const iceprice = 100
iceprice <= 80 ? console.log("less than 80 ") : console.log("more than 80");