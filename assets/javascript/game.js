

// variables
//----------------------------------------------------->
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessLeft = 9;
var guessSoFar = [];


//Variables to hold places in HTML to display wins, losses, guesses
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessleftText = document.getElementById("guessesLeft-text");
var guessesSoFartext = document.getElementById("guessessoFar-text");

//When key is pressed...
document.onkeypress = function (event) {

    // Save key pressed to variable guess and push to array guessSoFar
    guess = event.key;
    guessSoFar.push(guess);

    console.log(guess);


    // Generating random computer guess and save to compGuess
    var compGuess = letters[Math.floor(Math.random() * letters.length)];
    console.log(compGuess);


    // if user guess matches computer guess add 1 to wins; minus 1 from guesses left; clear guesSoFar array
    if (guess == compGuess) {
        wins++;
        guessLeft = 9;
        guessSoFar = [];
        console.log(guessSoFar);

    }

    // if user guess doesn't match computer guess minus 1 from guesses left
    if (guess != compGuess) {
        guessLeft--;

    }

    // if guesses if no more guesses left, add 1 to losses; reset guesses left and guesses
    if (guessLeft == 0) {
        losses++;
        guessLeft = 9;
        guessSoFar = [];
        console.log(guessSoFar);
        console.log(losses);
    }


    var html = 
    '<p> Wins: ' + wins + '</p>' +
    '<p> Losses ' + losses + '</p>' +
    '<p> Guesses left ' + guessLeft + '<p>' +
    '<p> Guessed so far ' + guessSoFar + '<p>';
    document.getElementById("results").innerHTML = html;


    //print out results
    // document.getElementById("wins-text").innerHTML = "Wins: " + wins;
    // document.getElementById("losses-text").innerHTML = "Losses: " + lossesText
    // document.getElementById("guessesLeft-text").innerHTML = "Guesses Left: " + guessLeft;   
    // document.getElementById("guessessofar-text").innerHTML = "Your guesses so far: " + guessSoFar;

    // winsText.textContent = "Wins: " + wins;
    // lossesText.textContent = "losses " + losses;
    // guessleftText.textContent = "Guesses Left " + guessLeft;
    // guessesSoFartext.textContent = "Your guesses so far: " + guessSoFar;


}

