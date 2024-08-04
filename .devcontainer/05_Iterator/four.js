const myobject={
    js: "javascript",
    cpp : "C++",
    rb : "Ruby",
    swift : "swift by apple"
}

for (const key in myobject) {
    // console.log(`${key} and ${ myobject[key]}`);
   
}

const programming = [  "javascript", "C++", "Ruby"]// in case of array for in will only print the key values that is there position
// to print values we have to write it as arr[key]

for (const key in programming) {
  console.log(programming[key]);
  
}