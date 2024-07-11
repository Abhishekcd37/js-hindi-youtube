// JavaScript Date objects represent a single moment in time in a platform-independent format.
// There are various methods that allow you to interact with the timestamp stored in the date:

// You can interact with the timestamp value directly using the getTime() and setTime() methods.
// The valueOf() and [@@toPrimitive]() (when passed "number") methods — which are automatically called in number coercion — return the timestamp, causing Date objects to behave like their timestamps when used in number contexts.
// All static methods (Date.now(), Date.parse(), and Date.UTC()) return timestamps instead of Date objects.
// The Date() constructor can be called with a timestamp as the only argument.

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());//Returns a date as a string value.
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toISOString());//Returns a date as a string value in ISO format
// console.log(myDate.toJSON());//Used by the JSON.stringify method to enable the transformation of an object's 
//                              //data for JavaScript Object Notation (JSON) serialization.
// console.log(myDate.toLocaleString());


// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23,5,3)
// let myCreatedDate = new Date("2024-04-13")
let myCreatedDate = new Date("12-03-2024")
// console.log(myCreatedDate.toLocaleString());


let myTimestamp = Date.now()
// console.log(myTimestamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000))

let newDate= new Date();
// console.log(newDate);
// console.log(newDate.getDay())
// console.log(newDate.getMonth())
// console.log(newDate.getFullYear())
// console.log(newDate.getHours())

console.log(newDate.toLocaleString('default', {
    weekday: "long"
}))



