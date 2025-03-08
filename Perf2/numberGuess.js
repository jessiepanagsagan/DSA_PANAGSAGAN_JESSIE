// numberGuess.js

const readline = require('readline');

// Set up the readline interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Generate a random number between 1 and 10
const targetNumber = Math.floor(Math.random() * 10) + 1;

// Function to ask the user for their guess
function askGuess() {
    rl.question('Guess a number between 1 and 10: ', (userGuess) => {
        userGuess = parseInt(userGuess); // Convert the input to a number

        if (userGuess > targetNumber) {
            console.log('Too high!');
            askGuess(); // Ask again if the guess is wrong
        } else if (userGuess < targetNumber) {
            console.log('Too low!');
            askGuess(); // Ask again if the guess is wrong
        } else {
            console.log('Correct!');
            rl.close(); // End the game when the correct number is guessed
        }
    });
}

// Start the game
askGuess();