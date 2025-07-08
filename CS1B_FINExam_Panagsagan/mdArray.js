
// This is a multi-dimensional array where each sub-array contains [name, age, location].

// Detect environment: Node.js or browser
const isNode = typeof process !== "undefined" && process.versions != null && process.versions.node;

// Function to get user input
function getUserInput(message, defaultValue) {
    if (isNode) {
        const promptSync = require("prompt-sync")();
        return promptSync(message);
    } else {
        return prompt(message, defaultValue);
    }
}

// Prompt user to input names, ages, and locations
let namesInput = getUserInput("Enter names separated by commas:", "Genevieve, Juan, Luna, Gabriel, Elise");
let agesInput = getUserInput("Enter ages separated by commas:", "24, 65, 21, 5, 9");
let locationsInput = getUserInput("Enter locations separated by commas:", "Manila, Cebu, Davao, Baguio, Iloilo");

// Convert input into arrays
let names = namesInput.split(",").map(name => name.trim());
let ages = agesInput.split(",").map(age => Number(age.trim()));
let locations = locationsInput.split(",").map(location => location.trim());

// Validate arrays length
if (names.length !== ages.length || names.length !== locations.length) {
    console.error("Error: The number of names, ages, and locations must match.");
} else {
    // Restructure into [name, age, location] triples
    let structuredArray = names.map((name, index) => [name, ages[index], locations[index]]);

    // Log the restructured array per line
    console.log("Restructured multi-dimensional array:");
    structuredArray.forEach(person => console.log(person));
}
