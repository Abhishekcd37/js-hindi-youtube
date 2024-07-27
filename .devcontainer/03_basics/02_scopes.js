/*The scope is the current context of execution in which values and expressions are
 "visible" or can be referenced. If a variable or expression is not in the current scope,
 it will not be available for use.Scopes can also be layered in a hierarchy, so that child 
scopes have access to parent scopes, but not vice versa.*/
// var c= 300
let a= 100

if(true){
let a = 10
console.log("inner",a);
const b = 20
var c = 30
}

// for( let i = 0; i< Array.length; i++){
//     const element =array[i];
// }
console.log(a);//Blocks only scope let and const declarations, but not var declarations.
// console.log(b);
// console.log(c);


function one(){
    const username= "abhishek"
    function two(){
        const website= "youtube"
        // console.log(username);
    }
    // console.log(website);
    two()
}
// child funtion can only acces the elements of parent function or scope 
// one()

if(true){
    const username ="hitrsh"
    if(username==="hitrsh"){
        const website="youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ****************************************************** intresting ******************************************
console.log(addone(7))
function addone(num){
    return num +1
}



addtwo(6)
const addtwo= function(num){//expressions
    return num+2
}
