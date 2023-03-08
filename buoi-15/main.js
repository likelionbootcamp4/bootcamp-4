// console.log("Hello Huy");
// console.log("Hello Luu");
// console.log("Hello Trang");
// console.log("Hello Vinh");
// console.log("Hello Hoang Anh");

function sayHi(name) {
  //   console.log("Hello " + name);
  var fullName = "Nguyen " + name;

  return fullName;
}

function calcArea(width, height, pct) {
  var area = (width * height * pct) / 100;
  return area;
}

function calcSquare(x) {
  if (x < 0) {
    return "Invalid";
  } else {
    return x ** 2;
  }
}

// sayHi("Huy");
// sayHi("Luu");
// sayHi("Trang");

// console.log(sayHi("Huy"));

var areaWidth = 10;
var areaHeight = 20;

var area = calcArea(areaWidth, areaHeight, 10);

var area2Width = 30;
var area2Height = 40;

var area2 = calcArea(area2Width, area2Height);

// console.log(area);
// console.log(area2);

/**
 * Give an integer number and check whether it's even or not
 * @param {number} num A integer number
 * @returns {boolean} true if even number, otherwise false
 */
function checkEvenNumber(num) {
  return num % 2 === 0;
}
// console.log(checkEvenNumber(9));

// function findMax(a, b, c) {
//   if (a >= b && a >= c) {
//     return a;
//   } else if (b >= c) {
//     return b;
//   } else {
//     return c;
//   }
// }

// Array

var heights = [170, 180, 190];

// Access value in array
console.log(heights[1]);
console.log(heights[0]);
console.log(heights[2]);

// Modify (reassign) value in array
heights[2] = 200;

// Get length of array
console.log(heights.length);

// Add a new element to array
heights.push(150); // heights = [170, 180, 190, 150]
heights.push(160); // heights = [170, 180, 190, 150, 160]

// Remove last element from array
heights.pop(); // heights = [170, 180, 190, 150]

// Add a new element to the beginning of the array
heights.unshift(100); // heights = [100, 170, 180, 190, 150]

// Remove a first element from array
heights.shift(); // heights = [170, 180, 190, 150]

// Check value exists in array
heights.includes(100);

// const cls = "10D";
// const allClasses = ["10A", "10B", "10C", "10D"];
// if (allClasses.includes(cls)) {
//   console.log("Good");
// } else {
//   console.log("Bad");
// }

// Find index of value in array
heights.indexOf(160);
