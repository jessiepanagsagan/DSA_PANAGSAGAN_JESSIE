const queue = []; // Array to store customer names in the queue

function addCustomer() {
    let name = prompt("Enter customer name:"); // Ask customer for their name
    if (name) {
        queue.push(name); // Add the name to the queue
        alert(`${name} added to queue. Your number is ${queue.length}`); // Display assigned number
    }
}

function serviceCustomer() {
    if (queue.length === 0) { // If no customers in queue, display alert
        alert("No customers in queue!");
        return;
    }

    let number = parseInt(prompt("Enter number to service:")); // Ask for a customer number
    if (number > 0 && number <= queue.length) { // Validate the entered number
        let customer = queue[number - 1]; // Retrieve the customer’s name
        alert(`Now servicing: ${customer}`); // Notify the customer is being serviced
        queue.splice(number - 1, 1); // Remove the customer from the queue
        console.log("Updated Queue:", queue); // Display updated queue in console
    } else {
        alert("Invalid number!"); // Show error if invalid input is given
    }
}

// Functions `addCustomer()` and `serviceCustomer()` should be called interactively.
