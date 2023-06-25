'use strict';
let playerSelection = prompt("Rock, paper, scissors?");
let computerSelection = null;
function getComputerChoice() {
    let arr = ["Rock","Paper","Scissors"];
    let random = Math.floor(Math.random() * arr.length);
    return computerSelection = random;
} 


getComputerChoice();
console.log(computerSelection);