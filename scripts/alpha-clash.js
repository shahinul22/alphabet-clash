
function handleKayUpEvent(event) {
    const playPress = event.key;
    console.log('player press ', playPress);

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;

    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(playPress, expectedAlphabet);

    if (playPress === expectedAlphabet) {
        // console.log('u get a point');
        // console.log('u press correctly ', expectedAlphabet);

        const currentScoreElement = document.getElementById('current-score');

        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);

        const newScore = currentScore + 1;

        // Update the score in the DOM
        currentScoreElement.innerText = newScore;
        // console.log(newScore);


        removeBackgroundColor(expectedAlphabet);
        continueGame();
    }
    else {
        // console.log('u loss a life');
        const currentlifeElement = document.getElementById('current-life');
        const currentLifeText = currentlifeElement.innerText;
        const currentLife = parseInt(currentLifeText);
        // console.log(currentLife);

        const newLife = currentLife - 1;

        if (newLife <= 0) {
            gameOver();
            
            // hideElementById('play-ground')
            // showElementById('show-score')

            // const currentScoreElement = document.getElementById('current-score');
            // const currentScoreText = currentScoreElement.innerText;
            // const currentScore = parseInt(currentScoreText);

            // const resultScoreElement = document.getElementById('result-score');
            // const resultScoreText = resultScoreElement.innerText=currentScore;
            // const resultScore = parseInt(resultScoreText);


        }
        else {
            currentlifeElement.innerText = newLife;
            // console.log(newLife);
        }

    }
}

document.addEventListener('keyup', handleKayUpEvent)
function getRandomAlphabet() {
    const alphaberStrings = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphaberStrings.split('');


    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];

    // console.log(index, alphabet);
    return alphabet;

}
function hideElementById(elementID) {
    const homeScreen = document.getElementById(elementID);
    homeScreen.classList.add('hidden');
}
function showElementById(elementID) {
    const playGround = document.getElementById(elementID);
    playGround.classList.remove('hidden');
}
function setBackgroundColor(elementID) {
    const alphabet = document.getElementById(elementID);
    alphabet.classList.add('bg-purple-500')
}
function removeBackgroundColor(elementID) {
    const alphabet = document.getElementById(elementID);
    alphabet.classList.remove('bg-purple-500');
}
function continueGame() {
    const alphabet = getRandomAlphabet();

    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;
    // console.log('random alphabet ', currentAlphabet.innerText=alphabet);
    setBackgroundColor(alphabet);


}

function play() {
    hideElementById('home-section')
    showElementById('play-ground')

    continueGame();
}
function gameOver(){
    hideElementById('play-ground')
    showElementById('show-score')

    const currentScoreElement = document.getElementById('current-score');
    const currentScoreText = currentScoreElement.innerText;
    const currentScore = parseInt(currentScoreText);

    const resultScoreElement = document.getElementById('result-score');
    const resultScoreText = resultScoreElement.innerText=currentScore;
    

}
function exitGame(){
    hideElementById('show-score')
    showElementById('play-ground')
}
function playAgain(){
    const currentScoreElement = document.getElementById('current-score');
    const currentScoreText = currentScoreElement.innerText=0;
    const currentlifeElement = document.getElementById('current-life');
    const currentLifeText = currentlifeElement.innerText=5;
    hideElementById('show-score')
    showElementById('play-ground')
}