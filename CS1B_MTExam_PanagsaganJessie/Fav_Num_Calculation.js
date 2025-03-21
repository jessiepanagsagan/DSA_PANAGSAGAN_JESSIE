// Declare a variable that will hold the favNumber
const theFavNumber = 18; // this is my favNumber

let guess; // this will Initialize the variable to hold the user's guess

while (guess !== theFavNumber) { //lets use the while loop to ask the guess until they get right

    guess = parseInt(prompt("Guess the favorite number:")); // this is to Prompt the user to guess the number

    // This will check if the guess is too high, low, or correct
    if (guess > theFavNumber) { // If the guess is greater than the favorite number
        console.log("Your guess is too high."); //this will informed user their guess is too high
    } else if (guess < theFavNumber) { // If the guess is less than the favorite number
        console.log("Your guess is too low."); // Inform the user their guess is too low
    } else if (guess === theFavNumber) {// If the guess is exactly equal to the favorite number
        console.log("Congratulations! You guessed the correct number.");// Congratulate the user for guessing correctly
    } else { // If none of the above conditions are true (e.g., invalid input)
        console.log("Invalid input. Please enter a number.");// Inform the user their input is invalid
}
    }