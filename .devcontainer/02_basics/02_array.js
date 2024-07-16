const marvel_heros= ["thor" ,"Ironman", "spiderman"]
const dc_heros= ["Flash" ,"superman", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);// here we will observe it will take the complete array as element 
// console.log(marvel_heros[3][1]);

// console.log(marvel_heros.concat(dc_heros));

const all_new_heros =[ ...marvel_heros, ...dc_heros]//... is a spead operator used for array concatnation without using 
// conacat function it links the elements of both the arrays togher under a singlr array 

// console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,8,[9,10]]]

const real_another =another_array.flat(Infinity)//Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(real_another);


console.log(Array.isArray("abhishek"));//checks wether it is an array or not 
console.log(Array.from("abhishek"));//converts to arrays from string using from function
console.log(Array.from({name:"abhishek"}));//returns the empty output important for project 

let score =100
let score2 =200
let score3 =300

console.log(Array.of(score,score2, score3));//to convert the value in arraya specially multiple values

