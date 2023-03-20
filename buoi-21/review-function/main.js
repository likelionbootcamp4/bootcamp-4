// Define function
function sum(a, b) {
  return a + b;
}

function calcBMI(height, weight) {
  const bmi = weight / height ** 2;
  return bmi;
}

function getResultFromBMI(bmi) {
  if (bmi <= 0) {
    return "BMI của bạn không hợp lệ";
  } else if (bmi < 18.5) {
    return "Bạn hơi bị ốm đó";
  } else if (bmi < 24) {
    return "Chuẩn v bro";
  } else {
    return "Béo qúa trời";
  }
}

// - Bạn nhập vào chiều cao và cân nặng
// const yourHeight = 1.8;
// const yourWeight = 75;

// - Tính toán chỉ số BMI
// const yourBMI = calcBMI(yourHeight, yourWeight);

// - Kiểm tra xem bạn thuộc loại nào và show ra kết qủa
// const result = getResultFromBMI(yourBMI);

function countLetter(message, letter) {
  let count = 0;
  for (let i = 0; i < message.length; i++) {
    if (message[i] === letter) {
      count = count + 1;
    }
  }

  return count;
}

function calcArea(w, h, hasCity) {
  if (hasCity) {
    return w * h + 10;
  }
  return w * h;
}

function include(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return true;
    }
  }
  return false;
}

const hasOrange = include(["Apple", "Lemon", "Orange"], "Watermelong");

console.log(hasOrange);

// Declaration function
function calcBMI(height, weight) {
  const bmi = weight / height ** 2;
  return bmi;
}

// Expression
// let calcBMI = function (height, weight) {
//   const bmi = weight / height ** 2;
//   return bmi;
// };

// function calc(num1, num2, calcFunc) {
//   return calcFunc(num1, num2);
// }

// function sum(a, b) {
//   return a + b;
// }

// function subtract(a, b) {
//   return a - b;
// }

// function compute(a, b) {
//   return 3 * a + 10 * b + 2;
// }

// console.log(calc(10, 20, compute)); // 30

function doSomethingWithMessage(message, func) {
  return func(message);
}

function doSTWithLettersInMessage(message, func) {
  for (let i = 0; i < message.length; i++) {
    func(message[i]);
  }
}

function log(text) {
  console.log(text);
}

function addA(text) {
  return text + "a";
}

function logAllLetters(text) {
  for (var i = 0; i < text.length; i++) {
    console.log(text[i]);
  }
}

// doSomethingWithMessage("Hello", log);
// doSomethingWithMessage("Hello", logAllLetters);

// doSTWithLettersInMessage("Hello", log);

function doSomethingWithArray(array, func) {
  return func(array);
}

// ["a", "b", "c"].forEach(log);

function log(item) {
  console.log(item);
}

// forEach(["a", "b", "c"], log);

const newArray = [1, 2, 3].map(double);

function double(x) {
  return x * 2;
}

console.log(newArray);

function map(array, func) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(func(array[i]));
  }
  return newArray;
}

const newArray2 = map([1, 2, 3], function (x) {
  return x * 2;
});

console.log(newArray2);

const filterArray = [1, 2, 3, 4, 5].filter((x) => x >= 3);
console.log(filterArray);

function over3(x) {
  return x >= 3;
}

function filter(array, func) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (func(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

const filterArray2 = filter([1, 2, 3, 4, 5], over3);

console.log(filterArray2);

const totalArray = [1, 2, 3, 4, 5].reduce(function (result, x) {
  return result * x;
}, 1);

console.log(totalArray);

function reduce(array, func, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < array.length; i++) {
    accumulator = func(accumulator, array[i]);
  }
  return accumulator;
}

const result = reduce(
  [1, 2, 3, 4],
  function (total, x) {
    return total * x;
  },
  1
);

console.log(result);

[5, 6, 7, 8, 9].forEach(function (element, index, array) {
  console.log(array);
});

function forEach(array, func) {
  for (let i = 0; i < array.length; i++) {
    log(array[i], i, array);
  }
}

forEach([5, 6, 7, 8, 9], function log(element) {
  console.log(element);
});

const arr = [1, 2, 3];

const filterArray4 = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] >= 2) {
    filterArray4.push(arr[i]);
  }
}

let total = 0;
for (let i = 0; i < filterArray4.length; i++) {
  total += filterArray4[i];
}
console.log(total);

const total2 = arr.reduce((total, element) => total + element, 0);

const filterArray3 = arr
  .filter(function (element) {
    return element >= 2;
  })
  .reduce((total, element) => total + element, 0);

console.log(filterArray3);
