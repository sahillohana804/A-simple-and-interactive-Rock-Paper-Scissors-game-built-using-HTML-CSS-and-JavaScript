let choices = document.querySelectorAll(".choice");

let result = document.querySelector("#result");
let computerchoice = document.querySelector("#computer-choice");

let userscore = document.querySelector("#user-score");
let computerscore = document.querySelector("#computer-score");
let drawscore = document.querySelector("#draw-score");

let resetbtn = document.querySelector("#reset-btn");

let userScore = 0;
let computerScore = 0;
let drawScore = 0;

let choicesArray = ["rock", "paper", "scissors"];


choices.forEach((choice) => {

    choice.addEventListener("click", () => {

        let userChoice = choice.getAttribute("id");

        let randomIndex = Math.floor(Math.random() * 3);

        let computerChoice = choicesArray[randomIndex];

        computerchoice.innerText = "Computer Choice: " + computerChoice;

        if (userChoice === computerChoice) {

            result.innerText = "It's a Draw!";

            drawScore++;
            drawscore.innerText = drawScore;

        }

        else if (
            (userChoice === "rock" && computerChoice === "scissors") ||
            (userChoice === "paper" && computerChoice === "rock") ||
            (userChoice === "scissors" && computerChoice === "paper")
        ) {

            result.innerText = "You Won!";

            userScore++;
            userscore.innerText = userScore;

        }

        else {

            result.innerText = "Computer Won!";

            computerScore++;
            computerscore.innerText = computerScore;

        }

    });

});


resetbtn.addEventListener("click", () => {

    userScore = 0;
    computerScore = 0;
    drawScore = 0;

    userscore.innerText = "0";
    computerscore.innerText = "0";
    drawscore.innerText = "0";

    result.innerText = "Choose your move!";
    computerchoice.innerText = "Computer Choice: -";

});