/*
// //I.1 Convert the following Conditional Statement into Conditional Ternary:

// Define the variables
let age = 20; // Example age
let genAverage = 85; // Example general average
let subject = "DSA"; // Example subject
let grade = 90; // Example grade

// a
console.log(age >= 18 && genAverage >= 83 ?
    "You may enter College, under BSCS Program" :
    "Both conditions may have not met and not allowed to enroll");

// b
console.log(subject === "DSA" && grade >= 80 ?
    "You may enroll Application Development" :
    subject === "Math101" && grade <= 80 ?
    "You may enroll Calculus" :
    "You have to enroll DSA and pass to enroll AD and Math101 and pass to enroll Calculus");

// I.2 Convert the following Conditional Ternary into Regular Conditional Statement:
// a
(age >= 18) ? console.log("You may now Register as a Voter for Elections 2025"):
    console.log("You are too young to register as a voter for Elections 2025");
// b
(genAverage >= 85) ? console.log("You may enroll in all Course Programs"):
    (genAverage < 85 && genAverage > 82) ?
    console.log("You may enroll in any Course Program except in CTE, SCJE, CHS") :
    console.log("You may enroll in any Course Program except CTE, SCJE, CHS, CCS");

//I.3 Convert the following for loop into while loop:
let fname = "Jose Cruz";
let i = 0; // Initialize i for the while loop.

while (i < fname.length) { // Condition for the loop to continue.
    let c = 2 + i;
    let nLengthCounterTwo = fname.length - c;
    console.log(fname);
    console.log("Iterations Name was Printed: " + i);
    i++; // Increment i at the end of each iteration.
}
*/

/*
// II. Code Snippetv Complete the code snippet down below.The purpose of the source code is to register in the 
// platform with Username and Password, then allows the newly registered user to Login.const readline = require('readline');const readline = require('readline').createInterface({let regUsername = prompt("Register your Username");
let username = prompt("Register your Username"); // Variable to hold the username
let password = prompt("Register your passcode"); // Variable to hold the password
let rePassword = prompt("Re-enter your passcode"); // Variable to hold the re-entered password

if (password === rePassword) { // Compare the Registered Password and Re-entered Password
    alert("Congratulations, you have successfully registered!"); // Pop-up to congratulate the user
    let loginUsername = prompt("Username: "); // Variable to hold the username on login

    if (loginUsername === username) { // Compare the registered username and entered username on login
        let loginPassword = prompt("Password: "); // Variable to hold the encoded password on login

        if (loginPassword === password) { // Compare the registered password and entered password on login
            alert("Welcome to DSA, " + loginUsername); // Pop-up to congratulate user on successful login
        } else {
            alert("Incorrect Password, Re-run the code!"); // Pop-up for incorrect password
        }
    } else {
        alert("Incorrect Username, Re-run the code!"); // Pop-up for incorrect username
    }
} else {
    alert("Password does not Match, Re-run the code!"); // Pop-up for non-matching passwords
}
*/
// III. Coding Problem Submit the source code.Create a simple program that follow the specifications below:

// Simple program for user input and conditional statements

// iterationMapping.js (Updated for Node.js)

// Import the readline module
const readline = require('readline');

// Create an interface to read input from the user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to ask questions and handle user input
rl.question('Enter your name: ', (name) => {
    rl.question('Enter your address: ', (address) => {
        rl.question('Enter your age: ', (age) => {
            rl.question('Enter your class role (Officer, Student, Teacher): ', (classRole) => {
                rl.question('Enter your course (BSCS, BSM, BAEL): ', (course) => {
                    // Convert age to integer
                    age = parseInt(age);

                    // Conditional statement to detect the course
                    if (course === "BSCS") {
                        // Segregation based on class role for BSCS
                        if (classRole === "Officer") {
                            console.log("You are an Officer in BSCS.");
                        } else if (classRole === "Student") {
                            console.log("You are a Student in BSCS.");
                        } else if (classRole === "Teacher") {
                            console.log("You are a Teacher in BSCS.");
                        } else {
                            console.log("Your class role in BSCS is not recognized. Default role: Student.");
                            classRole = "Student"; // Default to Student if unrecognized role
                        }
                    } else if (course === "BSM") {
                        // Segregation based on class role for BSM
                        if (classRole === "Officer") {
                            console.log("You are an Officer in BSM.");
                        } else if (classRole === "Student") {
                            console.log("You are a Student in BSM.");
                        } else if (classRole === "Teacher") {
                            console.log("You are a Teacher in BSM.");
                        } else {
                            console.log("Your class role in BSM is not recognized. Default role: Student.");
                            classRole = "Student"; // Default to Student if unrecognized role
                        }
                    } else if (course === "BAEL") {
                        // Segregation based on class role for BAEL
                        if (classRole === "Officer") {
                            console.log("You are an Officer in BAEL.");
                        } else if (classRole === "Student") {
                            console.log("You are a Student in BAEL.");
                        } else if (classRole === "Teacher") {
                            console.log("You are a Teacher in BAEL.");
                        } else {
                            console.log("Your class role in BAEL is not recognized. Default role: Student.");
                            classRole = "Student"; // Default to Student if unrecognized role
                        }
                    } else {
                        // Fallback if the course is not recognized
                        console.log("Course not recognized. Default course: BSCS.");
                        course = "BSCS"; // Default to BSCS if unrecognized course
                    }

                    // Loop based on age and class role
                    let iterations = Math.floor(age / 4); // 1/4 of the age (rounded down)
                    for (let i = 0; i < iterations; i++) {
                        console.log(name); // Print the user's name in each iteration
                    }

                    // Fallback message in case no iterations occur
                    if (iterations === 0) {
                        console.log("No iterations to display because your age is below 4.");
                    }

                    // Close the readline interface
                    rl.close();
                });
            });
        });
    });
});