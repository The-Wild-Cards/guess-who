import { saveUser, createUser } from '../common/utils.js';
const userCreation = document.getElementById('user-creation');

userCreation.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(userCreation);
    const user = createUser(formData);
    saveUser(user);
    let chosenGameBoard = document.querySelector('input:checked').value;
    if (chosenGameBoard === 'people'){
        window.location = './Second-board/index.html';
    } else window.location = '../game-page/index.html';
});



