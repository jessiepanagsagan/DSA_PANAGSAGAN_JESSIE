/*CS1B_PERF1_DSA_PANAGSAGAN_JESSIE_P. 

//falsy value -> 0, "", undefined, null, NaN
const num1= Boolean (147)
console.log(num1); //"147"
console.log(typeof num1); //string
*/

let values = [0, "", null, undefined, NaN, false];

values.forEach(value => {
  if (!value) {
    console.log(`${value} is falsy!`);
  } else {
    console.log(`${value} is truthy!`);
  }
});


console.log("Hello World!!!!!!")

