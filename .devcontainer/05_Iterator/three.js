// for of 
// The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object.
//  Iterable objects include instances of built-ins such as Array, String, TypedArray, Map, Set, NodeList 
//  (and other DOM collections),as well as the arguments object,generators produced by generator functions,
//   and user-defined iterables
const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
    
// }

const greetings = "Hello Everyone"

for (const greet of greetings) {
    // console.log(greet);   
}
// for of does not work for object because object doesn't get iterated
// maps-The Map object holds key-value pairs and remembers the original insertion order of the keys. 

const map = new Map()
map.set('a', 'India')
map.set('b', 'Australia')
map.set('c', 'china')
map.set('a', 'India')

// console.log(map);

for (const [key,value] of map) {
    console.log(key, ':-', value);
    
}

const myobject ={
    'game1': 'spiderman',
    'game2' : "NFS"
}

for (const key of myobject) {
    console.log(key);
    
}