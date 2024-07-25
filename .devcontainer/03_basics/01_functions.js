
// function sayMyName(){
//     console.log("A");
//     console.log("A");
//     console.log("A");
//     console.log("A");
//     console.log("A");
// }

// sayMyName()

function addTwonumbers(number, number2){
    // const result= number + number2;
    // return result // after return none of the statement executes in function
    return number + number2
}

const result=addTwonumbers(3,5)

// console.log(result);

function loginusermessage(username){
    if(username === undefined)
    {
        console.log("please enter a valid username");
        return
    }
    return `${username} just logged in`

}


// console.log(loginusermessage("Abhishek"))
console.log(loginusermessage());