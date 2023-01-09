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

// Function for animation of website. Observes if object is displayed or not
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("ix-show");
      entry.target.classList.remove("ix-translateX");
      entry.target.classList.remove("ix-translateY");
    } else {
      entry.target.classList.remove("ix-show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".ix-hidden");
hiddenElements.forEach((el) => observer.observe(el));
