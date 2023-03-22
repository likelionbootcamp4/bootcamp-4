const nameInput = document.querySelector("#name");
const heading = document.querySelector("h1");

let name = "";

nameInput.addEventListener("input", updateHeading);

function updateHeading() {
  // Update state
  name = nameInput.value;

  // Update UI
  heading.innerHTML = name;
}