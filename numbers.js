
var recentGuess = document.querySelector(".userInput");
var guessButton = document.querySelector(".guess");
var clearButton = document.querySelector(".clear");
var display = document.querySelector(".populate");
var rando = Math.floor (Math.random() * 100);
var resetButton = document.querySelector(".resetGuess");
var message = document.querySelector(".message");



function getRando(){
  var numberGuess = recentGuess.value;
  if (numberGuess > 100){
    alert("Number 1-100 please");
    display.innerText=("");
  } else if (numberGuess > rando){
    alert("too high");
    display.innerText=(recentGuess.value);
  } else if (numberGuess < rando){
    alert("too low");
    display.innerText=(recentGuess.value);
  } else if (numberGuess == rando){
    alert("boom!");
    display.innerText=(recentGuess.value);
  }
}

// if(inputName.val() === ""){
//   submitButton.prop("disabled", true);
// } else {
//     submitButton.prop("disabled", false);
//   }
// });

guessButton.addEventListener("click",function(){
  if (recentGuess.value === ""){
    guessButton.disabled=true;
  } else {
    guessButton.disabled=false;
    getRando();
  }

  }
);

clearButton.addEventListener("click", function (){
  recentGuess.value = ("");
  if (recentGuess.value === ""){
    clearButton.disabled=true;
  } else {
    clearButton.disabled=false;
  }
});

resetButton.addEventListener("click", function(){
  if(display.innerText=== ""){
    resetButton.disabled=true;
  }
  recentGuess.value = ("");
  display.innerText=("");
  window.location.reload();
});

// onClick="window.location.reload()"
