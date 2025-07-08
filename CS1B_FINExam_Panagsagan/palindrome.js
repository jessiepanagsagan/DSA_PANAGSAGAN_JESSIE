
// Function to reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");
}

// Function to check if a word is a palindrome
function isPalindrome(word) {
    return word === reverseString(word);
}

// Get user input
const isBrowser = typeof window !== "undefined";
const promptSync = isBrowser ? window.prompt : require("prompt-sync")();

let word1 = promptSync("Enter first word:", "RACECAR");
let word2 = promptSync("Enter second word:", "RECORDER");

// Log results
console.log(`Original Word 1: ${word1}, Reversed: ${reverseString(word1)}, Is Palindrome? ${isPalindrome(word1)}`);
console.log(`Original Word 2: ${word2}, Reversed: ${reverseString(word2)}, Is Palindrome? ${isPalindrome(word2)}`);
