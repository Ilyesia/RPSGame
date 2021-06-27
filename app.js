// caching the DOM variables and setting default values to 0:0
let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result-text > p")
const rock_div = document.getElementById("rock")
const paper_div = document.getElementById("paper")
const scissor_div = document.getElementById("scissor")
const lizard_div = document.getElementById("lizard")
const spock_div = document.getElementById("spock")

//Computer choice generator goes through the RPSLS array using Math.random.
function getComputerChoice() {
    const choices = ["rock", "paper", "scissor", "lizard", "spock"];
    const randomNumber = Math.floor(Math.random() * 5);
    return choices[randomNumber];
}

/* Converts the text in the responsive results text to uppercase */
function convertUpper(letter) {
    if (letter === "rock") return "Rock";
    if (letter === "paper") return "Paper";
    if (letter === "scissor") return "Scissor";
    if (letter === "Lizard") return "Lizard";
    return "Spock";
}

/* Function for winning the RPSLS game */
function win(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `Your ${convertUpper(userChoice)} defeats ${convertUpper(computerChoice)}. You win!`
    userChoice_div.classList.add("winner-glow")
    setTimeout(() => document.getElementById(userChoice).classList.remove("winner-glow"), 400)
}

/* Function for losing the RPSLS game */
function lose(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `Computers ${convertUpper(computerChoice)} defeats ${convertUpper(userChoice)}. You lose!`
    userChoice_div.classList.add("lose-glow")
    setTimeout(() => document.getElementById(userChoice).classList.remove("lose-glow"), 400)
}

/* Function for a draw in the RPSLS game */
function draw(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `Both picked ${convertUpper(userChoice)}. It's a draw!`
    userChoice_div.classList.add("draw-glow")
    setTimeout(() => document.getElementById(userChoice).classList.remove("draw-glow"), 400)
}


/* All possible combinations for winning, losing and draws */
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rockscissor":
        case "rocklizard":
        case "paperrock":
        case "paperspock":
        case "scissorpaper":
        case "scissorlizard":
        case "lizardpaper":
        case "lizardspock":
        case "spockrock":
        case "spockscissor":
            win(userChoice, computerChoice);
            break;
        case "rockpaper":
        case "rockspock":
        case "paperscissor":
        case "paperspock":
        case "scissorspock":
        case "scissorrock":
        case "lizardscissor":
        case "lizardrock":
        case "spocklizard":
        case "spockpaper":
            lose(userChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorscissor":
        case "lizardlizard":
        case "spockspock":
            draw(userChoice, computerChoice);
            break;    
    }
}

/* Eventlisteners waiting for input. Input is transferred over to the main game function */
function main() {
    rock_div.addEventListener('click', () => game("rock"));
    paper_div.addEventListener('click', () => game("paper"));
    scissor_div.addEventListener('click', () => game("scissor"));
    lizard_div.addEventListener('click', () => game("lizard"));
    spock_div.addEventListener('click', () => game("spock"));
  }
  
  main();
