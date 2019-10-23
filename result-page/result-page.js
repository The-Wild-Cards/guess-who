import { loadProfile, getComputerCharacter, renderTableRow } from '../common/utils.js';


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