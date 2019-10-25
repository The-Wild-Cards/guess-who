import { characterArray2 } from '../common/character-data-2.js';
import { featureArray2 } from '../Second-board/featureArray.js';
import { createFeature } from '../Second-board/create-feature.js';
import { correctFace, findById, saveComputerCharacter, getUser, saveResults, compareFace, compareQuestionFeatureTwo, findUserByName, saveUserArray, getUserArray } from '../common/utils.js';

const userArray = getUserArray();
const computerCharacter = correctFace(characterArray2);
const questionFeedbackSpan = document.getElementById('question-feedback');
const guessAmountSpan = document.getElementById('guess-amount');
let guessAmountRemaining = 5;
const userGuessSubmitButton = document.getElementById('user-guess-submit-button');
const userGuessText = document.getElementById('user-guess-text');
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
            const currentUser = findUserByName(userArray, user.name);
            currentUser.losses++;
            saveUserArray(userArray);
            const lose = 'You Lose';
            saveResults(lose);
            window.location = '../result-page/index.html';
        }
        const foundFeatureObject = findById(featureArray2, questionOption.value);
        if (compareQuestionFeatureTwo(questionOption.value, computerCharacter)) {
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
        const win = 'You Win';
        saveResults(win);
        window.location = '../result-page/index.html';
    } else guessAmountRemaining--;

    questionFeedbackSpan.textContent = `Sadly your guess was wrong, try again ${user.name}`;
    guessAmountSpan.textContent = `${guessAmountRemaining} guesses left!`;
    if (guessAmountRemaining < 1) {
        const currentUser = findUserByName(userArray, user.name);
        currentUser.losses++;
        saveUserArray(userArray);
        const lose = 'You Lose';
        saveResults(lose);
        window.location = '../result-page/index.html';
    } 
});

