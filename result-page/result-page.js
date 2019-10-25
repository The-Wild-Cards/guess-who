
import { getComputerCharacter, renderTableRow, getResults, getUser } from '../common/utils.js';
const USER_LIST_KEY = 'user-array';
const helloUser = document.getElementById('name');
const userDisplayWinOrLose = document.getElementById('win-or-lose');
const computerCharacter = getComputerCharacter();
const computerCharacterImage = document.getElementById('correct-face');
const tableElement = document.querySelector('tbody');
const correctCharacterName = document.getElementById('correct-character');
correctCharacterName.textContent = computerCharacter.name;

computerCharacterImage.src = ('../assets/faces/' + computerCharacter.id + '.png');
const javascriptReadableUserList = JSON.parse(localStorage.getItem(USER_LIST_KEY));
const addRows = (javascriptReadableUserList) => {
    for (let i = 0; i < javascriptReadableUserList.length; i++) {
        const player = javascriptReadableUserList[i];
        addRow(player);
    }
};
const addRow = (player) => {
    const row = renderTableRow(player.name, player.wins, player.losses);
    tableElement.appendChild(row);
};
addRows(javascriptReadableUserList);

let user = getUser();
helloUser.textContent = user.name;

userDisplayWinOrLose.textContent = getResults();
const homeSubmitButton = document.getElementById('home');
const aboutUsButton = document.getElementById('about-us');
homeSubmitButton.addEventListener('click', () => {
    window.location = '../index.html';
});
aboutUsButton.addEventListener('click', () => {
    window.location = '../about-us-page/index.html';
});

