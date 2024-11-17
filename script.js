let playAgain = true;

while (playAgain) {
    // Game Intro
    alert("Welcome to the guessing game! Guess the film name. You have 10 tries to guess the name. Type 'hint' if you need help.");

    // Setup maximum tries and movie options
    const maxTries = 10;
    const movies = [
        { name: "avatar", hint: "A movie with blue aliens and floating mountains" },
        { name: "spiderman", hint: "A superhero who can climb walls" },
        { name: "inception", hint: "A mind-bending thriller about dreams" },
        { name: "titanic", hint: "A tragic romance on a doomed ocean liner" },
        { name: "harry potter", hint: "A young boy learns he's a wizard at a magical school" },
        { name: "shrek", hint: "An ogre teams up with a donkey to rescue a princess" },
        { name: "star wars", hint: "A galactic war with Jedi and Sith" },
        { name: "frozen", hint: "A queen with ice powers struggles to control them" },
        { name: "the lion king", hint: "A young lion cub learns about responsibility and leadership" },
        { name: "the godfather", hint: "A mafia family saga spanning generations" },
        { name: "ratatouille", hint: "A rat dreams of becoming a top chef in Paris" },
        { name: "zootopia", hint: "A bunny cop teams up with a fox to solve a mystery" },
    ];

    // Select a random movie and hint
    const selectedMovie = movies[Math.floor(Math.random() * movies.length)];
    const word = selectedMovie.name;
    const hint = selectedMovie.hint;

    // Initialize game variables
    let remainingTries = maxTries;
    let guessedLetters = [];
    let displayWord = word.replace(/[^ ]/g, "-");
    let hintUsed = false;

    // Game loop
    while (remainingTries > 0 && displayWord.includes("-")) {
        // Show progress and previous guesses
        alert(`Current progress: ${displayWord}\nGuessed letters: ${guessedLetters}\nRemaining tries: ${remainingTries}`);

        let guess = prompt("Guess a letter, type 'hint' for a hint, or click cancel to stop.");
        
        // Handle cancel
        if (guess === null) {
            alert("Game stopped. The word was: " + word);
            break;
        }

        // Handle hint request
        guess = guess.toLowerCase();
        if (guess === "hint") {
            if (hintUsed) {
                alert("Hint already used!");
            } else {
                alert("Hint: " + hint);
                hintUsed = true;
            }
            continue;
        }

        // Validate single-letter input
        if (!/^[a-z]$/i.test(guess)) {
            alert("Please enter a single letter.");
            continue;
        }

        // Check if letter has already been guessed
        if (guessedLetters.includes(guess)) {
            alert("You've already guessed that letter.");
            continue;
        }

        // Add guess to guessed letters and update word display
        guessedLetters += guess;
        let newDisplayWord = "";
        let correctGuess = false;

        for (let i = 0; i < word.length; i++) {
            if (word[i] === guess) {
                newDisplayWord += guess;
                correctGuess = true;
            } else {
                newDisplayWord += displayWord[i];
            }
        }

        displayWord = newDisplayWord;

        // Check if the guess was incorrect
        if (!correctGuess) {
            remainingTries--;
            alert("Incorrect guess!");
        }
    }

    // End of game outcome
    if (!displayWord.includes("_")) {
        alert("Congratulations! You've guessed the word: " + word);
    } else if (remainingTries === 0) {
        alert("Out of tries! The word was: " + word);
    }

    // Ask if the user wants to play again
    playAgain = confirm("Do you want to play again?");
}

alert("Thanks for playing!");
