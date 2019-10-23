import { saveUser, createUser } from '../common/utils.js';
const userCreation = document.getElementById('user-creation');



userCreation.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(userCreation);
    const user = createUser(formData);
    saveUser(user);
    window.location = '../game-page/index.html';
});




