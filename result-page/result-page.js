
import { loadProfile, getComputerCharacter, getResults } from '../common/utils.js';

loadProfile(); 

const computerCharacterImage = document.getElementById('correct-face');
const characterId = getComputerCharacter();
computerCharacterImage.src = ('../assets/faces/' + characterId + '.png');

const userDisplay = document.getElementById('win-or-lose');

userDisplay.textContent = getResults(userDisplay);

const homeSubmitButton = document.getElementById('home');
const aboutUsButton = document.getElementById('about-us');

homeSubmitButton.addEventListener('click', () => {
    window.location = '../index.html';
});

aboutUsButton.addEventListener('click', () => {
    window.location = '../about-us/index.html';
});
//random comment 
