const user ={
    username: "Abhishek",
    price: 999,
    welcomemessage: function(){
        console.log(`${this.username} , welcome to the this site  `);
        console.log(this);
    }
}

// user.wecomemessage()
// user.username= "ramesh"
// user.welcomemessage()
// console.log(this);//as we are in node enviroment so this keyword will refer 
// an empty object when there is no context in global so it will give empty object  

// function chia(){
//     let username= "Abhi"
//     console.log(this.username);//this keyword can only be used to refer any elemnt with . operator in objects only but not in function
// } 

// chia()


// const chai = () => {//this niether runs in arrow funtion nor normal function
//     let username ="Ahitesh"
//     console.log(this.username)
// }

// chai()

// const addtwo = (num1 , num2) => {
//     return num1+ num2
//     console.log(this.username)
// }

// console.log(addtwo(3 ,4))

// const addtwo = (num1 , num2) =>  num1+ num2
//it is reffered as implicit return 
// const addtwo = (num1 , num2) =>  (num1+ num2)// when we will use the curly braces arrow function requires return keyword 
const addtwo = (num1 , num2) => ( {username:"hello everyone"})// to declare an object in arrow function we need to put it into an () braces

console.log(addtwo(4, 8))

const myArr= [2,3,4,5,67,9]
// myArr.forEach()