// Function to get the computer choice
function getComputerChoice () {
    // variable to get a random number
    const random = Math.random();
    // variable to capture the number
    let computerChoice;
    // conditional ternary operator to decide which choice will be
    computerChoice = random < 0.34 ? `Pedra` : random < 0.67 ? `Papel` : `Tesoura`
    console.log(computerChoice)
    
    return computerChoice
}

// Function to get the human choice
function getHumanChoice () {
    // variable to capture the choice with prompt
    let humanChoice = prompt(`Pedra, Papel ou Tesoura?`)
    // convert all letters to lower case
    humanChoice = humanChoice.toLowerCase();
    // convert the first letter to upper case
    humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)
    console.log(humanChoice)

    return humanChoice
}

// the error `reference error prompt` occurs in node because it doesn`t have prompt, but in browser this error doesn`t exist

// variable to count when human wins
let humanScore = 0
// variable to count when computer wins
let computerScore = 0


   
// function to play a round
function playRound (humanChoice, computerChoice) {

    if ((humanChoice === `Pedra` && computerChoice === `Tesoura`) || (humanChoice === `Papel` && computerChoice === `Pedra`) || (humanChoice === `Tesoura` && computerChoice === `Papel`)) {
        humanScore++
        console.log(`Voce venceu! Sua pontuacao eh ` + humanScore + `. A pontuacao do computador eh ` + computerScore)
    } else if (humanChoice === computerChoice) {
        console.log(`Empate. Sua pontuacao eh ` + humanScore + ` e a pontuacao do computador eh ` + computerScore)
    } else {
        computerScore++
        console.log(`Voce perdeu. Sua pontuacao eh ` + humanScore + `. A pontuacao do computador eh ` + computerScore)
    }
}


for (let i = 0; i < 5; i++) {
    // variable to initiate the human choice
    const humanSelection = getHumanChoice()
    // variable to initiate the computer choice
    const computerSelection = getComputerChoice()

    // run the function with the choices value
    playRound(humanSelection, computerSelection)
}