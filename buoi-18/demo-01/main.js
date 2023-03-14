// const myName = "Huy";

// console.log(myName);

// // let myName = "Vinh";
// myName = "Vinh";

// console.log(myName);

// let age = 20;

// let age; // undefined

// console.log(age);

// age = 20;
// console.log(age);

// TypeError
// const age; // undefined
// age = 20

// const age = 20;
// let x = 10;

// Destructuring array
const arr = [1, 2];

// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

const [x, y] = arr;

// Desctructuring object
// const product = {
//   id: 1,
//   name: "Apple Watch",
//   price: 120,
//   quantity: 10,
// };

// const name = product.name;
// const price = product.price;
// const quantity = product.quantity;

// const { price, quantity, name: myName } = product;

// console.log(myName, price, quantity);

// Spread operator (...arr)
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// arr = [1,2,3,4,5,6]

// const arr3 = [];

// for (let i = 0; i < arr1.length; i++) {
//   arr3.push(arr1[i]);
// }

// for (let i = 0; i < arr2.length; i++) {
//   arr3.push(arr2[i]);
// }

// console.log(arr3);

// arr1 = [1,2,3] -> ...arr1 = 1,2,3
// arr2 = [4,5,6] -> ...arr2 = 4,5,6
// [...arr1,...arr2]

// ...arr1  // 1,2,3
// ...arr2 // 4,5,6

// const arr3 = [...arr1, ...arr2];
// console.log(arr3);

// let arr3 = [];
// for (let i = 0; i < 11; i++) {
//   if (i % 2 !== 0) {
//     arr3 = [...arr3, i];
//   }
// }

// []
// [0]
// [0,1]    -> arr3 = [0,1]
// [0,1,2]  -> arr3 = [...arr3, 2]
// [0,1,2,3] -> arr3 = [...arr3, 3]
// ...

// Spread operator -> ...[1,2,3] -> 1,2,3

// Rest operator
function sum(x, ...nums) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }

  return total - x;
}

console.log(sum(10, 20, 30, 40, 50));

const product = {
  id: 1,
  name: "Apple Watch",
  price: 120,
  quantity: 10,
};

console.log(Object.keys(product));
console.log(Object.values(product));
console.log(Object.entries(product));

// Function

// Declaration function
// function sum(a, b) {
//   return a + b;
// }

// Expression function (Anonymous function)
const sum2 = function (a, b) {
  return a + b;
};

// console.log(sum2(10, 20));

// Arrow function
// const sum3 = (a, b) => ({ numA: a, numB: b });

// function sayHi(name) {
//   return "Hello " + name;
// }

// const sayHi2 = function (name) {};

// const sayHi3 = (name) => "Hello " + name;

// console.log(sayHi3("Huy"));

// {
//     numA: 10,
//     numB: 20,
//

function sayHi(name) {
  return "Hi " + (name || "Huy");
}

function sayHi2(name = "Huy") {
  return "Hi " + name;
}

console.log(sayHi());

function square(a = 5) {
  return a ** 2;
}

console.log(square(20));

function doSomethingWithName(name, func) {
  func(name);
}

function log(message) {
  console.log(message);
}

function sayHi(name) {
  console.log("Hi " + name);
}

doSomethingWithName("Vinh", sayHi);

function doSomethingWithAandB(a, b, func) {
  return func(a, b);
}

const result = doSomethingWithAandB(10, 20, substract);
console.log(result);

function sum(x, y) {
  return x + y;
}

function substract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

// Array methods
const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr4[0]; // 1
arr4[arr4.length - 1]; // 10

// 'at' method
console.log(arr4.at(1));

// forEach
for (let i = 0; i < arr4.length; i++) {
  console.log(arr4[i]);
}

function log(element, index, array) {
  console.log(element, index, array);
}

arr4.forEach(log);

const members = ["Huy", "Luu", "Trinh", "Phuong"];

const result1 = members.forEach(function (member, index) {
  console.log(`Hi ${member} at ${index}`);
});

const price = "12$"; // 200
console.log(price.slice(0, -1));

// Data transformations: map, filter, reduce
const prices = ["200$", "300$", "400$", "500$", "600$"];

// Transform to array of numbers
// Map

const numbers = [];
for (let i = 0; i < prices.length; i++) {
  numbers.push(Number(prices[i].slice(0, -1)));
}

// filter
// filter >= 400
const filteredNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] >= 400) {
    filteredNumbers.push(numbers[i]);
  }
}

// Reduce
// Calculate total
let total = 0;
for (let i = 0; i < filteredNumbers.length; i++) {
  total += filteredNumbers[i];
}

// Map for transforming to array of numbers

let total2 = 0;

// for (let i = 0; i < filteredIntPrices.length; i++) {
//   total2 = total2 + filteredIntPrices[i];
// }

console.log(total2);

// filteredIntPrices.reduce(function (total2, price) {
//   return total2 + price;
// }, 0);

const nums = [1, 2, 3, 4, 5];

const result4 = nums.reduce(function (result, num) {
  return result * num;
}, 1);

console.log(result4);

// Tranform to numbers
const intPrices = prices.map(function (price) {
  return Number(price.slice(0, -1));
});

// Filter
const filteredIntPrices = intPrices.filter(function (price) {
  return price >= 400;
});

// Reduce to total
const totalPrice = filteredIntPrices.reduce(function (total, price) {
  return total + price;
}, 0);

const finalResult = prices
  .map(function (price) {
    return Number(price.slice(0, -1));
  })
  .filter(function (price) {
    return price >= 400;
  })
  .reduce(function (total, price) {
    return total + price;
  }, 0);


// some, every
