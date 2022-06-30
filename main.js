let res = "";
let userPoints = 0;
let computerPoints = 0;
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
function playRound(computer, user) {
    computer = computerPlay();
    user = playerSelection();

    if ((user === 'rock') && (computer === 'scissors')) {
        res = `You win! ${user.charAt(0).toUpperCase() + user.slice(1)} beats ${computer.charAt(0).toUpperCase() + computer.slice(1)}`;
        userPoints++;
    }
    else if ((user === 'rock') && (computer === 'paper'))  {
        res = `You lose! ${computer.charAt(0).toUpperCase() + computer.slice(1)} beats ${user.charAt(0).toUpperCase() + user.slice(1)}`;
        computerPoints++;
    }
    if ((user === 'paper') && (computer === 'rock')) {
        res = `You win! ${user.charAt(0).toUpperCase() + user.slice(1)} beats ${computer.charAt(0).toUpperCase() + computer.slice(1)}`;
        userPoints++;
    }
    else if ((user === 'paper') && (computer === 'scissors'))  {
        res = `You lose! ${computer.charAt(0).toUpperCase() + computer.slice(1)} beats ${user.charAt(0).toUpperCase() + user.slice(1)}`;
        computerPoints++;
    }
    if ((user === 'scissors') && (computer === 'paper')) {
        res = `You win! ${user.charAt(0).toUpperCase() + user.slice(1)} beats ${computer.charAt(0).toUpperCase() + computer.slice(1)}`;
        userPoints++;
    }
    else if ((user === 'scissors') && (computer === 'rock'))  {
        res = `You lose! ${computer.charAt(0).toUpperCase() + computer.slice(1)} beats ${user.charAt(0).toUpperCase() + user.slice(1)}`;
        computerPoints++;
    }
    else if (user === computer) {
        res = `Tie`;
    }
    return res;
}
function game() {
    let finalWinner = "";
    for (let i = 1; i <= 5; i++) {
        console.log(`Round ${i}: ${playRound()}`);
    }
    console.log(`User: ${userPoints}`)
    console.log(`Computer: ${computerPoints}`)
    if (userPoints > computerPoints) finalWinner = "User wins!";
    else if (userPoints < computerPoints) finalWinner = "Computer wins!";
    else finalWinner = "Tie";
    return finalWinner;
}
console.log(`hello!`)
console.log(game());