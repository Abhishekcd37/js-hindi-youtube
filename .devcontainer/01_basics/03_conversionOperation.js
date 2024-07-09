let score = "33abc";
let score2= null
let score3= true
let score4=undefined


//const {score}=req.body; // here we dont know about the data type of the variable 
/*console.log(typeof score);
console.log(typeof(score2));
console.log(typeof(score3));
console.log(typeof(score4));
*/
//"33"=> 33
// "33abc"=> NaN
let valueInnumber= Number(score)
let valueInnumber1= Number(score2)
let valueInnumber2= Number(score3);
let valueInnumber3= Number(score4)


/*console.log(typeof(valueInnumber));//typecasting
console.log(typeof(valueInnumber1));
console.log(typeof(valueInnumber2));
console.log(typeof(valueInnumber3));

console.log(valueInnumber);// NaN is not a number
console.log(valueInnumber1);// gives 0 value for null
console.log(valueInnumber2);
console.log(valueInnumber3);*/
let isLoggedin="Abhishek"
/*console.log(isLoggedin);
console.log(Boolean(isLoggedin));
*/

// 1=> true; 0 => false
// ""=> false
// "Abbhishek"=> true

let somenumber=33

let stringnumber=String(somenumber)
// console.log(stringnumber)
// console.log(typeof(stringnumber))

// *********************************************** Operations **************************************************

let value = 3
let newvlaue = -value
// console.log( newvlaue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2/2)
// console.log(2**2)// power
// console.log(2%2)

let str1 = "hello"
let str2 = " Abhishek"

let str3 = str1 + str2
console.log(str3)

// console.log("1"+2)
// console.log(1+"2")
// console.log("1"+2+2)
// console.log(1+2+"2");

// console.log(+true)
// console.log(+"")

let num1 ,num2 ,num3

num1 = num2 =num3 = 2+2  

let gameCounter = 100
gameCounter++
console.log(gameCounter)
++gameCounter
console.log(gameCounter)
//  link to study
// https:tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
