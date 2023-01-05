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
