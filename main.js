// ==================== CONFIGURAÇÕES INICIAIS ====================

let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

const container = document.querySelector('#choices');
const resultContainer = document.createElement('div');
container.appendChild(resultContainer);

const restartButton = document.createElement('button');
restartButton.textContent = 'Jogar Novamente';
restartButton.style.display = 'none';
restartButton.style.marginTop = '10px';
container.appendChild(restartButton);

restartButton.addEventListener('click', () => {
    humanScore = 0;
    computerScore = 0;
    roundCount = 0;
    resultContainer.innerHTML = '';
    restartButton.style.display = 'none';
});


// ==================== FUNÇÕES DO JOGO ====================

function getComputerChoice () {
    const options = [`Pedra`, `Papel`, `Tesoura`];
    const index = Math.floor(Math.random() * options.length);
    return options[index];
}

function playRound(humanChoice, computerChoice) {
    if (
        (humanChoice === 'Pedra' && computerChoice === 'Tesoura') ||
        (humanChoice === 'Papel' && computerChoice === 'Pedra') ||
        (humanChoice === 'Tesoura' && computerChoice === 'Papel')
    ) {
        humanScore++;
        return `Você venceu! Sua pontuação é ${humanScore}. A pontuação do computador é ${computerScore}.`;
    } else if (humanChoice === computerChoice) {
        return `Empate. Sua pontuação é ${humanScore}. A pontuação do computador é ${computerScore}.`;
    } else {
        computerScore++;
        return `Você perdeu. Sua pontuação é ${humanScore}. A pontuação do computador é ${computerScore}.`;
    }
}

function addParagraph(text) {
    const p = document.createElement('p');
    p.textContent = text;
    resultContainer.appendChild(p);
}

// ==================== LÓGICA DO EVENTO DE CLIQUE ====================

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', event => {
        if (roundCount >= 5) return;

        const humanChoice = event.target.id;
        const computerChoice = getComputerChoice();

        resultContainer.innerHTML = '';

        addParagraph(`Rodada: ${roundCount + 1}`);
        addParagraph(`Você escolheu: ${humanChoice}`);
        addParagraph(`O computador escolheu: ${computerChoice}`);

        const result = playRound(humanChoice, computerChoice);
        addParagraph(result);

        roundCount++;

        if (roundCount === 5) {
            let finalMessage = '';
            if (humanScore > computerScore) {
                finalMessage = `🏆 Parabéns! Você venceu por ${humanScore} a ${computerScore}.`;
            } else if (humanScore < computerScore) {
                finalMessage = `😢 Que pena! O computador venceu por ${computerScore} a ${humanScore}.`;
            } else {
                finalMessage = `🤝 Empate! Ambos marcaram ${humanScore} pontos.`;
            }

            addParagraph(finalMessage);
            restartButton.style.display = 'inline-block';
        }
    });
});

