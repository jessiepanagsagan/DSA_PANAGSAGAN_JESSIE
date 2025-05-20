const customerHash = new Map(); // Customer hash table
let count = 1;

function addCustomer() {
    let name = prompt("Enter customer name:");
    if (name) {
        customerHash.set(count, name);
        alert(`${name} added to queue. Your number is ${count}`);
        count++;
    }
}

function serviceCustomer() {
    if (customerHash.size === 0) {
        alert("No customers in queue!");
        return;
    }
    let number = parseInt(prompt("Enter number to service:"));
    if (customerHash.has(number)) {
        let customer = customerHash.get(number);
        alert(`Now servicing: ${customer}`);
        customerHash.delete(number);
        console.log("Updated Hashed Table:", Array.from(customerHash.entries()));
    } else {
        alert("Invalid number!");
    }
}

// Test by calling addCustomer() and serviceCustomer() functions
