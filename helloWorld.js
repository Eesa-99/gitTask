const userInput = prompt("Please enter some text:");
console.log("You entered: " + userInput);
console.log("You are doing a good job");
// Create a new Date object
var currentDate = new Date();

// Get the date and time components
var date = currentDate.toDateString();
var time = currentDate.toLocaleTimeString();

// Display the date and time
console.log("Date: " + date);
console.log("Time: " + time);
