
// This the script for implementing the Bubble Sort algorithm for sorting numbers.

// Detect environment: Node.js or browser
const isNode = typeof process !== "undefined" && process.versions != null && process.versions.node;

// Function for user input
function getUserInput(message) {
    if (isNode) {
        const promptSync = require("prompt-sync")();
        return promptSync(message);
    } else {
        return prompt(message);
    }
}

// Initialize an empty array
let numbers = [];

// Populate the array with user input
for (let i = 0; i < 10; i++) {
    let num = Number(getUserInput(`Enter number ${i + 1}:`));
    numbers.push(num);
}

// Bubble Sort function
function bubbleSort(arr) {
    let n = arr.length;
    console.log("\nStarting Bubble Sort...");

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            console.log(`Comparing ${arr[j]} and ${arr[j + 1]}`);
            
            if (arr[j] > arr[j + 1]) {
                // Swap
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                console.log(`Swapped: ${arr}`);
            }
        }
        console.log(`Pass ${i + 1}: ${arr}`);
    }

    return arr;
}

// Sort and log results
console.log("\nOriginal array:", numbers);
let sortedArray = bubbleSort(numbers);
console.log("\nSorted array:", sortedArray);
