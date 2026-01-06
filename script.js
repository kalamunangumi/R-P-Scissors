let randomNumber;
let computerChoice = '';

let result = '';
console.log (result);

function rock () {
    assignValue();

    console.log(computerChoice);

    if (computerChoice === 'rock') {
        result = 'Tie';
    } else if (computerChoice === 'paper') {
        result = 'Loss';
    } else if (computerChoice === 'scissors') {
        result = 'Win';
    }
    alert(`You selected Rock. The computer selected ${computerChoice}. That's a ${result}`)
    
}

function paper () {
    assignValue();

    console.log(computerChoice);

    if (computerChoice === 'rock') {
        result = 'Win';
    } else if (computerChoice === 'paper') {
        result = 'Tie';
    } else if (computerChoice === 'scissors') {
        result = 'Loss';
    }
    alert(`You selected Paper. The computer selected ${computerChoice}. That's a ${result}`)
}

function scissors () {
    assignValue();

    console.log(computerChoice);

    if (computerChoice === 'rock') {
        result = 'Loss';
    } else if (computerChoice === 'paper') {
        result = 'Win';
    } else if (computerChoice === 'scissors') {
        result = 'Tie';
    }
    alert(`You selected Scissors. The computer selected ${computerChoice}. That's a ${result}`)
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





