// singleton

// const tinderUser = new Object()
const tinderUser = {}// non singleton object

tinderUser.id = "123nvj"
tinderUser.name ="Samm"
tinderUser.isLoggedIn= false
const regularUser={
    email: "user@gmail.com",
    fullname:{
        userfullname:{
            firstname: "Abhishek",
            lastnaem: "Dwivedi"
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname["firstname"]);

const Obj1 = {1: "a", 2:"b"}
const obj2 ={3: "c", 4: "d"}
const obj4 ={5: "e", 6: "f"}


// const obj3= Object.assign({},Obj1,obj2,obj4)//Copy the values of all of the enumerable own properties from one or more source objects to a target object.
// Returns the target object
// console.log(obj3);


const obj3 = {...Obj1, ...obj2}
// console.log(obj3);


const user= [
    {
        id:1,
        email: "hitesh@gmail.com"
    },
    {
        id:1,
        email: "hitesh@gmail.com"
    },
    {
        id:1,
        email: "hitesh@gmail.com"
    },
    {
        id:1,
        email: "hitesh@gmail.com"
    },
]



user[1].email

console.log(tinderUser);
console.log(Object.keys(tinderUser));// consider the kes of the object
console.log(Object.values(tinderUser));//only consider the values stored in keys
console.log(Object.entries(tinderUser));// used to find out each value stored inside the object 
console.log(tinderUser.hasOwnProperty('id'));//Determines whether an object has a property with the specified name.
// console.log(tinderUser);