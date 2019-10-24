import { characterArray2 } from '../common/character-data-2.js';
import { compareQuestionFeature } from '../common/utils2.js';
import { compareFace } from '../common/utils2.js';
import { featureArray2 } from '../second-board/featureArray.js';
import { createFeature } from '../second-board/create-feature.js';
import { loadProfile } from '../common/utils2.js';
import { correctFace, findById, saveComputerCharacter, getUser, saveResults } from '../common/utils2.js';

const computerCharacter = correctFace(characterArray2);
const questionFeedbackSpan = document.getElementById('question-feedback');
const guessAmountSpan = document.getElementById('guess-amount');
let guessAmountRemaining = 10;
const userGuessSubmitButton = document.getElementById('user-guess-submit-button');
const userGuessText = document.getElementById('user-guess-text');
const userGuessTextResponse = document.getElementById('guess-response');

const user = getUser();

saveComputerCharacter(computerCharacter);
const flipButtons = document.querySelectorAll('.overlay');
const navagtion = document.getElementById('navigation');

featureArray2.forEach((item) => {
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
            user.losses++;
            window.location = '../result-page/index.html';
        }
        const foundFeatureObject = findById(featureArray2, questionOption.value);
        if (compareQuestionFeature(questionOption.value, computerCharacter)) {
            questionFeedbackSpan.textContent = foundFeatureObject.yesMessage;
        } else questionFeedbackSpan.textContent = foundFeatureObject.noMessage;
    });
});
userGuessSubmitButton.addEventListener('click', () => {
    guessAmountSpan.textContent = `${guessAmountRemaining} guesses left!`;
    if (compareFace(userGuessText.value.toLowerCase(), computerCharacter.id)) {
        user.wins++;
        const win = 'You Win';
        saveResults(win);
        window.location = '../result-page/index.html';
    } else guessAmountRemaining--;
    userGuessTextResponse.textContent = 'Sadly your guess was wrong, try again ' + user.name + '.';
    guessAmountSpan.textContent = `${guessAmountRemaining} guesses left!`;
    if (guessAmountRemaining < 1) {
        user.losses++;
        const lost = 'You Lose';
        saveResults(lost);
        window.location = '../result-page/index.html';


    } 
});
loadProfile(); 
