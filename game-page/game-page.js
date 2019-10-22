import { characterArray } from '../common/character-data.js'
import { correctFace } from '../common/utils.js';
import { notifyResults } from './results.js';
import { compareQuestionFeature } from '../common/utils.js';


const computerCharacter = correctFace(characterArray);





const flipButtons = document.querySelectorAll('.overlay2');

flipButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        btn.classList.add('overlay3');
    });
});

const everyQuestionOption = document.querySelectorAll('.features');

everyQuestionOption.forEach((questionOption) => {
    questionOption.addEventListener('click', (event) => {
        compareQuestionFeature(questionOption, computerCharacter);
    });
});

// const generateFeedback = () => {
//     const ul = document.createElement('ul');
//     resultsSection.appendChild(ul);
//     resultsArray.forEach(result => {
//         const li = makeResultLine(result);
//         ul.appendChild(li);
//     });
// };















