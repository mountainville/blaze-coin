import borrow from "./lendingModules/borrow.js";
import lend from "./lendingModules/lend.js";
import repay from "./lendingModules/repay.js";

let borrowContainer = document.getElementById("borrow-container");

// Definition of buttons
const borrowButton = document.getElementById('lending-borrow-button');
const lendButton = document.getElementById('lending-lend-button');
const repayButton = document.getElementById('lending-repay-button');

const executeBorrowButton = document.getElementById('execute-borrow-button');
const executeLendButton = document.getElementById('execute-lend-button');
const executeRepayButton = document.getElementById('execute-repay-button');

let authorizeBtn = document.getElementById('authorizeBtn');
// loan terms for Lend Page
let liquidityTerm = document.getElementById("liquidityTerm");
let lend1M = document.getElementById("lend1M");
let lend3M = document.getElementById("lend3M");
let lend6M = document.getElementById("lend6M");
let lend12M = document.getElementById("lend12M");
let lendBtnArr = [lend1M, lend3M, lend6M, lend12M];

// Function: change interface to "Borrow" page
borrowButton.addEventListener('click', () => {
    borrowContainer.innerHTML= borrow();
    authorizeBtn = document.getElementById('authorizeBtn');
    loadAuthBtn();
});

// FUnction: change interface to "Lend" page
lendButton.addEventListener('click', () => {
    //console.log("clicked lend");

    borrowContainer.innerHTML= lend();
    lend1M = document.getElementById("lend1M");
    lend3M = document.getElementById("lend3M");
    lend6M = document.getElementById("lend6M");
    lend12M = document.getElementById("lend12M");
    lendBtnArr = [lend1M, lend3M, lend6M, lend12M];
    addLendTermListeners();
    authorizeBtn = document.getElementById('authorizeBtn');
    loadAuthBtn();
});

// Function: change interface to "Repay" page
repayButton.addEventListener('click', () => {
    borrowContainer.innerHTML = repay();
});

    function loadAuthBtn () {
        authorizeBtn.addEventListener('click', () =>  {
            loadWeb3();
        })
    };

    async function loadWeb3() {
        if (window.ethereum) {
          window.web3 = new Web3(window.ethereum);
          window.ethereum.enable();
        }
    };

function addLendTermListeners () {
    //console.log("starting function");

    for (let i = 0; i < lendBtnArr.length; i++) {
        //console.log("looping");

        lendBtnArr[i].addEventListener('click', () => {
            //console.log("adding listener");

            for (let j = 0; j < lendBtnArr.length; j++) {
                if (j === i) {
                    //console.log("changing color for select");
                    lendBtnArr[j].style.backgroundColor =  "#618c94";
                }
                else {
                    //console.log("changing color...");
                    lendBtnArr[j].style.backgroundColor = "#334a4e";
                }
            }
            return;
        })
    }
}



