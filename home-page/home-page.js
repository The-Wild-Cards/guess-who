import { saveUser, createUser, findUserByName, saveUserArray, getUserArray, getUser } from '../common/utils.js';
const userCreation = document.getElementById('user-creation');
let userArray = [];

if (getUserArray()){
    userArray = getUserArray();
} else {
    userArray = [];
}
console.log(userArray, 'logging userArray');
userCreation.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(userCreation);
    const user = createUser(formData);
    console.log(user, 'logging user');
   
    
    if (!findUserByName(userArray, user.name)) {
        
        userArray.push(user);
        console.log(userArray, 'logging userArray');
        saveUserArray(userArray);

    }
    
    saveUser(user);
    let chosenGameBoard = document.querySelector('input:checked').value;
    if (chosenGameBoard === 'people'){
        window.location = './Second-board/index.html';
    } else window.location = '../game-page/index.html';
});



