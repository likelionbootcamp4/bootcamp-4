document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".btn");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  let hasOpen = false;

  btn.addEventListener("click", toggleDropdown);

  function toggleDropdown() {
    hasOpen = !hasOpen;

    if (hasOpen) {
      document.addEventListener("click", hideDropdown);
      dropdownMenu.classList.add("show");
    } else {
      document.removeEventListener("click", hideDropdown);
      dropdownMenu.classList.remove("show");
    }
  }

  function hideDropdown(event) {
    if (!event.target.matches(".btn")) {
      hasOpen = false;

      if (!hasOpen) {
        document.removeEventListener("click", hideDropdown);
        dropdownMenu.classList.remove("show");
      }
    }
  }
});
