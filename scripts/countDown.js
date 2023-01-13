import mint from "./mint.js"
export default function timer(){
let timer = document.getElementById("timer");

// date we're counting down to
var countDownDate = new Date("Jan 13, 2023 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  timer.innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    let airDropTxt = document.getElementById("airDropTxt");
    airDropTxt.innerHTML="CLAIM YOUR AIRDROP NOW!"
    timer.innerHTML = `<button id="airdropBtn">CLAIM (On testnet until 12:00 CET)</button>`;
    let airdropBtn = document.getElementById("airdropBtn");
    airdropBtn.addEventListener("click", () => {
        mint();
    })
  }
}, 1000);
}