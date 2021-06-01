// Conditionals
// If Statement
/* if (condition1) {
  //Statement to run if condition1 is true
} else if (condition2) {
  //Statement to run if condition2 is true
} else {
  //Statement to run if all other if statements are false
} */

let hour = 10;

if (hour > 6 && hour <= 12) console.log("Good Morning");
else if (hour < 12 && hour >= 18) console.log("Good Afternoon");
else console.log("Good Evening");

// Switch Case
//initialize this variable with ‘guest’ or ‘moderator’
let role;

switch (role) {
  case "guest":
    console.log("Guest User");
    break;
  case "moderator":
    console.log("Moderator User");
  default:
    console.log("Unknown User");
}
