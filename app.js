const ComputerChoiceDisplay = document.getElementById('computer-choice')
const UserChoiceDisplay = document.getElementById('User-choice')
const resultDisplay = document.getElementById('Result')
const possiblechoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possiblechoices.foreach(possiblechoice.addEvenlistener('click', (e) => {
   userChoice = e.target.id
     userChoiceDisplay.innerHTML = userChoice
     generateComputerChoice()
     getResult()
}))

function generateComputerChoice()
  const randomNumber = math.floor(Math.random() * 3) + 1

  if (randomNumber === 1) {
    computerchoice = 'rock'
  }
  if (randomNumber === 2){
    computerchoice = 'scissors'
  }
  if (randomNumber === 3){
    computerchoice = 'paper'
  }
 ComputerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
  if (computerchoice === userChoice) {
    result = 'its a draw!'
  }
  if (computerchoice ===  'rock' && userChoice === "paper") {
    result = 'you win!'
  }
  if (computerchoice ===  'rock' && userChoice === "scissors") {
    result = 'You lose!'
  }
  if (computerchoice ===  'paper' && userChoice === "scissors") {
    result = 'You win!'
  }
  if (computerchoice ===  'paper' && userChoice === "rock") {
    result = 'You lose!'
  }
  if (computerchoice ===  'scissors' && userChoice === "rock") {
    result = 'You win!'
  }
  if (computerchoice ===  'scisssors' && userChoice === "paper") {
    result = 'You lose!'
  }
  resultDisplay.innerHTML = result
}
