




// var letters = 'hello'.split('');
// var wins = 0;
// var losses = 0;
// var guesses = [];
// var guessesLeft = 10;

// var computerGuess = letters[Math.floor(Math.random() * letters.length)];
// var addPoints = document.querySelector("#wins").innerHTML= wins;
// var lives = document.querySelector("#guessesleft").innerHTML = guessesLeft;
// var losePoints = document.querySelector("#losses").innerHTML = losses;
// var lettersUsed = document.querySelector("#letters").innerHTML = guesses;

// function updateDisplays() {
//     document.querySelector("#wins").innerHTML= wins;
//     document.querySelector("#guessesleft").innerHTML = guessesLeft;
//     document.querySelector("#losses").innerHTML = losses;
//     document.querySelector("#letters").innerHTML = guesses;

//   }

// function updateDisplays() {
//     addPoints.textContent = wins;
//     lettersUsed.textContent = guesses;
//     losePoints.textContent = losses;
//   }

//   document.onkeyup = updateDisplays;



var letters = "hello".split("");
var wins = 0;
var losses = 0;
var guesses = 6;
var computerGuess = letters[Math.floor(Math.random() * letters.length)];
var userGuessSoFar = [];
var winPoints = document.getElementById("wins");
var guessesLeft = document.getElementById("guessLeft");
var losePoints = document.getElementById("losses");
var guessSoFar = document.getElementById("guess-so-far");

function showScores() {
winPoints.innerHTML = wins;
guessesLeft.innerHTML = guesses;
losePoints.innerHTML = losses;
}

document.onkeyup = function(event) {

  var userGuess = event.key;
  userGuessSoFar.push(userGuess);
  guessSoFar.innerHTML = userGuessSoFar;

  if (userGuess == computerGuess) {

    wins++;
    guesses = 6;
    userGuessSoFar = [];
    computerGuess = letters[Math.floor(Math.random() * letters.length)];

  } else {

    guesses--;

    if (guesses == 0) {
      losses++;
      userGuessSoFar = [];
      guesses = 6;
    }

  }

  showScores();

}


showScores();






