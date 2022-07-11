'use strict';


let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;

document.querySelector('.check').addEventListener('click',function (){
    const guess = Number(document.querySelector('.guess').value);

    if(!guess){//Empty
        document.querySelector('.message').textContent = 'No Number';
    }else if(guess === secretNumber){//Win
        document.querySelector('.message').textContent = "Correct Number";
        document.querySelector('body').style.backgroundColor = '#60b347'

        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.number').textContent = secretNumber;

    }else if(guess > secretNumber){//High
        if(score > 1){
            document.querySelector('.message').textContent = "Too High";
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = "You Lost the game!"
        }
    }else if(guess < secretNumber){//Low
        if(score > 1){
        document.querySelector('.message').textContent = "Too Low";
        score--;
        document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = "You Lost the game!"
        }
    }

});

document.querySelector('.again').addEventListener('click',function(){
    secretNumber = Math.trunc(Math.random()*20)+1;
    score = 20;
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.guess').value = "";
    document.querySelector('.number').textContent = "?";
})



