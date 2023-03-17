/*
- Outline:
    - Interactive components:
        - carousel-control-prev (click)
        - carousel-control-next (click)

    - Actions:
        - Click carousel-control-prev -> Move to the previous carousel-item
        - Click carousel-control-next -> Move to the next carousel-item

    - States: 
        - postion (image change -> carousel-item change -> index change)


- Implementation:
    - Query elements related:
        - carousel-control-prev, carousel-control-next
        - List of carousel-item
    - Define initial state:
        - postion: 0
    - Add events listeners to interactive components:
        - Add "click" event to carousel-control-prev, carousel-control-next
    - Based on action to write state logic
        - Click carousel-control-prev
            - postion > 0 -> postion--
        - Click carousel-control-next
            - postion < carousel-item.length - 1 -> positon++
    - Based on state to update UI:
        - Hide all carousel-item (display: none)
        - Show item at position state (display: block)

- Problems:
    - Out of items when state increases or decrease

- Improvements:
    - Codebase: Refactor code
    - UI Logic:
        - Add dot indicators
*/

// Query elements related
const carouselControlPrev = document.querySelector(".carousel-control-prev");

const carouselControlNext = document.querySelector(".carousel-control-next");

const carouselItemList = document.querySelectorAll(".carousel-item");

// Define initial state
let position = 0;

// Add events listeners to interactive components
carouselControlPrev.addEventListener("click", movePrevItem);
carouselControlNext.addEventListener("click", moveNextItem);

// Based on action to write state logic
function movePrevItem() {
  if (position > 0) {
    // State logic
    position--;

    // Update UI
    updateUI(position);
  }
}

function moveNextItem() {
  if (position < carouselItemList.length - 1) {
    // State logic
    position++;

    // Update UI
    updateUI(position);
  }
}

function updateUI(position) {
  //  Hide all carousel-item
  carouselItemList.forEach(
    (carouselItem) => (carouselItem.style.display = "none")
  );

  // Show item at position state
  carouselItemList[position].style.display = "block";
}
