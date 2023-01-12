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

// tar bort och lägger tll innehåll när man har musen över

const team = document.querySelectorAll(".tp-profileBox");
team.forEach((entry) =>
  entry.addEventListener("mouseenter", () => {
    entry.classList.add("extraInfo");
  })
);
team.forEach((entry) =>
  entry.addEventListener("mouseleave", () => {
    entry.classList.remove("extraInfo");
  })
);
