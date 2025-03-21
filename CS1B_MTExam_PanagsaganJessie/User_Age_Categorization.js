// Collect the user's age using prompt()

const user_age = parseInt(prompt("Enter your age:"));

if (user_age < 5) {
    console.log("You are a Toddler."); //if the age is less than 5 mean that the user is a "Toddler"
} else if (user_age >= 5 && user_age <= 12)
    console.log("You are a Child."); // if the age is 5 - 12  the user is a Child

else if (user_age >= 13 && user_age <= 19) {
    console.log("You are a Teenager."); //if the age of the user is 13 - 19 the user is "Teenager"
} else if (user_age >= 20 && user_age <= 35) {
    console.log("You are a Young Adult."); //if the age of the user is 20 - 35 the user is a "Young Adult"
} else if (user_age >= 36 && user_age <= 60) {
    console.log("You are Middle-Aged."); //if the age of the user is 36 - 60 the user is a "Middle-Aged"
} else if (user_age > 60) {
    console.log("You are a Senior.") //if the age of the user is 60  the user is already a "Senior"
} else {
    console.log("Invalid age."); //they print this ("Invalid age.") if the user input a invalid age
}