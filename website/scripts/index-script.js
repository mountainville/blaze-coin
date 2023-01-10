import timer from "./countDown.js";

// Function that enables for clicking the nav buttons
const navButtons = document.querySelectorAll("li");

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("selected");
  });
});

// Function that displays footer when the user scrolls to the bottom
window.onscroll = function () {
  if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
    document.querySelector("footer").style.display = "block";
  }
};
timer();

// let dynamicZoom = document.querySelectorAll("dynamicZoom")
// .addEventListener('mousemove', function(){

// });
