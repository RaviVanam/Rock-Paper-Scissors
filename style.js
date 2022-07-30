getComputerChoice = () => {
    let op = Math.random();
    if (op < 1/3) {
        return 'rock';
    } else if (op < 2/3) {
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

game = () => {
    for (let i = 0; i < 3; i++) {
        let playerSelection = prompt("Choose rock or paper or scissors"); 
        let computerSelection = getComputerChoice();

        console.log(playRound(playerSelection, computerSelection));
    }
}

game();