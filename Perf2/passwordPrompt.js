// passwordPrompt.js

const readline = require('readline');

// Set up the readline interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Set the correct password
const correctPassword = "correctPassword";

// Function to ask for the password
function askPassword() {
    rl.question("Enter your password: ", (userPassword) => {
        if (userPassword !== correctPassword) {
            console.log("Incorrect, try again.");
            askPassword(); // Ask again if the password is wrong
        } else {
            console.log("Access granted.");
            rl.close(); // Close the interface when the correct password is entered
        }
    });
}

// Start the password prompt
askPassword();