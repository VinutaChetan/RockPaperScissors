let userScore= 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreboard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function convertWord(letter){
  if (letter == 'r') return "Rock";
  if (letter == 'p') return "Paper";
  return "Scissors";
}

function getComputerChoice(){
  const choices = ['r','p','s'];
  const randomNumber = Math.floor(Math.random()*3);
  return choices[randomNumber];
}

function win(user,computer){
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML= computerScore ;
  const userChoice_div = document.getElementById(user)
  //const smallUserWord = "user".fontsize[3].sub();
  //const smallCompWord = "comp".fontsize[3].sub();
  //result_p.innerHTML = convertWord(user) + smallUserWord + " beats " + smallCompWord + convertWord(computer) + " You Win!";
  result_p.innerHTML = `${convertWord(user)} beats ${convertWord(computer)} You Win!`;
  userChoice_div.classList.add('green-glow');
  setTimeout(function(){userChoice_div.classList.remove('green-glow')}, 300);
}

function lose(user,computer){
   computerScore++;
   const userChoice_div = document.getElementById(user);
   computerScore_span.innerHTML = computerScore;
   userScore_span.innerHTML= userScore ;
   result_p.innerHTML = `${convertWord(user)} loses ${convertWord(computer)} You Lost....`;
   userChoice_div.classList.add('red-glow');
   setTimeout(function(){userChoice_div.classList.remove('red-glow')}, 300);
}

function draw(user,computer){
  const userChoice_div = document.getElementById(user);
  result_p.innerHTML = `${convertWord(user)} equals ${convertWord(computer)} Its Draw....`;
  userChoice_div.classList.add('grey-glow');
  setTimeout(function(){userChoice_div.classList.remove('grey-glow')}, 300);
}

function game(userChoice){
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
        win(userChoice,computerChoice);
        break;
    case "rp":
    case "ps":
    case "sr":
        lose(userChoice,computerChoice);
          break;
    case "rr":
    case "pp":
    case "ss":
          draw(userChoice,computerChoice);
          break;
  }
}

function main(){
  rock_div.addEventListener('click',function(){
    game("r");
  })

  paper_div.addEventListener('click',function(){
    game("p");
  })

  scissors_div.addEventListener('click',function(){
    game("s");
  })
}

main();
