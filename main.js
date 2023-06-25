"use strict";
let playerSelection = prompt("Rock, paper, scissors?").toLowerCase();
// console.log(playerSelection);
let computerSelection = null;
let result = "";

function getComputerChoice() {
  let arr = ["Rock", "Paper", "Scissors"];
  let random = Math.floor(Math.random() * arr.length);
  return (computerSelection = arr[random].toLowerCase());
}

function makeComparison(player, computer) {
  if (player === computer) {
    return (result = "It's a draw");
  } else if (player === "rock" && computer === "scissors") {
    return (result = "You win!");
  } else if (player === "paper" && computer === "rock") {
    return (result = "You win!");
  } else if (player === "scissors" && computer === "paper") {
    return (result = "You win!");
  } else {
    return (result = "Computer wins!");
  }
}

function playRound() {
  getComputerChoice();
  makeComparison(playerSelection, computerSelection);
  console.log(playerSelection);
  console.log(computerSelection);
  console.log(result);
  alert(result);
}


let rounds = 0;
let playerWins = 0;
let computerWins = 0;
function game() {
  playRound();
}

game();
