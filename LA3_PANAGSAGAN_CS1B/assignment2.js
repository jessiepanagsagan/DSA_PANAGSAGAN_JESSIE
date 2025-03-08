// iterationMapping.js

const readline = require('readline');

// Create an interface to read input from the user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user to enter the Max Limit of the Loops
rl.question('Enter the Limit of the Double Loop: ', (limit) => {
    // Convert the limit to a number
    limit = parseInt(limit);

    // Double Loop to print the map of iterations
    for (let i = 0; i <= limit; i++) {
        for (let j = 0; j <= limit; j++) {
            // Add the current values of the counters i and j
            let addedValue = i + j;
            // Log the loop points and the added value per iteration
            console.log(`[${i}] [${j}] Added value is ${addedValue}`);
        }
    }

    // Close the readline interface
    rl.close();
});