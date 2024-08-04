// for
const array=[23,4,5,6,7]
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if(element == 5){
        // console.log("5 is best numbers");
        
    }
    console.log(element);
    
    
}

// console.log(element);

for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop is ${i}`);
    for (let j = 1; j < 10; j++) {
        // const element = array[j];
        // console.log(`Inner loop ${j} and inner loop ${i}`);
        console.log(i+'*'+j+'='+i*j);
        
        
    }
    
}

const myarr = ["flash", "Shaktiman", "wolverine"]
console.log(myarr.length);
for (let index = 0; index < myarr.length; index++) {
    const element = myarr[index];
    console.log(element);
    
}

// break and continue

// for (let i = 1; i <= 20; i++) {
//     const element = i;
//     if(element == 5){
//         console.log("5 detected");
//         break//exit from the loop 
//     }
//     console.log(`Print ${element}`);
    
    
// }


for (let i = 1; i <= 20; i++) {
    const element = i;
    if(element == 5){
        console.log("5 detected");
        continue
    }
    console.log(`Print ${element}`);
}
