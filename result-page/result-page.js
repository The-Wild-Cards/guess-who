
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
    // looks good! in the future, you'll want this to be a forEach loop
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

// I feel like these should be at the top if possible, with all the other getElementsyIds
const homeSubmitButton = document.getElementById('home');
const aboutUsButton = document.getElementById('about-us');

// these probably could have been <a> tags
homeSubmitButton.addEventListener('click', () => {
    window.location = '../index.html';
});
aboutUsButton.addEventListener('click', () => {
    window.location = '../about-us-page/index.html';
});

