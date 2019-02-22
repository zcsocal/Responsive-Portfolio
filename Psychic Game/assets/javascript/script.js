/* These are the global variables for the game */
var won = 0;
var lost = 0;
var attempts = 10;
var usedLetters = [];
var psychicLetter = psychicLetter;
var letters = "qwertyuiopasdfghjklzxcvbnm"


/* Game functions start here */

//Generate the computer's secret letter

psychicLetter = letters[Math.floor(Math.random() * letters.length)]; 

//Test to make sure it's working. It does.
console.log(psychicLetter);

function jsGuess() {
    psychicLetter = letters[Math.floor(Math.random() * letters.length)];
    console.log(psychicLetter); 

}

document.onkeyup = function (event) {
    var playerGuess = event.key;

//Correct guesses
//If the player guesses correctly, add to the wins and make attemps equal 10. Reset used letters to empty.
    if (playerGuess !== psychicLetter) {
        alert("Choose letters only!");
    }

    if (playerGuess === psychicLetter) {
        won++;
        attempts = 10;
        usedLetters = []; //empty array
        alert("Yay! You won. Week going!");

        //Then we run the guess function over again.
        psychicLetter = letters[Math.floor(Math.random() * letters.length)]; 
        console.log(psychicLetter);

        function jsGuess() {
            psychicLetter = letters[Math.floor(Math.random() * letters.length)];
            console.log(psychicLetter); 

}

    }
    
     
    //Incorrect guesses


    //If the player's guess does not egual the psychic guess, then subtract an attempt.
    if (playerGuess !== psychicLetter) {
        attempts--;
    }

    //When attempts equal 0 the player has a loss. So the player gains a loss and attempts is reset to 10 and used letters is cleared.
    if (attempts == 0) {
        lost ++;
        attempts = 10;
        usedLetters = [];
        alert("Sorry, you lost! Try again.");
    }


    //Inccorect guesses are output onto page
    if (usedLetters.indexOf(playerGuess) >= 0) {

    } else {
            //Push the player's incorrect guess to the usedLetters array and write it to the html
            usedLetters.push(playerGuess);
            document.getElementById("playerGuess").innerHTML = usedLetters;
            
    }


    //Output these values to html
    document.getElementById('won').innerHTML = won;
    document.getElementById('lost').innerHTML = lost;
    document.getElementById('attempts').innerHTML = attempts;




}

