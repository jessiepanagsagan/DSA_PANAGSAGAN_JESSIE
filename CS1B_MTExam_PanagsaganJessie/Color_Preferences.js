// Create an array to store three colors
let colorPreferences = [];

for (let i = 0; i < 3; i++) { // By using a for loop in to prompt the user to input your favColors in three times.
    let color = prompt(`Enter color ${i + 1}:`); // This Prompt to input a color, by indicating which color input in the 1st, 2nd, 3rd color.
    colorPreferences.push(color); // Add an input color to the 'colorPreferences' array.
    console.log(`Updated color list: ${colorPreferences}`); // This will Print out the updated array or showing all the colors entered.
}

// Adding one more color using the push() method
let newColor = prompt("Enter an additional color to add:"); // this will Prompt the user to add one more color.
colorPreferences.push(newColor); // Add a new color to the end of the 'colorPreferences' in the array.
console.log(`Final updated color list: ${colorPreferences}`); //this will Print the final updated array and they display all the collected colors from the user.