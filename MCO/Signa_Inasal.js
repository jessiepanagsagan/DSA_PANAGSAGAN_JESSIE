const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Predefined passcode
const correctPasscode = "0101999";

// Menu structure with Tower Café items
const menu = {
    Sandwich: [
        { name: "Grilled Chicken Sandwich", stock: 50, price: 100 },
        { name: "Cheeseburger", stock: 30, price: 95 },
        { name: "Tuna Sandwich", stock: 50, price: 100 },
        { name: "Ham and Egg Sandwich", stock: 50, price: 95 },
        { name: "Bulgogi Korean Egg Sandwich", stock: 80, price: 350 }
    ],
    Sides: [
        { name: "Fries", stock: 100, price: 90 },
        { name: "Penne Arrabiata", stock: 50, price: 175 },
        { name: "Spaghetti with Meatballs", stock: 50, price: 150 },
        { name: "Japchae", stock: 30, price: 160 },
        { name: "Creamy Carbonara", stock: 40, price: 180 }
    ],
    Drinks: [
        { name: "Signature Coffee", stock: 20, price: 100 },
        { name: "Espresso", stock: 15, price: 120 },
        { name: "Cappuccino", stock: 10, price: 110 },
        { name: "Iced Latte", stock: 18, price: 115 },
        { name: "Special Smoothie", stock: 8, price: 130 }
    ],
    Desserts: [
        { name: "Cheesecake", stock: 12, price: 100 },
        { name: "Chocolate Brownie", stock: 10, price: 150 },
        { name: "Tiramisu", stock: 8, price: 120 },
        { name: "Carrot Cake", stock: 5, price: 180 },
        { name: "Fruit Tart", stock: 7, price: 140 }
    ]
};

let cart = [];

function login(callback) {
    rl.question("Enter cashier name: ", (cashier) => {
        if (!cashier) {
            console.log("Login failed. Please enter a valid name.");
            process.exit();
        }

        rl.question("Enter passcode: ", (passcode) => {
            if (passcode !== correctPasscode) {
                console.log("Incorrect passcode. Access denied.");
                process.exit();
            }

            console.log(`Welcome to Tower Café, ${cashier}!`);
            callback();
        });
    });
}

function addItemToCart(itemName, quantity) {
    for (let category in menu) {
        let item = menu[category].find(i => i.name.toLowerCase() === itemName.toLowerCase());
        if (item && item.stock >= quantity) {
            cart.push({ name: itemName, quantity, price: item.price * quantity });
            item.stock -= quantity;
            console.log(`${quantity} x ${itemName} added to cart.`);
            return;
        }
    }
    console.log("Item not available or insufficient stock.");
}

function removeItemFromCart(itemName, quantity) {
    let index = cart.findIndex(i => i.name.toLowerCase() === itemName.toLowerCase());
    if (index !== -1 && cart[index].quantity >= quantity) {
        cart[index].quantity -= quantity;
        cart[index].price -= cart[index].price / cart[index].quantity * quantity;

        if (cart[index].quantity === 0) {
            cart.splice(index, 1);
        }
        console.log(`${quantity} x ${itemName} removed from cart.`);
        return;
    }
    console.log("Item not found in cart or invalid quantity.");
}

function printReceipt(callback) {
    console.log("\nReceipt:");
    let totalPrice = 0;
    cart.forEach(item => {
        console.log(`${item.quantity} x ${item.name} - ₱${item.price}`);
        totalPrice += item.price;
    });
    console.log(`Total: ₱${totalPrice}`);

    rl.question(`Total bill is ₱${totalPrice}. Enter payment amount: `, (payment) => {
        payment = Number(payment);
        if (payment >= totalPrice) {
            console.log(`Thank you for choosing Tower Café! Your change is ₱${payment - totalPrice}`);
        } else {
            console.log("Insufficient payment. Transaction canceled.");
        }
        callback();
    });
}

function startOrdering() {
    rl.question("\nChoose action: add, remove, receipt, cancel: ", (action) => {
        action = action.toLowerCase();
        if (action === "add") {
            rl.question("Enter item name: ", (itemName) => {
                rl.question("Enter quantity: ", (quantity) => {
                    addItemToCart(itemName, Number(quantity));
                    startOrdering();
                });
            });
        } else if (action === "remove") {
            rl.question("Enter item name: ", (itemName) => {
                rl.question("Enter quantity: ", (quantity) => {
                    removeItemFromCart(itemName, Number(quantity));
                    startOrdering();
                });
            });
        } else if (action === "receipt") {
            printReceipt(startOrdering);
        } else if (action === "cancel") {
            console.log("Order canceled. Thank you!");
            rl.close();
        } else {
            console.log("Invalid action. Please try again.");
            startOrdering();
        }
    });
}

login(startOrdering);
