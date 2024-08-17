
window.onload = function () {
    const button = document.querySelector('button');

    button.addEventListener('click', function () {
        playgame();
    });
}

let p1wins = 0;
let p2wins = 0;

const images = ["assets/rock.png","assets/paper.png","assets/scissors.png"];

const winConditions = {
  scissor: 'paper',
  rock: 'scissor',
  paper: 'rock'
}

const playgame = function (){
  const handP1 = player1Hand();
  const handP2 = player2Hand();
  
  determineWinner(handP1,handP2);
};

const player1Hand = () => {
  const randomNumber = Math.floor(Math.random()*images.length);
  imgPlayer1.src = images[randomNumber];
  return Object.keys(winConditions)[randomNumber];
};

const player2Hand = () => {
  const randomNumber = Math.floor(Math.random()*images.length);
  imgPlayer2.src = images[randomNumber];
  return Object.keys(winConditions)[randomNumber];
};

const determineWinner = function(handP1, handP2){
  if(handP1 === handP2){
    return;
  }
  else if(winConditions[handP1] === handP2){
    p1wins++;
    document.getElementById('scoreP1').innerHTML = p1wins;
  }
  else{
    p2wins++;
    document.getElementById('scoreP2').innerHTML = p2wins;
  }
};
