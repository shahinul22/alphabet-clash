
function getRandomAlphabet(){
    const alphaberStrings = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphaberStrings.split('');


    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];

    // console.log(index, alphabet);
    return alphabet;

}
function hideElementById(elementID){
    const homeScreen = document.getElementById(elementID);
    homeScreen.classList.add('hidden');
}
function showElementById(elementID){
    const playGround = document.getElementById(elementID);
    playGround.classList.remove('hidden');
}
function setBackgroundColor(elementID){
    const alphabet = document.getElementById(elementID);
    alphabet.classList.add('bg-purple-500')
}
function continuePlay(){
    const alphabet = getRandomAlphabet();

    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText=alphabet;
    setBackgroundColor(alphabet);


}

function play(){
    hideElementById('home-section')
    showElementById('play-ground')

    continuePlay()
}