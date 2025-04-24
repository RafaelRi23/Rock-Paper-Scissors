// Function to get the computer choice
function getComputerChoice () {
    // variable to get a random number
    const random = Math.random();
    // conditional ternary operator to decide which choice will be
    return random < 0.34 ? `Pedra` : random < 0.67 ? `Papel` : `Tesoura`
}

const container = document.querySelector(`#choices`)
const div = document.createElement(`div`)
container.appendChild(div)
const buttons = document.querySelectorAll(`button`)

buttons.forEach((button) => {
    button.addEventListener(`click`, event => {
        const humanChoice = event.target.id
        const computerChoice = getComputerChoice()

        div.innerHTML = ``;

        const p1 = document.createElement(`p`)  
        p1.textContent = `Voce escolheu: ${humanChoice}`
        div.appendChild(p1)

        const p2 = document.createElement(`p`);
        p2.textContent = `O computador escolheu: ${computerChoice}`;
        div.appendChild(p2);

        const result = playRound(humanChoice, computerChoice);
        const p3 = document.createElement(`p`);
        p3.textContent = result;
        div.appendChild(p3);
    })
})


// variable to count when human wins
let humanScore = 0
// variable to count when computer wins
let computerScore = 0
   
// function to play a round
function playRound (humanChoice, computerChoice) {

    if ((humanChoice === `Pedra` && computerChoice === `Tesoura`) || (humanChoice === `Papel` && computerChoice === `Pedra`) || (humanChoice === `Tesoura` && computerChoice === `Papel`)) {
        humanScore++
        return `Voce venceu! Sua pontuacao eh ` + humanScore + `. A pontuacao do computador eh ` + computerScore
    } else if (humanChoice === computerChoice) {
        return `Empate. Sua pontuacao eh ` + humanScore + ` e a pontuacao do computador eh ` + computerScore
    } else {
        computerScore++
        return `Voce perdeu. Sua pontuacao eh ` + humanScore + `. A pontuacao do computador eh ` + computerScore
    }
}


// for (let i = 0; i < 5; i++) {
//     // variable to initiate the computer choice
//     const computerSelection = getComputerChoice()

//     // run the function with the choices value
//     playRound(humanChoice, computerSelection)
// }

// if (humanScore > computerScore) {
//     console.log(`Parabens, voce venceu por ${humanScore} a ${computerScore}`)
// } else if (humanScore < computerScore) {
//     console.log(`Que pena, voce perdeu por ${computerScore} a ${humanScore}`)
// } else {
//     console.log(`Empatou com ${humanScore} pontos`)
// }
