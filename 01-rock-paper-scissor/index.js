const choices = ["rock", "paper", "scissor"];
const images = document.querySelectorAll(".choices img");
const resultDiv = document.querySelector(".result");
const playerScoreSpan = document.getElementById("playerScore");
const computerScoreSpan = document.getElementById("computerScore");

let playerScore = 0;
let computerScore = 0;

function GetComputerChoice() {
  const randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
}

function DetermineWinner(playerChoice, compChoice) {
  if (playerChoice === compChoice) {
    return "It's a tie.";
  }

  if (
    (playerChoice === "rock" && compChoice === "scissor") ||
    (playerChoice === "paper" && compChoice === "rock") ||
    (playerChoice === "scissor" && compChoice === "paper")
  ) {
    playerScore++;
    return "You win";
  }
  computerScore++;
  return "You lose";
}

images.forEach((image) => {
  image.addEventListener("click", () => {
    const playerChoice = image.id;
    const computerChoice = GetComputerChoice();

    const winnerMessage = DetermineWinner(playerChoice, computerChoice);

    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;
    resultDiv.innerHTML = `
            <p>You chose: <strong>${playerChoice}</strong></p>
            <p>Computer chose: <strong>${computerChoice}</strong></p>
            <p>${winnerMessage}</p>
      `;
  });
});
