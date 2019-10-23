
import { characterArray } from '../common/character-data.js';
import { correctFace, findById, saveComputerCharacter } from '../common/utils.js';
import { compareQuestionFeature } from '../common/utils.js';
import { compareFace } from '../common/utils.js';
import { featureArray } from '../game-page/featureArray.js';
import { createFeature } from './create-feature.js';



// const highlighted = document.querySelectorAll('.container');
const computerCharacter = correctFace(characterArray);
const questionFeedbackSpan = document.getElementById('question-feedback');
const guessAmountSpan = document.getElementById('guess-amount');
let guessAmountRemaining = 10;
const userGuessSubmitButton = document.getElementById('user-guess-submit-button');
const userGuessText = document.getElementById('user-guess-text');
const guessedFace = userGuessText.value.toLowerCase();

saveComputerCharacter(computerCharacter);

//input text field with button that has even handler and take value of text field
const flipButtons = document.querySelectorAll('.overlay');
const navagtion = document.getElementById('navigation');
flipButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        btn.classList.add('overlay3');
    });
});

featureArray.forEach((item) => {
    const radioButton = createFeature(item);
    navagtion.appendChild(radioButton);

});


const everyQuestionOption = document.querySelectorAll('.option');
console.log(everyQuestionOption);
console.log(computerCharacter);
everyQuestionOption.forEach((questionOption) => {
    questionOption.addEventListener('click', () => {
       
        guessAmountRemaining--;
        guessAmountSpan.textContent = guessAmountRemaining;
        if (guessAmountRemaining < 1) {
            window.location = '../result-page/index.html';
        }
        
        const foundFeatureObject = findById(featureArray, questionOption.value);
        if (compareQuestionFeature(questionOption.value, computerCharacter)) {
            questionFeedbackSpan.textContent = foundFeatureObject.yesMessage;
        } else questionFeedbackSpan.textContent = foundFeatureObject.noMessage;
        //highlighted.classList.add('highlight');
       
    });
});
userGuessSubmitButton.addEventListener('click', () => {
    guessAmountSpan.textContent = guessAmountRemaining;
    if (compareFace(userGuessText.value.toLowerCase(), computerCharacter.id)) { 
        window.location = '../result-page/index.html';
        return 'win';
    } else guessAmountRemaining--;
    guessAmountSpan.textContent = guessAmountRemaining;
    if (guessAmountRemaining < 1) {
        window.location = '../result-page/index.html';
        return 'loses';
    } 
});
