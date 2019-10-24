
import { loadProfile, getComputerCharacter, renderTableRow, getResults } from '../common/utils.js';
const USER_LIST_KEY = 'user-array';



loadProfile(); 

const computerCharacterImage = document.getElementById('correct-face');
const characterId = getComputerCharacter();
computerCharacterImage.src = ('../assets/faces/' + characterId + '.png');
const javascriptReadableUserList = JSON.parse(localStorage.getItem(USER_LIST_KEY));



const addRows = (javascriptReadableUserList) => {

    for (let i = 0; i < javascriptReadableUserList.length; i++) {
        const player = javascriptReadableUserList[i];
        addRow(player);
    
    }
};
const tableElement = document.querySelector('tbody');

const addRow = (player) => {
    
    const row = renderTableRow(player.name, player.wins, player.losses);


    tableElement.appendChild(row);
};
   

addRows(javascriptReadableUserList);

const userDisplay = document.getElementById('win-or-lose');

userDisplay.textContent = getResults(userDisplay);

const homeSubmitButton = document.getElementById('home');
const aboutUsButton = document.getElementById('about-us');

homeSubmitButton.addEventListener('click', () => {
    window.location = '../index.html';
});

aboutUsButton.addEventListener('click', () => {
    window.location = '../about-us/index.html';
});
//random comment 

