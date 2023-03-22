const heightInput = document.querySelector("#height");
const weightInput = document.querySelector("#weight");
const btn = document.querySelector("#btn");

const bmiEl = document.querySelector(".bmi");
const resultEl = document.querySelector(".result");
const form = document.querySelector("#form");

const alert = document.querySelector("#alert");
alert.style.display = "none";

// btn.addEventListener("click", calculateBMI);

// function calculateBMI(event) {
//   event.preventDefault();

//   // Get height and weight value
//   const height = heightInput.value;
//   const weight = weightInput.value;

//   // Validate input
//   if (height === "" || height === "") {
//     alert.style.display = "block";
//   } else {
//     // Calculate BMI
//     const bmi = calcBMI(height, weight);
//     bmiEl.innerHTML = bmi.toFixed(2);

//     // Get result
//     resultEl.innerHTML = getResultFromBMI(bmi);

//     // Remove alert
//     alert.style.display = "none";
//   }
// }
form.addEventListener("submit", calculateBMI);

function calculateBMI(event) {
  event.preventDefault();

  const data = new FormData(event.target);
  const { height, weight } = Object.fromEntries(data);

  // Validate input
  if (height === "" || height === "") {
    alert.style.display = "block";
  } else {
    // Calculate BMI
    const bmi = calcBMI(height, weight);
    bmiEl.innerHTML = bmi.toFixed(2);

    // Get result
    resultEl.innerHTML = getResultFromBMI(bmi);

    // Remove alert
    alert.style.display = "none";
  }
}

function calcBMI(height, weight) {
  return weight / (height / 100) ** 2;
}

function getResultFromBMI(bmi) {
  if (bmi < 18.5) {
    return "Bạn ốm quá";
  } else if (bmi < 24) {
    return "Bạn bình thường";
  } else {
    return "Bạn mập quá";
  }
}
