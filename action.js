const playerOneBtn = document.querySelector('#btn-playerOne');
const playerTwoBtn = document.querySelector('#btn-playerTwo');
const resetBtn = document.querySelector('#btn-reset');

const playerOneScore = document.querySelector('#playerOneScore');
const playerTwoScore = document.querySelector('#playerTwoScore');

// Getting the limit of the game
const limitEle = document.querySelector('#maxScore');
let limit = parseInt(limitEle.value);

limitEle.addEventListener('change', () => {
    limit = parseInt(limitEle.value);
});

// Event: playerOneBtn click
playerOneBtn.addEventListener('click', () => {
    let score = parseInt(playerOneScore.innerHTML);
    score++;
    playerOneScore.innerHTML = score;
    celebrate();
});

// Event: playerTwoBtn click
playerTwoBtn.addEventListener('click', () => {
    let score = parseInt(playerTwoScore.innerHTML);
    score++;
    playerTwoScore.innerHTML = score;
    celebrate();
});

// Event: resetBtn click
resetBtn.addEventListener('click', () => {
    playerOneScore.innerHTML = 0;
    playerTwoScore.innerHTML = 0;

    playerOneBtn.disabled = false;
    playerTwoBtn.disabled = false;

    playerOneScore.style.color = 'black';
    playerTwoScore.style.color = 'black';

    playerOneBtn.classList.toggle('one');
    playerTwoBtn.classList.toggle('two');
});

// function to check if the game is over
function gameOver() {
    if (playerOneScore.innerHTML >= limit || playerTwoScore.innerHTML >= limit) {
        if (Math.abs(parseInt(playerOneScore.innerHTML) - parseInt(playerTwoScore.innerHTML)) > 1) {
            return true;
        }
    }
    return false;
}

function celebrate(){
    if (gameOver()) {
        playerOneBtn.disabled = true;
        playerTwoBtn.disabled = true;
        
        playerOneBtn.classList.toggle('one');
        playerTwoBtn.classList.toggle('two');

        if (parseInt(playerOneScore.innerHTML) > parseInt(playerTwoScore.innerHTML)) {
            playerOneScore.style.color = 'green';
            playerTwoScore.style.color = 'red';
        } else {
            playerOneScore.style.color = 'red';
            playerTwoScore.style.color = 'green';
        }
    }
}

