const buttons = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".tab-content");

function activateTab(thisButton) {
  // Remove "active" class for previously clicked elements
  buttons.forEach((button) => {
    button.classList.remove("active");
  });
  contents.forEach((content) => {
    content.classList.remove("active");
  });

  // Add "active" class for the element fired the event listener
  const thisContent = document.getElementById(thisButton.innerHTML);
  thisButton.classList.add("active");
  thisContent.classList.add("active");
}

// Add event listeners for all button elements
buttons.forEach((button) => {
  button.addEventListener("mouseover", () => activateTab(button));
});

// Display the default tab
document.getElementById("default").click();
