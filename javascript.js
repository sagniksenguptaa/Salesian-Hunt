function checkGuess() {
    const guess = parseInt(document.getElementById('guess').value);
    const result = document.getElementById('result');
    const rickroll = document.getElementById('rickroll');

    // Always treat the guess as correct
    result.textContent = `You guessed ${guess}. The wheel landed on ${guess}. You win!`;
    result.style.color = 'green';
    rickroll.classList.remove('hidden');
}

// Add event listener for the Enter key
document.getElementById('guess').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        checkGuess(); // Call the checkGuess function
    }
});
