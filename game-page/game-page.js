import { characterArray } from '../common/character-data.js';
import { correctFace, findById, saveComputerCharacter, getUser, saveResults, getUserArray, findUserByName, saveUserArray } from '../common/utils.js';
import { compareQuestionFeature } from '../common/utils.js';
import { compareFace } from '../common/utils.js';
import { featureArray } from '../game-page/featureArray.js';
import { createFeature } from './create-feature.js';

const userArray = getUserArray();
const computerCharacter = correctFace(characterArray);
const questionFeedbackSpan = document.getElementById('question-feedback');
const guessAmountSpan = document.getElementById('guess-amount');
const userGuessSubmitButton = document.getElementById('user-guess-submit-button');
const userGuessText = document.getElementById('user-guess-text');
const user = getUser();
const flipButtons = document.querySelectorAll('.overlay');
const navagtion = document.getElementById('navigation');
let guessAmountRemaining = 6;
saveComputerCharacter(computerCharacter);

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
everyQuestionOption.forEach((questionOption) => {
    questionOption.addEventListener('click', () => {
        guessAmountRemaining--;
        guessAmountSpan.textContent = `${guessAmountRemaining} guesses left!`;
        if (guessAmountRemaining < 1) {
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
        const currentUser = findUserByName(userArray, user.name);
        currentUser.wins++;
        saveUserArray(userArray);
        const win = 'You Win!';
        saveResults(win);
        window.location = '../result-page/index.html';
    } else guessAmountRemaining--;
    guessAmountSpan.textContent = `${guessAmountRemaining} guesses left!`;
    questionFeedbackSpan.textContent = 'Sadly your guess was wrong, try again ' + user.name + '.';
    if (guessAmountRemaining < 1) {
        const currentUser = findUserByName(userArray, user.name);
        currentUser.losses++;
        saveUserArray(userArray);
        const lose = 'You Lose!';
        saveResults(lose);
        window.location = '../result-page/index.html';
    } 
});