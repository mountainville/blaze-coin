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

// Definition of pages
const borrowPage = document.getElementById('borrow-container');
const lendPage = document.getElementById('lend-container');
const repayPage = document.getElementById('repay-container');

// Definition of inputs
const password = document.getElementById('password');
const username = document.getElementById('username');

// Function: change interface to "Borrow" page
borrowButton.addEventListener('click', () => {
    borrowContainer.innerHTML= borrow();
    // borrowPage.style.display = 'block';
    // lendPage.style.display = 'none';
    // repayPage.style.display = 'none';
});

// FUnction: change interface to "Lend" page
lendButton.addEventListener('click', () => {
    borrowContainer.innerHTML= lend();
});

// Function: change interface to "Repay" page
repayButton.addEventListener('click', () => {
    borrowContainer.innerHTML = repay();
    //borrowPage.style.display = 'none';
    //lendPage.style.display = 'none';
    //repayPage.style.display = 'block';
});

// Function that verifies credentials
const users = [
    {id: 1, username: 'user1', password: 'password1'},
    {id: 2, username: 'user2', password: 'password2'},
    {id: 3, username: 'user3', password: 'password3'},
    {id: 4, username: 'user4', password: 'password4'},
    {id: 5, username: 'user5', password: 'password5'} 
];

function verifyCredentials() {
    for (let i = 0; i < users.length; i++) {
        if (username.value === users[i].username && password.value === users[i].password) {
            alert('Credentials are Correct!');
            return true;
        }           
    }
    alert('Credentials are Incorrect!');
    return false;
};

// Function that verifies wallet connection
    const wallet = async () => {
        if (typeof window.ethereum !== 'undefined') {
            alert('Wallet verified!');
            return true;
        } 
    }    

// Function that executes Borrow when conditions are met
executeBorrowButton.addEventListener('click', () => {
    if (verifyCredentials() || verifyWalletConnection()) {
        alert('Transaction executed!');
        return true;
    }   
    alert('Transaction not executed!');
    return false;
});




// Function that executes Lend when conditions are met

// Function that executes Repay when conditions are met


