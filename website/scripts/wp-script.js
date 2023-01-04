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