"use strict";

let secretNumber = Math.trunc(Math.random() * 20 + 1); //math.trunc removes decimals

let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const displaySecretNumber = function (message) {
  document.querySelector(".number").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(typeof guess);

  //when there is no input
  if (!guess) {
    displayMessage("Please enter a number");

    //when player wins
  } else if (guess === secretNumber) {
    displayMessage("you guessed the correct number");
    displaySecretNumber(secretNumber);
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".title").style.color = "#006400";
    document.querySelector(".title").textContent = "Winner Winner!";

    //make score the highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "too high" : "too low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("you lost the game");
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#ff00007a";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  //fix the colours
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".title").style.color = "#eee";

  //reset guess box to blank and reassign secret number

  displaySecretNumber("?");
  document.querySelector(".guess").value = " ";

  //change text back
  displayMessage("Start guessing...");
  document.querySelector(".title").textContent = "Guess My Number!";

  //reset score

  document.querySelector(".score").textContent = score;
});

//correct code by not following 'dry' princible
//when guess is too high
//   else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'too high';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'you lost the game';
//       document.querySelector('.score').textContent = 0;
//       document.querySelector('body').style.backgroundColor = '#ff00007a';
//     }

//     //when guess is too high
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'too low';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'you lost the game';
//       document.querySelector('.score').textContent = 0;
//       document.querySelector('body').style.backgroundColor = '#ff00007a';
//     }
//   }
