const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}))

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1 // or you can use possibleChoices.length

  if (randomNumber === 1) {
    computerChoice = <h3>'rock'</h3>
  }
  if (randomNumber === 2) {
    computerChoice = <h3>'scissors'</h3>
  }
  if (randomNumber === 3) {
    computerChoice = <h3>'paper'</h3>
  }
  computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
  if (computerChoice === userChoice) {
    result = <h3>'its a draw!'</h3>
  }
  if (computerChoice === 'rock' && userChoice === "paper") {
    result = <h3>'you win!'</h3>
  }
  if (computerChoice === 'rock' && userChoice === "scissors") {
    result = <h3>'you lost!'</h3>
  }
  if (computerChoice === 'paper' && userChoice === "scissors") {
    result = <h3>'you win!'</h3>
  }
  if (computerChoice === 'paper' && userChoice === "rock") {
    result = <h3>'you lose!'</h3>
  }
  if (computerChoice === 'scissors' && userChoice === "rock") {
    result = <h3>'you win!'</h3>
  }
  if (computerChoice === 'scissors' && userChoice === "paper") {
    result = <h3>'you lose!'</h3>
  }
  resultDisplay.innerHTML = result
}
