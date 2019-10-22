import { featureArray } from '../game-page/featureArray.js';
import { pickFeature } from '../game-page/create-feautre.js';
const flipButtons = document.querySelectorAll('.overlay2');
const navagtion = document.getElementById('navigation');
flipButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        btn.classList.add('overlay3');
    });
});
featureArray.forEach((item) => {
    const radioButton = pickFeature(item);
    navagtion.appendChild(radioButton);
});
