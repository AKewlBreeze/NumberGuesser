var recentGuess = document.querySelector(".userInput");
var guessButton = document.querySelector(".guess");
var clearButton = document.querySelector(".clear");
var display = document.querySelector(".populate");

guessButton.addEventListener("click",function(){
  console.log(recentGuess.value);
  display.innerText=recentGuess.value;
});
