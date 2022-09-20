
const CHOICES = ["ROCK", "PAPER", "SCISSORS"]

const PLAYER_CHOICE = document.querySelector(".player-choice")
const RESULT_TEXT = document.querySelector(".result")

const ROCK_BUTTON = document.querySelector("#rock-btn")
const PAPER_BUTTON = document.querySelector("#paper-btn")
const SCISSORS_BUTTON = document.querySelector("#scissors-btn")
const PLAY_BUTTON = document.querySelector("#play-btn")


let computerSelection, playerSelection, playerScore=0, computerScore=0

function radomInt(){
    return Math.floor(Math.random()*3)
}
function getComputerChoice(){
    return CHOICES[radomInt()]
}

function playRound(computer, player){

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

function game(){

    ROCK_BUTTON.onclick = () => setPlayerChoice("ROCK")
    PAPER_BUTTON.onclick = () => setPlayerChoice("PAPER")
    SCISSORS_BUTTON.onclick = () => setPlayerChoice("SCISSORS")

    PLAY_BUTTON.onclick = () => RESULT_TEXT.textContent = (playRound(getComputerChoice(), playerSelection))
}

game()