function calcTotal() {
  console.log(this);
  return this.price * this.quantity;
}

var sp1 = {
  name: "Apple Watch",
  price: 300,
  quantity: 10,
  "company-name": "Apple",
  calculateTotal: calcTotal,
};

var sp2 = {
  name: "Airpod 2",
  price: 200,
  quantity: 20,
  "company-name": "Apple",
};

var person1 = {
  name: "Huy",
  age: 26,
  calcBirth: function calcBirth() {
    return 2023 - this.age;
  },
  scores: [10, 9, 8],
  family: [
    {
      name: "A",
      age: 40,
      role: "Mom",
    },
    {
      name: "B",
      age: 42,
      role: "Dad",
    },
  ],
  school: {
    name: "ABC",
    address: "1A",
    class: "10A",
    teachers: [
      {
        name: "D",
        major: "Math",
      },
      {
        name: "E",
        major: "Physics",
      },
    ],
  },
};

// Access to value
console.log(sp1["name"]);
console.log(sp1["company-name"]);
console.log(sp1.price);

console.log(sp1.calculateTotal());

// console.log(person1.calcBirth());
console.log(calcTotal());

console.log(person1.scores[0]);

console.log(person1.family[0].age);

console.log(person1.school.teachers[0].major);
person1.school.teachers[0].major = "Chemistry";

console.log(person1);

// Loop

var odds = [];

for (var i = 0; i < 11; i++) {
  if (i % 2 !== 0) {
    odds.push(i);
  }
}

console.log(odds);

var cart = ["Apple", "Lemon", "Peach", "Strawberry"];

function logItemInCart(cart) {
  for (var i = 0; i < cart.length; i++) {
    console.log(cart[i]);
  }
}
logItemInCart(cart);

var cart = ["Apple", "Lemon", "Peach", "Strawberry", "BlackBerry"];

logItemInCart(cart);

function includeItem(array, item) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return true;
    }
  }
  return false;
}

console.log(includeItem([1, 2, 3], "2")); // true
console.log(includeItem([1, 2, 3], 4)); // false

function getIndexOf(array, item) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
  return -1;
}

function getIndexesOf(array, item) {
  var indexes = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] === item) {
      indexes.push(i);
    }
  }
  return indexes;
}

console.log(getIndexOf([1, 2, 3, 2, 4], 0)); // 1
console.log(getIndexesOf([1, 2, 3, 2, 4], 0)); // 1

var heights = [170, 180, 160];

// Input: Array of heights
// Output: Max height (Number)

var height1 = 170;
var height2 = 180;
var height3 = 160;

// n so sanh = 1 + 2 + ... + m -1

// 3 lan so sanh (3ng)
// So sanh 1 voi 2
// So sanh 1 voi 3
// So sanh 2 voi 3

// 6 lan so sanh (4 ng)
// So sanh 1 voi 2
// So sanh 1 voi 3
// So sanh 1 voi 4
// So sanh 2 voi 3
// So sanh 2 voi 4
// So sanh 3 voi 4

// 10 lan so sanh ( 5ng)
// So sanh 1 voi 2
// So sanh 1 voi 3
// So sanh 1 voi 4
// So sanh 1 voi 5
// So sanh 2 voi 3
// So sanh 2 voi 4
// So sanh 2 voi 5
// So sanh 3 voi 4
// So sanh 3 voi 5
// So sanh 4 voi 5

// 15 lan so sanh (6ng)
// So sanh 1 voi 2
// So sanh 1 voi 3
// So sanh 1 voi 4
// So sanh 1 voi 5
// So sanh 1 voi 6
// So sanh 2 voi 3
// So sanh 2 voi 4
// So sanh 2 voi 5
// So sanh 2 voi 6
// So sanh 3 voi 4
// So sanh 3 voi 5
// So sanh 3 voi 6
// So sanh 4 voi 5
// So sanh 4 voi 6
// So sanh 5 voi 6

var height1 = -170;
var height2 = -180;
var height3 = -160;

var ruler = 0;

if (ruler < height1) {
  ruler = height1;
}

if (ruler < height2) {
  ruler = height2;
}

if (ruler < height3) {
  ruler = height3;
}

console.log(ruler);

var heights = [170, 180, 160, 150, 160, 170, 175];

var rulers = heights[0];

for (var i = 0; i < heights.length; i++) {
  if (ruler < heights[i]) {
    ruler = heights[i];
  }
}

console.log(ruler);
