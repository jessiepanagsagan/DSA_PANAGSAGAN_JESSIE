// Concatenate two arrays using concat()
let arr1 = ["Cecile", "Lone"];
let arr2 = ["Emil", "Tobias", "Linus"];
console.log(arr1, arr2);  // Output: ["Cecile", "Lone", "Emil", "Tobias", "Linus"]

// Add an element "Kiwi" to the fruits array using push()
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log(fruits);  // Output: ["Banana", "Orange", "Apple", "Mango", "Kiwi"]

// Add two numbers 4 and 5 to the beginning of the array using unshift()
let array1 = [1, 2, 3];
array1.unshift(4, 5);
console.log(array1);  // Output: [4, 5, 1, 2, 3]

//adding and removing of properties 
let items= {}; //EMPTY OBJECT 

// Sort the fruits array alphabetically using sort()
fruits.sort();
console.log(fruits);  // Output: ["Apple", "Banana", "Mango", "Orange"]

// Create a new array containing a portion of the fruits array using slice()
let slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits);  // Output: ["Banana", "Mango"]

// Use splice() to insert and remove elements in the months array
let months = ["January", "February", "March", "April", "May"];
months.splice(2, 1, "March", "June");
console.log(months);  // Output: ["January", "February", "March", "June", "April", "May"]
