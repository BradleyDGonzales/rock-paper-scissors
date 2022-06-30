//GAME LOGIC
let res;
let computerPoints = 0;
let userPoints = 0;
let winnerText;
function disableButtons() {
    for (i = 0; i < buttontags.length; i++) {
        buttontags[i].disabled = true;
        buttontags[i].style.backgroundColor = "#DADAD9";
    }
}
function computerPlay() {
    let choice;
    let number = Math.floor(Math.random() * (3) + 1);
    if (number === 1) choice = "rock";
    if (number === 2) choice = "paper";
    if (number === 3) choice = "scissors";
    return choice;
}
function playRound(computer, user) {
    computer = computerPlay();
    user = userChoice;

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
    if (userPoints === 5 && (userPoints > computerPoints)) {
        winnerText = `Legendary Enemy Felled. You are the new Elden Lord.`
        disableButtons();
        
    }
    else if (computerPoints === 5 && (computerPoints)) {
        winnerText = `You died.`
        disableButtons();
    }
    else {
        winnerText = "";
    }
}

//UI
const rockbutton = document.getElementById(`rock`);
const paperbutton = document.getElementById(`paper`);
const scissorsbutton = document.getElementById(`scissors`);
const buttons = document.querySelectorAll(`button`);
let buttontags = document.getElementsByTagName(`button`);
const userpoints = document.querySelector(`#userpoints`);
const computerpoints = document.querySelector(`#computerpoints`)
const content = document.querySelector(`.container`);
const p = document.createElement(`p`);
buttons.forEach(element => element.addEventListener(`click`, function(e) {
    userChoice = element.getAttribute(`id`);
    playRound();
    userpoints.textContent = `User points: ${userPoints}`;
    computerpoints.textContent = `Computer points: ${computerPoints}`;
    p.textContent = `${winnerText}`;
    content.appendChild(p)
}));