// Immediately Invoked Funtion Expression(IIFE)
// many times the global scope might pollute the function because they can acces
//  those element and the result might get affected such that to prevent this we are
//  going to IIFE to remove the pollution as given below 

// (function chai(){// named IIFE
//     console.log("db connected")
// })(); //note to run the program succesfully we need to end the invoked funtion with ;

((name) =>{
    console.log(`db connected two ${name} `)
})('Abhishek');

