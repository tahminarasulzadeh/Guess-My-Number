"use-strict";


let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0; 
let btnCheck = document.querySelector(".btn-check");

const CheckNumber = () => {
  const inp = Number(document.querySelector(".guess").value);
  //when there is no input
  if (!inp) {
    document.querySelector(".message").textContent = "⛔ No number!";
    //when players win
  } else if (inp === secretNumber) {
    document.querySelector(".message").textContent = "🎉Correct Number!";
    document.querySelector(".score").textContent = score;

    document.querySelector("body").style.backgroundColor = "#32CD32";
    document.querySelector(".guess").style.backgroundColor = "#32CD32";
    document.querySelector(".number-span").textContent = secretNumber;
     if (score> highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
     }


    //when is too high
  } else if (inp > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = " ⬆️ Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = " 💣 You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
    //when is to low
  } else if (inp < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "⬇️ Too low! ";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = " 💣 You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
};

btnCheck.addEventListener("click", CheckNumber);

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing... ";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number-span").textContent = "?";
  document.querySelector(".guess").value = " " 
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").style.backgroundColor = "#222";

});
