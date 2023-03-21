// Query elements related
const btn = document.querySelector(".btn");
const offcanvas = document.querySelector(".offcanvas");
const btnClose = document.querySelector(".btn-close");
const backdrop = document.querySelector(".backdrop");

// Initial state
let hasOpen = false;

// Add event and handler
btn.addEventListener("click", showCanvas);

function showCanvas() {
  // Update state
  hasOpen = true;

  // Based on state and update UI
  if (hasOpen) {
    offcanvas.classList.add("show");
    backdrop.classList.add("show");
  }
}

btnClose.addEventListener("click", hideCanvas);
backdrop.addEventListener("click", hideCanvas);

function hideCanvas() {
  // Update state
  hasOpen = false;

  // Based on state and update UI
  if (!hasOpen) {
    offcanvas.classList.remove("show");
    backdrop.classList.remove("show");
  }
}
