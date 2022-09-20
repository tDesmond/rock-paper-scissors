
const CHOICES = ["ROCK", "PAPER", "SCISSORS"]
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

function game(){
    for(let i = 0; i < 5; i ++){
        computerSelection = getComputerChoice()
        playerSelection = prompt("ROCK, PAPER, SCISSORS?").toUpperCase()
        console.log(playRound(computerSelection, playerSelection))
    }
    console.log("Player: " + playerScore + " Computer: " + computerScore)
}

game()