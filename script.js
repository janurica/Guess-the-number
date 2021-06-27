let computerGuess;
let userGuesses = [];
let attempts = 0;
let maxGuesses;

function init(){
  computerGuess = Math.floor(Math.random()*100+1);
  console.log(computerGuess);
  document.getElementById('newGameButton').style.display = "none";
  document.getElementById('gameArea').style.display = "none";

}

function startsGameView(){
  document.getElementById('welcomeScreen').style.display = 'none';
  document.getElementById("gameArea").style.display = 'block';

}

function easyMode(){
  maxGuesses = 10;
  startsGameView()
}
function hardMode(){
  maxGuesses = 5;
  startsGameView()
}

function compareGuess(){
  const userGuess = Number(document.getElementById('inputBox').value);
  userGuesses.push(" "+ userGuess);
  document.getElementById("guesses").innerHTML = userGuesses;
  attempts++;
document.getElementById("attempts").innerHTML = attempts;
if(attempts< maxGuesses){
  if(userGuess > computerGuess){
    document.getElementById('textOutput').innerHTML = 'Your guess is too high';
    document.getElementById('inputBox').value = "";
  }else if(userGuess < computerGuess){
    document.getElementById('textOutput').innerHTML = 'Your guess is too low';
    document.getElementById('inputBox').value = "";
  }else {
    document.getElementById('textOutput').innerHTML = "Correct You've got it in:"+attempts+ " attempts";
  }
}else {
  if(userGuess > computerGuess){
    document.getElementById('textOutput').innerHTML = "YOU LOOSE!.<br> The number was: "+computerGuess;

  }else if(userGuess < computerGuess){
    document.getElementById('textOutput').innerHTML = "YOU LOOSE!.<br> The number was: "+computerGuess;

  }else {
    document.getElementById('textOutput').innerHTML = "Correct You've got it in:"+attempts+ " attempts";
  }
}
}
