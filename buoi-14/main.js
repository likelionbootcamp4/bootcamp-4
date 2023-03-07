// var age = 20;
// var gender = "males";

// if (age >= 18) {
//   // Result when condition is true
//   console.log("Drive License");
// } else {
//   // Result when condition is false
//   console.log("No Drive License");
// }

// if (age >= 18) {
//   if (gender === "male") {
//     console.log("You're a man");
//   } else {
//     console.log("You're a woman");
//   }
// } else {
//   console.log("You're a child");
// }

// var gpa = 4;

// if (gpa >= 8) {
//   console.log("Excellent");
// } else {
//   if (gpa >= 6.5) {
//     console.log("Good");
//   } else {
//     if (gpa >= 5) {
//       console.log("Fair");
//     } else {
//       console.log("Poor");
//     }
//   }
// }

// var gpa = 9;
// var cla = "10B";

// if (gpa >= 8) {
//   console.log("Excellent");
// } else if (gpa >= 6.5) {
//   console.log("Good");
// } else if (gpa >= 5) {
//   console.log("Fair");
// } else {
//   console.log("Poor");
// }

// var email = "abc@gmail.com";
// var password = "1234567";

// if (email === "abc@gmail.com" && password === "1234") {
//   console.log("Login sucessfully");
// } else {
//   console.log("Login failed");
// }

// var myName = "hi";

// if (!myName.includes("u")) {
//     console.log(myName + "u");
// }

// Input math, chemistry, physics scores
// var mathScore = Number(prompt("Math score:")); // "7"
// var chemistryScore = Number(prompt("Chemistry score:")); // "8"
// var physicsScore = Number(prompt("Physics score:")); // "9"

// Calculate GPA
// var gpa = (mathScore + chemistryScore + physicsScore) / 3;

// var gpa = "9";

// Conditional statement
// if (gpa >= 8) {
//   alert("Excellent");
// } else if (gpa >= 6.5) {
//   alert("Good");
// } else if (gpa >= 5) {
//   alert("Fair");
// } else {
//   alert("Poor");
// }

// var x = 10;
// var y = "20";
// var z = 30 + x + y;

// console.log(z);

// var x = "";
// var y = Boolean(x);

// console.log(y);

// if ("") {
//   console.log("A");
// } else {
//   console.log("B");
// }

var today = "Sun";

if (today === "Mon") {
  console.log("HTML");
} else if (today === "Tue") {
  console.log("CSS");
} else if (today === "Wed" || today === "Sat" || today === "Sun") {
  console.log("JS");
} else if (today === "Thu") {
  console.log("React");
} else if (today === "Fri") {
  console.log("Yoga");
} else {
  console.log("Wrong");
}

// Switch statement

// var today = "Sun";
// switch (today) {
//   case "Mon":
//     console.log("HTML");
//     break;
//   case "Tue":
//     console.log("CSS");
//     break;
//   case "Wed":
//   case "Sat":
//   case "Sun":
//     console.log("JS");
//     break;
//   case "Thu":
//     console.log("React");
//     break;
//   case "Fri":
//     console.log("Yoga");
//     break;
//   default:
//     console.log("Wrong");
// }

var age = 10;
var result;

if (age >= 18) {
  result = "You are adult";
} else {
  result = "You are child";
}

console.log(result);

var result = age >= 18 ? "You are adult" : "You are child";
console.log(result);
