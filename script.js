'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let ranNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const guessFunc = function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  // No value inside of input field
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No Number!';
    console.log('Nothing here');

    // When player wins
  } else if (guess === ranNumber) {
    document.querySelector('.message').textContent = '🎊 Correct number!';
    document.querySelector('.number').textContent = ranNumber;
    document.querySelector('body').style.backgroundColor = '#60B347';
    document.querySelector('.number').style.width = '30rem';

    // Update High Score
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // Guess is too high
  } else if (guess > ranNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Guess too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🫣 You loose!';
      document.querySelector('.score').textContent = 0;
    }

    // Guess is too low
  } else if (guess < ranNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Guess too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🫣 You loose!';
      document.querySelector('.score').textContent = 0;
    }
  }
};

document.querySelector('.check').addEventListener('click', guessFunc);
// Again Button
document.querySelector('.again').addEventListener('click', function () {
  // Reset Score and Secret Number
  score = 20;
  document.querySelector('.score').textContent = score;
  ranNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(ranNumber);

  // Reset fields (Message, boxed number, guessing input)
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  // Change styles back
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

// document.querySelector('.check').addEventListener('click', function() {
//   console.log(document.querySelector('.guess').value);
// });
