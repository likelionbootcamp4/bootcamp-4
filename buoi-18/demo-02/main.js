const products = [
  {
    id: "001",
    name: "Apple iPhone 12",
    description:
      "6.1-inch Super Retina XDR display, Ceramic Shield, A14 Bionic chip",
    price: 799.99,
    quantity: 100,
    category: "Electronics",
  },
  {
    id: "002",
    name: "Samsung Galaxy S21",
    description: "6.2-inch Dynamic AMOLED 2X display, Exynos 2100, 5G",
    price: 899.99,
    quantity: 50,
    category: "Electronics",
  },
  {
    id: "003",
    name: "Amazon Echo Dot",
    description: "Smart speaker with Alexa, Charcoal",
    price: 39.99,
    quantity: 200,
    category: "Electronics",
  },
  {
    id: "004",
    name: "Sony WH-1000XM4",
    description: "Wireless noise-cancelling headphones",
    price: 349.99,
    quantity: 75,
    category: "Electronics",
  },
  {
    id: "005",
    name: "Apple iPad Pro",
    description:
      "11-inch Liquid Retina display, M1 chip, Wi-Fi + Cellular, 128GB",
    price: 949.0,
    quantity: 25,
    category: "Electronics",
  },
  {
    id: "006",
    name: "Fitbit Charge 5",
    description: "Advanced fitness and health tracker",
    price: 179.95,
    quantity: 150,
    category: "Electronics",
  },
  {
    id: "007",
    name: "Nike Air Zoom Pegasus 38",
    description: "Running shoes for men, black/white",
    price: 119.99,
    quantity: 50,
    category: "Sports",
  },
  {
    id: "008",
    name: "Adidas Ultraboost 21",
    description: "Running shoes for women, white/gold metallic",
    price: 180.0,
    quantity: 75,
    category: "Sports",
  },
  {
    id: "009",
    name: "Under Armour HOVR Phantom Connected",
    description: "Running shoes for men, black/white",
    price: 150.0,
    quantity: 100,
    category: "Sports",
  },
  {
    id: "010",
    name: "Wilson NFL MVP Football",
    description: "Official size football, brown",
    price: 24.99,
    quantity: 25,
    category: "Sports",
  },
  {
    id: "011",
    name: "Spalding NBA Street Basketball",
    description: "Official size basketball, orange",
    price: 19.99,
    quantity: 50,
    category: "Sports",
  },
  {
    id: "012",
    name: "Rawlings Heart of the Hide Glove",
    description: "12.75-inch outfield glove, right-hand throw",
    price: 299.99,
    quantity: 10,
    category: "Sports",
  },
  {
    id: "013",
    name: "Levi's 501 Original Fit Jeans",
    description: "Classic straight-leg jeans for men, dark blue",
    price: 69.5,
    quantity: 50,
    category: "Clothing",
  },
  {
    id: "014",
    name: "Madewell The Perfect Vintage Jeans",
    description: "High-rise skinny jeans for women, black",
    price: 98.0,
    quantity: 25,
    category: "Clothing",
  },
  {
    id: "015",
    name: "Patagonia Better Sweater Fleece Jacket",
    description: "Mid-weight fleece jacket for men, navy blue",
    price: 139.0,
    quantity: 20,
    category: "Clothing",
  },
  {
    id: "016",
    name: "The North Face Women's Thermoball Eco Jacket",
    description: "Packable insulated jacket for women, black",
    price: 199.0,
    quantity: 30,
    category: "Clothing",
  },
  {
    id: "017",
    name: "UGG Classic Mini II Boot",
    description: "Short boots for women, chestnut",
    price: 150.0,
    quantity: 15,
    category: "Footwear",
  },
  {
    id: "018",
    name: "Timberland 6-Inch Premium Waterproof Boot",
    description: "Men's boots, wheat nubuck",
    price: 198.0,
    quantity: 25,
    category: "Footwear",
  },
  {
    id: "019",
    name: "Vans Old Skool Sneakers",
    description: "Low-top sneakers for men, black/white",
    price: 60.0,
    quantity: 50,
    category: "Footwear",
  },
  {
    id: "020",
    name: "Converse Chuck Taylor All Star High Tops",
    description: "High-top sneakers for women, optical white",
    price: 55.0,
    quantity: 75,
    category: "Footwear",
  },
];

const electronicProducts = products.filter(function (product) {
  return ["Clothing", "Sports", "Electronics"].includes(product.category);
});

const productsOver500 = products.filter(function (product) {
  return product.price >= 500 && product.category == "Sports";
});

const totalPrice = products.reduce(function (totalPrice, product) {
  return totalPrice + product.price;
}, 0);

const totalPriceOver500 = products
  .filter(function (product) {
    return product.price >= 500;
  })
  .reduce(function (total, product) {
    return total + product.price;
  }, 0);

// const categories = [];

// for (let i = 0; i < products.length; i++) {
//   if (!categories.includes(products[i].category)) {
//     categories.push(products[i].category);
//   }
// }

// console.log(categories);

const categories = products.reduce(
  (categories, product) =>
    !categories.includes(product.category)
      ? [...categories, product.category]
      : categories,
  []
);

products.reduce(function (totalPrice, product) {
  return totalPrice + product.price * product.quantity;
}, 0);

const result = products.reduce(
  function (acc, product) {
    let newAcc = JSON.parse(JSON.stringify(acc));

    if (!acc.categories.includes(product.category)) {
      newAcc.categories.push(product.category);
    }

    if (product.price >= 500) {
      newAcc.prices.push(product.price);
    }

    return newAcc;
  },
  { categories: [], prices: [] }
);

// find
const productLower30 = products.find(function (product) {
  return product.quantity < 30;
});

console.log(productLower30);

// some, every

const checkProductStocks = products.every(function (product) {
  return product.quantity < 30 || product.quantity === 40;
});

const infoA = {
  id: "001",
  name: "Apple iPhone 12",
};

const infoB = {
  description:
    "6.1-inch Super Retina XDR display, Ceramic Shield, A14 Bionic chip",
  price: 799.99,
  quantity: 100,
  category: "Electronics",
};
const info = { ...infoA, ...infoB };

console.log(info);

let i = 100;
let isRuning = true;

while (isRuning) {
  i--;
  console.log(i);

  if (i === 0) {
    isRuning = false;
  }
}

// function double(x) {
//   return x * 2;
// }

// const newArr = arr.map(double);

// console.log(newArr);

// newArray = [2]
// newArray = [2,4]
// newArray = [2,4, 6]
// newArray = [2,4, 6, 8]

// function map2(arr, cb) {
//   const newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArray.push(cb(arr[i]));
//   }

//   return newArray;
// }

// const result2 = map2(arr, function (num) {
//   return num * 2;
// });

// console.log(result2);

// function over3(element) {
//   return element >= 3;
// }

// const result3 = arr.filter(over3);
// console.log(result3);

// newArray = []
// newArray = []
// newArray = [3]
// newArray = [3, 4]

function filter2(arr, cb) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      console.log(arr[i]);
      newArray.push(arr[i]);
    }
  }

  return newArray;
}

const arr = [1, 2, 3, 4];

function over3(element) {
  return element >= 3;
}
const result4 = filter2(arr, over3);

console.log(result4);

const total = arr.reduce(function (total, element) {
  return total + element;
}, 0);

console.log(total);

function reduce2(arr, cb, initialValue) {
  let accum = initialValue;
  for (let i = 0; i < arr.length; i++) {
    accum = cb(accum, arr[i]);
  }
  return accum;
} 


const result5 = reduce2([1,2,3,4], function (total, num) {
  return total * num
}, 1)

console.log(result5)


// accum = 1
// accum = 1
// accum = 2
// accum = 6
// accum = 24