
var recentGuess = document.querySelector(".userInput");
var guessButton = document.querySelector(".guess");
var clearButton = document.querySelector(".clear");
var display = document.querySelector(".populate");



guessButton.addEventListener("click",function(){
  display.innerText=(recentGuess.value);
  var numberGuess = recentGuess.value;
  getRando();

  function getRando(){
    var rando = Math.floor (Math.random() * 100);
    if (rando < numberGuess){
      alert("too high");
    } else if (rando > numberGuess){
      alert("too low");
    } else {
      alert("boom!");
      }
      console.log(rando);
    }
    if (numberGuess > 100){
      alert("pick a number between 1-100");
    }
  }
);
