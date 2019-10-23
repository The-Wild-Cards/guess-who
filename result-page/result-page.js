
import { loadProfile, getComputerCharacter, getResults } from '../common/utils.js';

//gets user's name
loadProfile(); 

const computerCharacterImage = document.getElementById('correct-face');
const characterId = getComputerCharacter();
computerCharacterImage.src = ('../assets/faces/' + characterId + '.png');

const userDisplay = document.getElementById('win-or-lose');

userDisplay.textContent = getResults(userDisplay);



// const gameSubmitButton = document.getElementById('play-again');
// const homeSubmitButton = document.getElementById('home');
// const aboutUsButton = document.getElementById('about-us');

// homeSubmitButton.addEventListener('click', () => {
//     window.location = '../game-page/index.html';
// });
// gameSubmitButton.addEventListener('click', () => {
//     window.location = '../game-page/index.html';
// });

// aboutUsButton.addEventListener('click', () => {
//     window.location = '../about-us/index.html';
// });

