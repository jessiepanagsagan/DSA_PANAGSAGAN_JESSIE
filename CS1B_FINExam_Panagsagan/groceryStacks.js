
// This is for emulates the stack for grocery items using push, pop, and peek functions.

const isNode = typeof process !== "undefined" && process.versions != null && process.versions.node;

// Function for user input
function getUserInput(message) {
    if (isNode) {
        const promptSync = require("prompt-sync")();
        return promptSync(message);
    } else {
        return prompt(message);
    }
}

// Initialize an empty stack
let groceryStack = [];

// Function to peek at the top item of the stack
function peek() {
    return groceryStack.length > 0 ? groceryStack[groceryStack.length - 1] : "Stack is empty";
}

// Function to push an item onto the stack
function push(item) {
    groceryStack.push(item);
    console.log(`Added "${item}" to the stack.`);
    console.log("Current stack:", groceryStack);
    console.log("Top item:", peek());
}

// Function to pop the last item from the stack
function pop() {
    if (groceryStack.length > 0) {
        let removedItem = groceryStack.pop();
        console.log(`Removed "${removedItem}" from the stack.`);
    } else {
        console.log("Stack is empty, nothing to pop.");
    }
    console.log("Current stack:", groceryStack);
    console.log("Top item:", peek());
}

// Prompt user to input five grocery items
for (let i = 0; i < 5; i++) {
    let item = getUserInput(`Enter grocery item ${i + 1}:`);
    push(item);
}

// Perform some stack operations
pop();
pop();
console.log("Final stack state:", groceryStack);
