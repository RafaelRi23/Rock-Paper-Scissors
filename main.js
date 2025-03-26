// Function to get the computer choice
function getComputerChoice () {
// variable to get a random number
   let random = Math.random()
// variable to capture the number
   let computerChoice
//    conditional to decide which choice will be
    if (random >= 0.7) {
        computerChoice = `Pedra`
        console.log(computerChoice)
        
    } else if (random >= 0.4) {
        computerChoice = `Papel`
        console.log(computerChoice)
        
    } else {
        computerChoice = `Tesoura`
        console.log (computerChoice)
        
    }
    return computerChoice
}

// Function to get the human choice
function getHumanChoice () {
    let humanAnswer = prompt(`Pedra, Papel ou Tesoura?`)
    console.log(humanAnswer)
    // return the choice with the first letter in upper case
    return humanAnswer.charAt(0).toUpperCase() + humanAnswer.slice(1)
    // need to think a way to lower case all letters if the prompt is all upper case
}
// reference error prompt is not defined, but the code is running, need to solve this later

// variable to count when human wins
let humanScore = 0
// variable to count when computer wins
let computerScore = 0

// function to play a round
function playRound (humanChoice, computerChoice) {
    if (humanChoice == `Pedra` && computerChoice == `Tesoura` ) {
        console.log(`Voce venceu! Sua pontuacao eh ` + humanScore)
    } else if (humanChoice == `Pedra` && computerChoice == `Pedra`) {
        console.log(`Empate`)
    } else if (humanChoice == `Pedra` && computerChoice == `Papel`) {
        console.log(`Voce perdeu`)
    } else if (humanChoice == `Papel` && computerChoice == `Tesoura` ) {
        console.log(`Voce perdeu`)
    } else if (humanChoice == `Papel` && computerChoice == `Pedra`) {
        console.log(`Voce venceu! Sua pontuacao eh ` + humanScore)
    } else if (humanChoice == `Papel` && computerChoice == `Papel`) {
        console.log(`Empate`)
    } else if (humanChoice == `Tesoura` && computerChoice == `Tesoura` ) {
        console.log(`Empate`)
    } else if (humanChoice == `Tesoura` && computerChoice == `Pedra`) {
        console.log(`Voce perdeu`)
    } else 
        console.log(`Voce venceu! Sua pontuacao eh ` + humanScore)
}
// need to think a way to polish this conditional

// variable to initiate the human choice
const humanSelection = getHumanChoice()
// variable to initiate the computer choice
const computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection)