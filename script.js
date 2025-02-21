"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //When there is no input------
  if (!guess) {
    displayMessage("⛔ No number!");

    //When player wins------ guess is right -------
  } else if (guess === secretNumber) {
    displayMessage("🥳🎉Correct Number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    // When guess is wrong-----------
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? "📈 Number is too high!"
          : "📈 Number is too low!"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("😓 You lost the game!");
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#C24641";
    }
  }
});

//Reset the game - using eventlistener at Again class which is button--------
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("🔢 Start guessing.......!");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
});