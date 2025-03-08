// Prompt the user to enter a day of the week
let dayOfWeek = prompt("Enter a day of the week:");

// Convert the input to title case (e.g., "monday" -> "Monday")
dayOfWeek = dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1).toLowerCase();

// Use a switch statement to map each day to a specific task
let task;

switch (dayOfWeek) {
    case "Monday":
        task = "Finish your assignments.";
        break;
    case "Tuesday":
        task = "Attend the team meeting.";
        break;
    case "Wednesday":
        task = "Work on the project presentation.";
        break;
    case "Thursday":
        task = "Review the week's progress.";
        break;
    case "Friday":
        task = "Prepare for the weekend task list.";
        break;
    case "Saturday":
        task = "Relax and recharge.";
        break;
    case "Sunday":
        task = "Plan for the upcoming week.";
        break;
    default:
        task = "Invalid input. Please enter a valid day of the week.";
}

// Log the task for that day to the console
console.log(`Your task for ${dayOfWeek} is: ${task}`);