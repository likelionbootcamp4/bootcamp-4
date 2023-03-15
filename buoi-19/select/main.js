const h1 = document.querySelector("h1");
const btnList = document.querySelectorAll("button");

btnList.forEach(function (btn) {
  function changeColor() {
    h1.style.color = btn.dataset.color;
  }
  btn.addEventListener("click", changeColor);
});
