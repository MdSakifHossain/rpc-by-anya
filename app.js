/*grabbing all the essentials*/
const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")

let userChoice
let computerChoice
let result


/*grabbing all buttons*/
const possibleChoices = document.querySelectorAll("button")
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (event) => {
  userChoice = event.target.id
  console.log(userChoice)
  userChoiceDisplay.innerHTML = userChoice
  
  generateComputerChoice()
  getResult()
  
}))

function generateComputerChoice(){
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  
  /*fix this synatx in the vscode*/
  if(randomNumber === 1){
    computerChoice = "rock"
  }
  
  if(randomNumber === 2){
  computerChoice = "paper"
  }
  
  if(randomNumber === 3){
  computerChoice = "scissor"
  }
  
  computerChoiceDisplay.innerHTML = computerChoice
}







function getResult() {
  /*same same*/
  if(computerChoice === userChoice){
    result = "~~its a draw~~"
  }
  
  
  /*rock vs.*/
  if(computerChoice === "rock" && userChoice === "paper"){
    result = "🎉You win🎉"
  }
  
  if(computerChoice === "rock" && userChoice === "scissor"){
    result = "💩You lose!💩"
  }
  
  
  /*paper vs.*/
  if(computerChoice === "paper" && userChoice === "scissor"){
  result = "🎉You win🎉"
  }
  
  if(computerChoice === "paper" && userChoice === "rock"){
  result = "💩You lose!💩"
  }
  
  
  /*scissor vs.*/
  if(computerChoice === "scissor" && userChoice === "rock"){
  result = "🎉You win🎉"
  }
  
  if(computerChoice === "scissor" && userChoice === "paper"){
  result = "💩You lose!💩"
  }
  
  resultDisplay.innerHTML = result
  
  
  
  
  
  
  
  
  
  
  /*result section er styling*/
  if(result == "💩You lose!💩"){
  document.querySelector('.result-box').className = 'result-box bg-danger text-light'
  
  }
  
  if(result == "🎉You win🎉"){
  document.querySelector('.result-box').className = 'result-box bg-primary text-light'
  
  }
  
  if(result == "~~its a draw~~"){
  document.querySelector('.result-box').className = 'result-box bg-warning text-dark'
  
  }
  
  
  
}