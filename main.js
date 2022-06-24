//TODO: STEP 6 OF ROCK PAPER SCISSORS PROJECT
//DEALT WITH: COMPUTER AUTOMATION, USER PROMPT, CONTINUOUS PROMPT UNTIL CORRECT INPUT, X BEATS Y LOGIC






function computerPlay() {
    let choice;
    let number = Math.floor(Math.random() * (4-1) + 1);
    if (number === 1) choice = "rock";
    if (number === 2) choice = "paper";
    if (number === 3) choice = "scissors";
    return choice;
}

function playerSelection() {
    let userChoice;
    while ((userChoice !== "rock") || (userChoice !== "paper") || (userChoice !== "scissors")) {
        userChoice = prompt("Choose rock, paper, or scissors").toLowerCase();
        if ((userChoice === "rock") || (userChoice === "paper") || (userChoice === "scissors")) break;
    }
    return userChoice;
}

let choiceOne = computerPlay();
let choiceTwo = playerSelection();


function playRound(computer, user) {
    computer = choiceOne;
    user = choiceTwo;

    if ((user === 'rock') && (computer === 'scissors')) {
        return `You win! ${user.charAt(0).toUpperCase() + user.slice(1)} beats ${computer.charAt(0).toUpperCase() + computer.slice(1)}`;
    }
    else if ((user === 'rock') && (computer === 'paper'))  {
        return `You lose! ${computer.charAt(0).toUpperCase() + computer.slice(1)} beats ${user.charAt(0).toUpperCase() + user.slice(1)}`;
    }
    if ((user === 'paper') && (computer === 'rock')) {
        return `You win! ${user.charAt(0).toUpperCase() + user.slice(1)} beats ${computer.charAt(0).toUpperCase() + computer.slice(1)}`;
    }
    else if ((user === 'paper') && (computer === 'scissors'))  {
        return `You lose! ${computer.charAt(0).toUpperCase() + computer.slice(1)} beats ${user.charAt(0).toUpperCase() + user.slice(1)}`;
    }
    if ((user === 'scissors') && (computer === 'paper')) {
        return `You win! ${user.charAt(0).toUpperCase() + user.slice(1)} beats ${computer.charAt(0).toUpperCase() + computer.slice(1)}`;
    }
    else if ((user === 'scissors') && (computer === 'rock'))  {
        return `You lose! ${computer.charAt(0).toUpperCase() + computer.slice(1)} beats ${user.charAt(0).toUpperCase() + user.slice(1)}`;
    }
    else if (user === computer)
        return `Tie`;
}

function game() {

    // blah blah bla
}

let temp = playRound(choiceOne, choiceTwo);
console.log(temp);