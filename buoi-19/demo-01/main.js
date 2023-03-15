const button = document.querySelector("button");

// Attach events and handler

// button.addEventListener("click", changeColor);

// function changeColor() {
//   // Access to h1
//   const h1 = document.querySelector("h1");

//   // Change color h1
//   h1.style.color = "red";
// }

// button.addEventListener("click", function () {
//   alert("Hello");
// });

// Khi button duoc click, thi function showAlert duoc goi
// button: clicked, showAlert()

const h1 = document.querySelector("h1");

button.addEventListener("click", toggleText);

function toggleText() {
  //   if (h1.style.display !== "none") {
  //     h1.style.display = "none";
  //   } else {
  //     h1.style.display = "block";
  //   }
  //   h1.style.display = h1.style.display !== "none" ? "none" : "block";
  //   if (h1.classList.contains("hidden")) {
  //     h1.classList.remove("hidden");
  //   } else {
  //     h1.classList.add("hidden");
  //   }
  h1.classList.toggle("hidden");
}
