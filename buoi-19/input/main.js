const input = document.querySelector("input");
const button = document.querySelector("button");
const text = document.querySelector(".text");

button.addEventListener("click", showText);

function showText() {
  text.textContent = input.value.toUpperCase();
}
