let randomNumber;
let computerChoice = '';

let result = '';
console.log (result);

let score = {
    Wins: 0,
    Losses: 0,
    Ties: 0
}

function rock () {
    assignValue();

    console.log(computerChoice);

    if (computerChoice === 'rock') {
        result = 'Tie';
        score.Ties +=1
    } else if (computerChoice === 'paper') {
        result = 'Loss';
         score.Losses +=1
    } else if (computerChoice === 'scissors') {
        result = 'Win';
         score.Wins +=1
    }
    alert(`You selected Rock. The computer selected ${computerChoice}. That's a ${result}. Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`)    
}

function paper () {
    assignValue();

    console.log(computerChoice);

    if (computerChoice === 'rock') {
        result = 'Win';
        score.Wins +=1
    } else if (computerChoice === 'paper') {
        result = 'Tie';
        score.Ties +=1
    } else if (computerChoice === 'scissors') {
        result = 'Loss';
        score.Losses +=1
    }

    alert(`You selected Paper. The computer selected ${computerChoice}. That's a ${result}. Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`)
}

function scissors () {
    assignValue();

    console.log(computerChoice);

    if (computerChoice === 'rock') {
        result = 'Loss';
        score.Losses +=1
    } else if (computerChoice === 'paper') {
        result = 'Win';
         score.Wins +=1
    } else if (computerChoice === 'scissors') {
        result = 'Tie';
        score.Ties +=1
    }
    alert(`You selected Scissors. The computer selected ${computerChoice}. That's a ${result}. Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`)
}

function assignValue () {
    randomNumber = Math.random();
    console.log(randomNumber);

    if (randomNumber>=0 && randomNumber<1/3) {
        computerChoice = 'rock';
    } else if (randomNumber>=1/3 && randomNumber<2/3) {
        computerChoice = 'paper';
    } else if (randomNumber>=2/3 && randomNumber<1) {
        computerChoice = 'scissors';
    };
}

function reset () {
    score = {
    'Wins': 0,
    'Losses': 0,
    'Ties': 0
    }
}





