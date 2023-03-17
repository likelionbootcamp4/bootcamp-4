/*
- Outline:
    - Interactive components:
        - list of  accordion-button (click)

    - Actions:
        - Click accordion-button -> accordion-collapse open

    - States: 
        - Collapse is open or not


- Implementation:
    - Query elements related:
        - list of  accordion-button
        - list of accordion-collapse 
    - Define initial state:
        - hasOpen: false
    - Add events listeners to interactive components:
        - Add "click" event to list of  accordion-button
    - Based on action to write state logic
        - Click accordion-button
            - hasOpen = !hasOpen
    - Based on state to update UI:
        - Show or hide accordion-collapse based on hasOpen state

- Problems:
    - Out of items when state increases or decrease

- Improvements:
    - Codebase: Refactor code
    - UI Logic:
        - Add dot indicators
*/

// Query elements related
const accordionButtonList = document.querySelectorAll(".accordion-button");

const accordionCollapseList = document.querySelectorAll(".accordion-collapse");

accordionButtonList.forEach(function (btn, index) {
  // Define initial state
  let hasOpen = false;

  // Add events listeners to interactive components
  btn.addEventListener("click", function () {
    // State logic
    hasOpen = !hasOpen;

    // Update UI
    accordionCollapseList[index].style.display = hasOpen ? "block" : "none";
  });
});
