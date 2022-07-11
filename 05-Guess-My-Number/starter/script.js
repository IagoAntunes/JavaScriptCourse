'use strict';


let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;


const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click',function (){
    const guess = Number(document.querySelector('.guess').value);

    if(!guess){//Empty
        displayMessage('No Number');
    }else if(guess === secretNumber){//Win
        displayMessage("Correct Number");
        document.querySelector('body').style.backgroundColor = '#60b347'

        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.number').textContent = secretNumber;
        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    }else if(guess != secretNumber){// High-Low
        if(score > 1){
            displayMessage(guess > secretNumber ? "Too High" : "Too Low");
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            displayMessage("You Lost the game!");
        }
    }
});

document.querySelector('.again').addEventListener('click',function(){
    secretNumber = Math.trunc(Math.random()*20)+1;
    score = 20;
    displayMessage("Start guessing...");
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.guess').value = "";
    document.querySelector('.number').textContent = "?";
})
