getComputerChoice = () => {
    let op = Math.random();
    if (op < 1 / 3) {
        return 'rock';
    } else if (op < 2 / 3) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return "It's a tie";
    }

    if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
        return "You must enter any one of rock paper or scissors";
    }

    if ('rock' !== playerSelection && 'rock' !== computerSelection) {
        if (playerSelection === 'scissors') {
            return "You win! scissors cuts Paper";
        } else {
            return "You Lose! scissors cuts Paper";
        }
    }

    if ('paper' !== playerSelection && 'paper' !== computerSelection) {
        if (playerSelection === 'rock') {
            return "You win! rock beats scissors";
        } else {
            return "You Lose! rock beats scissors";
        }
    }

    if ('scissors' !== playerSelection && 'scissors' !== computerSelection) {
        if (playerSelection === 'paper') {
            return "You win! paper wraps rock";
        } else {
            return "You Lose! paper wraps rock";
        }
    }
}

game = (playerSelection) => {
    let computerSelection = getComputerChoice();
    const opResult = document.querySelector('.result.op > span');
    const winResult = document.querySelector('.result.winner > span');

    opResult.textContent = `You: ${playerSelection}, Computer: ${computerSelection}`;
    winResult.textContent = playRound(playerSelection, computerSelection);
}

// game();
const options = Array.from(document.querySelectorAll('.option'));

options.forEach((option) => {
    option.addEventListener('click', () => game(option.textContent));
});

