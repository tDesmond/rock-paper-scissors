
const CHOICES = ["ROCK", "PAPER", "SCISSORS"]

const PLAYER_CHOICE = document.querySelector(".player-choice")
const RESULT_TEXT = document.querySelector(".result")

const ROCK_BUTTON = document.querySelector("#rock-btn")
const PAPER_BUTTON = document.querySelector("#paper-btn")
const SCISSORS_BUTTON = document.querySelector("#scissors-btn")
const PLAY_BUTTON = document.querySelector("#play-btn")

const PLAYER_SCORE = document.querySelector(".player-score")
const COMPUTER_SCORE = document.querySelector(".computer-score")


let computerSelection, playerSelection, playerScore=0, computerScore=0

function radomInt(){
    return Math.floor(Math.random()*3)
}
function getComputerChoice(){
    return CHOICES[radomInt()]
}

function checkWinner(computer, player){
    if (computer == player) return "T'is a draw!"
    if (computer == "ROCK"){
        if (player == "SCISSORS") {
            computerScore += 1
            return "You Lose!, ROCK beats SCISSORS"
        }
        playerScore += 1
        return "You Win!, PAPER beats ROCK"
    }
    if (computer == "PAPER"){
        if (player == "ROCK") {
            computerScore += 1
            return "You Lose!, PAPER beats ROCK"
        }
        playerScore += 1
        return "You Win!, SCISSORS beats PAPER"
    }

    if (computer == "SCISSORS"){
        if (player == "PAPER") {
            computerScore += 1
            return "You Lose!, SCISSORS beats PAPER"
        }
        playerScore += 1
        return "You Win!, PAPER beats ROCK"
    }
}

function setPlayerChoice(choice){
    playerSelection = choice
    PLAYER_CHOICE.textContent = playerSelection
}

function updateScore(){
    PLAYER_SCORE.textContent = playerScore
    COMPUTER_SCORE.textContent = computerScore
}

function isGameOver(){
    console.log((playerScore >= 3))
    console.log((computerScore >= 3))
    return ((playerScore >= 3) || (computerScore >= 3))
}

function playRound(computer, player){
    RESULT_TEXT.textContent = checkWinner(computer, player)
    updateScore()
    if(isGameOver()){
        alert(`Game over
            You: ${playerScore}
            Compter: ${computerScore}`)
        playerScore = 0
        computerScore = 0
        updateScore()
    }
}
function game(){
    ROCK_BUTTON.onclick = () => setPlayerChoice("ROCK")
    PAPER_BUTTON.onclick = () => setPlayerChoice("PAPER")
    SCISSORS_BUTTON.onclick = () => setPlayerChoice("SCISSORS")

    PLAY_BUTTON.onclick = () => (playRound(getComputerChoice(), playerSelection))
}

game()