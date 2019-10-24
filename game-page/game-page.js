
import { characterArray } from '../common/character-data.js';
import { correctFace, findById, saveComputerCharacter, getUser, saveResults } from '../common/utils.js';
import { compareQuestionFeature } from '../common/utils.js';
import { compareFace } from '../common/utils.js';
import { featureArray } from '../game-page/featureArray.js';
import { createFeature } from './create-feature.js';
import { loadProfile } from '../common/utils.js';


const computerCharacter = correctFace(characterArray);
const questionFeedbackSpan = document.getElementById('question-feedback');
const guessAmountSpan = document.getElementById('guess-amount');
let guessAmountRemaining = 10;
const userGuessSubmitButton = document.getElementById('user-guess-submit-button');
const userGuessText = document.getElementById('user-guess-text');
const user = getUser();


saveComputerCharacter(computerCharacter);


const flipButtons = document.querySelectorAll('.overlay');
const navagtion = document.getElementById('navigation');

featureArray.forEach((item) => {
    const radioButton = createFeature(item);
    navagtion.appendChild(radioButton);
    
});
const everyQuestionOption = document.querySelectorAll('.option');

flipButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        btn.classList.add('overlay3');
    });
});
console.log(user);
console.log(everyQuestionOption, 'question options');
console.log(computerCharacter);
everyQuestionOption.forEach((questionOption) => {
    questionOption.addEventListener('click', () => {
       
        guessAmountRemaining--;
        guessAmountSpan.textContent = guessAmountRemaining;
        if (guessAmountRemaining < 1) {
            user.losses++;
            window.location = '../result-page/index.html';
        }
        const foundFeatureObject = findById(featureArray, questionOption.value);
        if (compareQuestionFeature(questionOption.value, computerCharacter)) {
            questionFeedbackSpan.textContent = foundFeatureObject.yesMessage;
        } else questionFeedbackSpan.textContent = foundFeatureObject.noMessage;
    });
});

userGuessSubmitButton.addEventListener('click', () => {
    guessAmountSpan.textContent = guessAmountRemaining;
    if (compareFace(userGuessText.value.toLowerCase(), computerCharacter.id)) { 

        user.wins++;
        window.location = '../result-page/index.html';
    } else guessAmountRemaining--;
    guessAmountSpan.textContent = guessAmountRemaining;
    if (guessAmountRemaining < 1) {
        user.losses++;

        const win = 'You Win';
        saveResults(win);
        window.location = '../result-page/index.html';
      
    
    } else guessAmountRemaining--;
    guessAmountSpan.textContent = guessAmountRemaining;
    if (guessAmountRemaining < 1) {
        const lost = 'You Lose';
        saveResults(lost);

        window.location = '../result-page/index.html';
    } 

});
loadProfile(); 
