const choices = ["rock", "paper", "scissor"];
const images = document.querySelectorAll(".choices img");
const resultDiv = document.querySelector(".result");

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
    return "You win";
  }
  return "You lose";
}

images.forEach((image) => {
  image.addEventListener("click", () => {
    const playerChoice = image.id;
    const computerChoice = GetComputerChoice();

    const winnerMessage = DetermineWinner(playerChoice, computerChoice);

    resultDiv.innerHTML = `
            <p>You chose: <strong>${playerChoice}</strong></p>
            <p>Computer chose: <strong>${computerChoice}</strong></p>
            <p>${winnerMessage}</p>
      `;
  });
});
