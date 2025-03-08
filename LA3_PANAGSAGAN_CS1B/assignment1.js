// 97 and above: Your equivalent Grade is “1.00” Excellent
// 94 to 96: Your equivalent Grade is “1.25” Excellent
// 91 to 93: Your equivalent Grade is “1.50” Above Average
// 88 to 90: Your equivalent Grade is “1.75” Above Average
// 85 to 87: Your equivalent Grade is “2.00” Average
// 82 to 84: Your equivalent Grade is “2.25” Average
// 79 to 81: Your equivalent Grade is “2.50” Below Average
// 76 to 78: Your equivalent Grade is “2.75” Below Average
// 75: Your equivalent Grade is “3.00” Below Average
// 72 to 74: Your equivalent Grade is “4.00” Poor
// 71 and below: Your equivalent Grade is “5.00” Poor

// gradeAssignment_v2.js

/// gradeAssignment_v2.js

const readline = require('readline');

// Create an interface to read input from the user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user to enter their score
rl.question('Enter your score: ', (score) => {
    // Convert the score to a floating point number
    score = parseFloat(score);

    // Using conditional ternary statements to assign grades
    let grade = (score >= 97) ? "1.00 Excellent" :
        (score >= 94) ? "1.25 Excellent" :
        (score >= 91) ? "1.50 Above Average" :
        (score >= 88) ? "1.75 Above Average" :
        (score >= 85) ? "2.00 Average" :
        (score >= 82) ? "2.25 Average" :
        (score >= 79) ? "2.50 Below Average" :
        (score >= 76) ? "2.75 Below Average" :
        (score === 75) ? "3.00 Below Average" :
        (score >= 72) ? "4.00 Poor" :
        "5.00 Poor"; // For scores below 71

    // Additional if..else if..else statements for final remarks
    let remarks = "";
    if (score >= 90) {
        remarks = "HIGH PASS, Candidate for Cum Laude";
    } else if (score >= 80) {
        remarks = "AVERAGE PASS";
    } else if (score >= 75) {
        remarks = "LOW PASS";
    } else {
        remarks = "FAILED, Needs Improvement";
    }

    // Display the results
    console.log(`Your grade is: ${grade}`);
    console.log(`Final Remarks: ${remarks}`);

    // Close the readline interface
    rl.close();
});