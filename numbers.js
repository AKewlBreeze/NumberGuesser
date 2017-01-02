var recentGuess = document.querySelector(".userInput");
var guessButton = document.querySelector(".guess");
var clearButton = document.querySelector(".clear");
var display = document.querySelector(".populate");
var resetButton = document.querySelector(".resetGuess");

function newRandomNumber(){
  return Math.floor(Math.random() * 100);
}

var generateRandomNumber = newRandomNumber();



function checkRandomNumber() {
  var guessFeedback = document.querySelector(".message");
  var numberGuess = recentGuess.value;
  if (numberGuess > 100) {
    alert("Number 1-100 please");
    display.innerText = "";
  } else if (numberGuess > generateRandomNumber) {
    guessFeedback.innerText="too high";
    display.innerText = (recentGuess.value);
  } else if (numberGuess < generateRandomNumber) {
    guessFeedback.innerText="too low";
    display.innerText = (recentGuess.value);
  } else if (numberGuess == generateRandomNumber) {
    guessFeedback.innerText="boom";
    display.innerText = (recentGuess.value);
  }
  console.log(generateRandomNumber);
}

function disable(){
  guessButton.disabled=true;
  clearButton.disabled=true;
  resetButton.disabled=true;
}

function afterClearDisable(){
  guessButton.disabled=true;
  clearButton.disabled=true;
}

function enable(){
  guessButton.disabled=false;
  clearButton.disabled=false;
  resetButton.disabled=false;
}

disable();

recentGuess.addEventListener("keyup", function(){
  enable();
});

guessButton.addEventListener("click", function(){
  checkRandomNumber();
});

clearButton.addEventListener("click", function() {
  recentGuess.value = "";
  afterClearDisable();
});

resetButton.addEventListener("click", function() {
  recentGuess.value="";
  display.innerText="";
  generateRandomNumber = newRandomNumber();
});
