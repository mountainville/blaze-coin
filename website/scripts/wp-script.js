const textDivs = document.getElementsByClassName("wp-textDiv");
const hThrees = document.getElementsByTagName("h3");

console.log(textDivs);
console.log(hThrees);

for (let i = 0; i < textDivs.length; i++) {
    textDivs[i].setAttribute('id', `textDiv${i}`);
    
    hThrees[i].addEventListener('click', () => {
        const textDiv = document.getElementById(`textDiv${i}`);
        if (textDiv.style.display === "block") {
            textDiv.style.display = "none";
        } else {
            textDiv.style.display = "block";
        }
    });
}

// Function that enables for clicking the nav buttons
const navButtons = document.querySelectorAll("li");

navButtons.forEach((button) => {
    button.addEventListener("click", () => {
        button.classList.toggle("selected");
    });
});

// Function that displays footer when the user scrolls to the bottom
window.onscroll = function() {
    if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
      document.querySelector("footer").style.display = "block";
    }
  };