"use strict";
let playerSelection = null;

let computerSelection = null;
let result = "";

function getPlayerSelection() {
  playerSelection = prompt("Rock, paper, scissors?").toLowerCase();
}
console.log(playerSelection);
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

let rounds = 0;
let playerWins = 0;
let computerWins = 0;

function playRound() {
  getPlayerSelection();
  getComputerChoice();
  makeComparison(playerSelection, computerSelection);
  alert(result);
}

function game() {
  for (let i = 0; rounds < 5; i++) {
    playRound();
    if (result === "It's a draw") {
      rounds += 1;
    } else if (result === "You win!") {
      playerWins++;
      rounds += 1;
    } else {
      computerWins++;
      rounds += 1;
    }
  }
  alert(
    `You played ${rounds} rounds. You won ${playerWins} times and computer won ${computerWins} times.`
  );
}

game();
