let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const lizard_div = document.getElementById("l");
const spock_div = document.getElementById("sp")

function getComputerChoice(){
  const choices = ["r","p","s","l","sp"];
  const randomNumber = Math.floor(Math.random() * 5);
  return choices[randomNumber];
}

function convertToWord(letter){
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  if (letter === "s") return "Scissors";
  if (letter === "l") return "Lizard";
  if (letter === "sp") return "Spock";
}

function win(user, computer){
  userScore++;
  userScore_span.innerHTML = userScore
  compScore_span.innerHTML = compScore
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(user)}${smallUserWord} beats ${convertToWord(computer)}${smallCompWord}. You win! 🔥🔥🔥`
}

function lose(user, computer){
  compScore++;
  userScore_span.innerHTML = userScore
  compScore_span.innerHTML = compScore
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(user)}${smallUserWord} loses ${convertToWord(computer)}${smallCompWord}. You lose💩💩💩`
}

function draw(user, computer){
  result_p.innerHTML = `You both chose ${convertToWord(user)}. It's a draw!`
}

function game(userChoice) {
  const computerChoice=getComputerChoice();
  switch(userChoice + computerChoice) {
    case "rs":
    case "rl":
    case "pr":
    case "psp":
    case "sp":
    case "sl":
    case "sps":
    case "spr":
    case "lsp":
    case "lp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "rsp":
    case "ps":
    case "pl":
    case "sr":
    case "ssp":
    case "lr":
    case "ls":
    case "spl":
    case "spp":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
    case "ll":
    case "spsp":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", function() {
    game("r");
  })

  paper_div.addEventListener("click", function() {
    game("p");
  })

  scissors_div.addEventListener("click", function() {
    game("s");
  })

  spock_div.addEventListener("click", function() {
    game("sp");
  })

  lizard_div.addEventListener("click", function() {
    game("l");
  })
}

main();
