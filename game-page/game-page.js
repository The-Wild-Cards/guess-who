import { characterArray } from '../common/character-data.js'
import { correctFace } from '../common/utils.js';
import { compareQuestionFeature } from '../common/utils.js';
import { compareFace } from '../common/utils.js';

const computerCharacter = correctFace(characterArray);
const questionFeedbackSpan = document.getElementById('question-feedback');
const guessAmountSpan = document.getElementById('guess-amount');
let guessAmountRemaining = 5;
const userGuessSubmitButton = document.getElementById('user-guess-submit-button');
const userGuessText = document.getElementById('user-guess-text');
const guessedFace = userGuessText.value.toLowerCase();

//input text field with button that has even handler and take value of text field


const flipButtons = document.querySelectorAll('.overlay2');

flipButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        btn.classList.add('overlay3');
    });
});

const everyQuestionOption = document.querySelectorAll('.feature');

everyQuestionOption.forEach((questionOption) => {
    questionOption.addEventListener('click', () => {
        guessAmountRemaining--;
        guessAmountSpan.textContent = guessAmountRemaining;
        if (guessAmountRemaining < 1) {
            window.location('./result-page/index.html');
        }
        compareQuestionFeature(questionOption, computerCharacter);
        if (compareQuestionFeature === true) {
            questionFeedbackSpan.textContent = questionOption.yesMessage;
        } else questionFeedbackSpan.textContent = questionOption.noMessage;
    });
});

userGuessSubmitButton.addEventListener('click', () => {
    compareFace(guessedFace, computerCharacter.id);

});















