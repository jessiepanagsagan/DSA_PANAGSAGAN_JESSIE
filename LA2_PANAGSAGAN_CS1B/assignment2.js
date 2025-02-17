// CS1B_JPPanagsagan_C1-A1.js

// a = 25, b = 20, c = 12, d = "15", and e = 15 are initialized. Note that d is a string ("15"), but it's used in arithmetic operations, so it will be converted to a number when necessary.
// Declare and initialize variables and constant
let a = 25;   // Variable a is assigned 25
let b = 20;   // Variable b is assigned 20
let c = 12;   // Variable c is assigned 12
let d = "15"; // Variable d is a string "15"
const e = 15; // Constant e is assigned 15

// a. Display the sum of the declared variables [a, b, c, d] and constant [e] combined
// Note: Since d is a string, we'll need to convert it to a number using Number(d) to add it to other numbers
let sum = a + b + c + Number(d) + e;
console.log("Sum of all variables and constant: " + sum);

// b. Compare the values of variable d and constant e using relational operators
console.log("d > e: " + (Number(d) > e));  // Check if d (converted to number) is greater than e
console.log("d < e: " + (Number(d) < e));  // Check if d (converted to number) is less than e
console.log("d >= e: " + (Number(d) >= e)); // Check if d (converted to number) is greater than or equal to e
console.log("d <= e: " + (Number(d) <= e)); // Check if d (converted to number) is less than or equal to e
console.log("d === e: " + (Number(d) === e)); // Check if d (converted to number) is strictly equal to e


// 1. Subtract all the values of the declared variables.
// Variables a, b, c, d and the constant e are initialized with values. The key point is that d is initially a string ("15"), but in operations where it's used with other numbers, it will be converted into a number using Number(d).
let subtraction = a - b - c - Number(d) - e; 
console.log("Subtraction of all values: " + subtraction);

// 2. Multiply the values of variable a and c, divided by constant e.
// We sum all the variables (a, b, c, d) and the constant e. Since d is a string, we convert it into a number using Number(d) so the addition works properly.
let multiplicationDivision = (a * c) / e;
console.log("Multiplication of a and c, divided by e: " + multiplicationDivision);

// 3. Display the exponent value of constant e raised to the power of variable c.
// We compare d (converted to a number) with e using various relational operators (>, <, >=, <=, ===), and display whether d is greater than, less than, greater than or equal to, less than or equal to, or strictly equal to e.
let exponentiation = Math.pow(e, c);
console.log("e raised to the power of c: " + exponentiation);

// 4. Reassign the value of c to 3, then display the result.
c = 3;
console.log("New value of c after reassigning: " + c); // The program prints the results of each task (sum, comparisons, operations) using console.log()
