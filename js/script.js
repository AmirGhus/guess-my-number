'use strict';


let score = 10;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highestScore = 0;
let i = 20;


const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
};

const displayNumber = function(number){
    document.querySelector('.number').textContent = number;
};

const displayColor = function(color){
    document.querySelector('body').style.backgroundColor = color;
};

const displayScore = function(score){
    document.querySelector('.score').textContent = score;
};

const displayWidth = function(width){
    document.querySelector('.number').style.width = width;
};

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    //When the user inputs an invalid number
    if(guess > 20 || guess < 1){
        
        displayMessage('Invalid Number!');
    
    }
    //When the user wins
    else if(guess === secretNumber){
        
        displayMessage('Correct Number!');

        displayColor('#60b347');

        displayWidth('30rem');

        displayNumber(secretNumber);

        if(score > highestScore){
            highestScore = score;
            document.querySelector('.highscore').textContent = highestScore;
        }
       
    }
    //When guess is higher
    else if (guess !== secretNumber){
        if (score > 1) {
           
            displayMessage(guess > secretNumber ? '📈 high!' : '📉 low!');

            score--;

            displayScore(score);

           displayWidth(`${i}%`);
            i += 9;
          } else {
           
            displayMessage('💥 Game Over')
            
            displayScore(0);

            displayWidth('30rem');

            displayNumber(secretNumber);

            displayColor('red');
           
          }
      
    }
        
});

document.querySelector('.again').addEventListener('click', function () {
  score = 10;
  i = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  

  displayMessage('Start guessing...');

  displayScore(10);
  
  displayNumber('?')

  document.querySelector('.guess').value = '';

  displayWidth('15rem');

  displayColor('#222');
    
  });