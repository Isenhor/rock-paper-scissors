"use strict";
const buttons = document.querySelectorAll(".btn");
let playerChoice;
let computerChoice;
let playerWins = document.querySelector(".playerScore");
let computerWins = document.querySelector(".computerScore");
let result;

function game() {
  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      playerChoice = e.target.id;
    });
  });
  getComputerChoice();
  makeComparison();

  alert(result);
}

function getComputerChoice() {
  let arr = ["Rock", "Paper", "Scissors"];
  let random = Math.floor(Math.random() * arr.length);
  return (computerChoice = arr[random].toLowerCase());
}

function makeComparison() {
  if (playerChoice === computerChoice) {
    return (result = "It's a draw");
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    playerWins.innerText = parseInt(playerWins.innerText) + 1;
    return (result = "You win!");
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    playerWins.innerText = parseInt(playerWins.innerText) + 1;
    return (result = "You win!");
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    playerWins.innerText = parseInt(playerWins.innerText) + 1;
    return (result = "You win!");
  } else {
    computerWins.innerText = parseInt(computerWins.innerText) + 1;
    return (result = "Computer wins!");
  }
}

buttons.forEach((btn) => {
  btn.addEventListener("click", game);
});
