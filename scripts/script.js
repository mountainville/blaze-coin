// Function for animation of website. Observes if object is displayed or not
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      entry.target.classList.remove("translateX");
      entry.target.classList.remove("translateY");
      setTimeout(() => {
        entry.target.classList.remove("slowTransition");
      }, 3000);
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
