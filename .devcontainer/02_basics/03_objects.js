// singleton
// Object.create

// Object literals

const mySym = Symbol("key1")

const Jsuser = {// within an object we can declare any type 
    name: "abhishek",//in this name or any keyword act as key and is of type string 
    age: 18,
    [mySym]: "mykey1",// symbols are always declared in [] inside the object so that type of the key remains symbol instead of string
    "Sports academy":"cricket",
    Location: "jaipur",
    email: "abhi@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(Jsuser.name); mostly we are going to access with . operator 
// console.log(Jsuser["email"]);
// console.log(Jsuser["Sports academy"]);
// console.log(Jsuser[mySym]);
// console.log(typeof Jsuser[mySym]);

Jsuser.email = "hitesh@gmail.com"
//Object.freeze(Jsuser)// here the changes will not be made to keys of the object 
Jsuser.email = "ramesh@gmail.com"
// console.log(Jsuser);

Jsuser.greetings = function(){
    console.log("hello everyone")
}

Jsuser.greetingsTwo = function(){
    console.log(`Hello Js User ${this.name}`)
}
console.log(Jsuser.greetings());
console.log(Jsuser.greetingsTwo());




