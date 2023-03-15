// Access to button
const increaseBtn = document.querySelector(".increase-btn");
const decreaseBtn = document.querySelector(".decrease-btn");
const h1 = document.querySelector("h1");

decreaseBtn.disabled = true;

// Attach events and handler function for button
increaseBtn.addEventListener("click", increase);
decreaseBtn.addEventListener("click", decrease);

function increase() {
  h1.textContent = Number(h1.textContent) + 1;
  if (Number(h1.textContent) > 0) {
    decreaseBtn.disabled = false;
  }
}

function decrease() {
  h1.textContent = Number(h1.textContent) - 1;
  if (Number(h1.textContent) <= 0) {
    decreaseBtn.disabled = true;
  }
}
