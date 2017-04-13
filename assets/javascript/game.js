//Global Variables
var guesses = []; // guesses will be included in this array
var lives = 10; // Number of Lives
var point = 0; // Number of points when you win
var score = 0; // Number of scores everytime you loose the game

// Get elements
var guessWords = document.getElementById("guesses-words");
var userWords = document.getElementById("user-words");
var loose = document.getElementById("loose");
var guessLeft = document.getElementById("guess-left");
var win = document.getElementById("win");

//Create object game
var game = {
    letters: "abcdefghijklmnopqrstuvwxyz".split(""),
    looseMessage: "You loose",
    startGame: function() {

        //Generate random letter
        console.log("Start Game");
        var currentLetter = game.letters[Math.floor(Math.random() * game.letters.length)];
        console.log("Guess this letter:" + currentLetter);
        guessLeft.innerHTML = "Lives left: " + lives;
        win.innerHTML = "Wins: " + point;
        loose.innerHTML = "Looses: " + score;

        //Listen to user's input everytime a key is pressed
        document.onkeyup = function(event) {
            var userInput = String.fromCharCode(event.keyCode).toLowerCase();
            if (userInput != "Null" || userInput != "undefined") {
                game.getUserInput(currentLetter, userInput);
            };
        };
    },
    //Method to get use's input and save it an erray
    getUserInput: function(currentLetter, userInput) {
        guessWords.innerHTML += userInput;
        guesses.push(userInput);
        console.log("User input" + guesses);
        game.CheckLetter(userInput, currentLetter);
    },

    //Method to check if the letter match with user's input
    CheckLetter: function(userInput, currentLetter) {
        if (userInput === currentLetter) {
            console.log("You found the letter");
            point++;
            win.innerHTML = "Wins: " + point;
            game.restartGame();

        } else {
            console.log("You DID NOT found the letter!!!!");
            lives--;
            guessLeft.innerHTML = "Lives left: " + lives;
            if (lives == 0) {
                console.log(game.looseMessage);
                game.gameScore();
                game.restartGame();
            }
        }
    },

    //Method to restart the game
    restartGame: function() {
        console.log("Restart Game");
        lives = 4;
        guessLeft.innerHTML = "Lives left: " + lives;
        guessWords.innerHTML = "Your guesses so far: " + '';
        guesses = [];
        game.startGame();
    },
    //Method to calculate how many times you lost
    gameScore: function() {
        score++;
        console.log("Your Losses: " + score);
    }
}

//Initiate game
game.startGame();