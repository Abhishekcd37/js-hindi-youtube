
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

// console.log(result);only when the function follow up with the return statement then only the result will be printed

function loginusermessage(username){
    if(username === undefined)//(!username)shows if it is empty
    {
        console.log("please enter a valid username");
        return
    }
    return `${username} just logged in`

}


// console.log(loginusermessage("Abhishek"))
// console.log(loginusermessage("abhi"));


function calculateCarPrice(val1,val2,...num1){//rest operator
    return num1
}

// console.log(calculateCarPrice(200,300,400,900,1000));//returns all the values passed in arguments as an array

const user= {
    username: "Abhishek",
    prices: 300
}

function handleobjects(anyobject){
    // console.log(anyobject.username);
    console.log(`Name of the user ${anyobject.username} and the price is ${anyobject.price}`)
    return
}

// handleobjects(user)
handleobjects({
    username:"Rahul Agnihotri",
    price: 400
})


const myNewArray= [2000,300,400,500]

function returnarray(getarray){
    return getarray[2]
}

// console.log(returnarray(myNewArray));
// console.log(returnarray([200,400,500,6000]));
