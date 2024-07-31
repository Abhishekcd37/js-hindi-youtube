// if
const isUserloggedIn = true
const temprature = 41

// if(temprature<50){
//     console.log("less than 50");
// }else{
// console.log("not less than 50");
// }
// comaprison operator used in js <,>,<=,>=,==,!=,===, !==

// const score =200
// if(score>100){
//     const power = "fly"
//     console.log(`user power ${power}`);
// }
// console.log(`user power ${power}`);

// const balance= 1000


// if(balance>500) console.log("test");//this implicit condition where we do not use braces for single line line statements 
// if(balance>500) console.log("test"), console.log("test2");//however we can write multiple statements also but for that we 
// have to use ,and in the end it needs to terminsted by;

// if(balance < 500){
//     console.log("less than 500");
// } else if(balance< 750){
//     console.log("less than 750");
// } else if(balance<900){
//     console.log("les than 900");
// }else{
//     console.log("less tham 1200");
// }

const UserloggedIn = true
const debitcard = true
const loggedInFromGoogle =true
const loggedInFromEmail =false

if(UserloggedIn && debitcard && 2==="2"){//in this all the condition need to be true
    console.log("Allow the user to buy hte course");
}


if(loggedInFromEmail || loggedInFromGoogle ){//in this altleast one condition need to be true
    console.log("User logged in ");
}