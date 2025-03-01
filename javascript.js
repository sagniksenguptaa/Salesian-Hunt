
function checkGuess() {
    const guess = parseInt(document.getElementById('guess').value);
    const result = document.getElementById('result');
    const rickroll = document.getElementById('rickroll');

    
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    
    if (isNaN(guess) || guess < 1 || guess > 10) {
        result.textContent = "Please enter a valid number between 1 and 10.";
        result.style.color = 'red';
        rickroll.classList.add('hidden');
        return; 
    }

    
    if (guess === randomNumber) {
        result.textContent = `You guessed ${guess}. The wheel landed on ${randomNumber}. You win!`;
        result.style.color = 'green';
        rickroll.classList.remove('hidden');
    } else {
        result.textContent = `You guessed ${guess}. The wheel landed on ${randomNumber}. Try again!`;
        result.style.color = 'red';
        rickroll.classList.add('hidden');
    }
}


document.getElementById('guess').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        checkGuess(); 
    }
});