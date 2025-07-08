// array_operations.js
// This script performs operations on single-dimensional arrays containing numbers and names.

// Check if running in a browser or Node.js
const isBrowser = typeof window !== "undefined";

// Function to get user input
function getUserInput(message, defaultValue) {
    if (isBrowser) {
        return prompt(message, defaultValue);
    } else {
        const promptSync = require("prompt-sync")();
        return promptSync(message);
    }
}

// Prompt user to input numbers as a comma-separated string
let numbersInput = getUserInput("Enter numbers separated by commas (e.g., 24,65,21,5,9,32,42,80,57):", "24,65,21,5,9,32,42,80,57");

// Convert the input string into an array of numbers
let numbers = numbersInput.split(",").map(num => Number(num.trim()));

// Prompt user to input names as a comma-separated string
let namesInput = getUserInput("Enter names separated by commas (e.g., Zenvo, Erica, Jordie, Alicia, Redon):", "Zenvo, Erica, Jordie, Alicia, Redon");

// Convert the input string into an array of names
let names = namesInput.split(",").map(name => name.trim());

// Log the original arrays
console.log("Original numbers array:", numbers);
console.log("Original names array:", names);

// Merge both arrays into a single array
let mergedArray = [...numbers, ...names];
console.log("Merged array:", mergedArray);

// Sort numbers numerically in reverse order
let sortedNumbersDesc = [...numbers].sort((a, b) => b - a);
console.log("Numbers sorted in descending order:", sortedNumbersDesc);

// Sort names alphabetically
let sortedNamesAsc = [...names].sort((a, b) => a.localeCompare(b));
console.log("Names sorted alphabetically:", sortedNamesAsc);
