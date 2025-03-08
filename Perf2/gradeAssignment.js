const readline = require('readline'); // Import the 'readline' module

// Create an interface for reading input from the command line
const rl = readline.createInterface({
    input: process.stdin, // Standard input (keyboard)
    output: process.stdout // Standard output (console)
});

// Prompt the user to enter their score
rl.question('Enter your score: ', (score) => {
    // Determine the grade based on the score
    if (score >= 90) {
        console.log('Excellent'); // Output 'Excellent' if score is 90 or above
    } else if (score >= 80) {
        console.log('Good'); // Output 'Good' if score is between 80 and 89
    } else if (score >= 70) {
        console.log('Fair'); // Output 'Fair' if score is between 70 and 79
    } else {
        console.log('Needs Improvement'); // Output 'Needs Improvement' if score is below 70
    }
    rl.close(); // Close the readline interface
});
