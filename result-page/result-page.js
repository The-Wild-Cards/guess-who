import { loadProfile, getComputerCharacter } from '../common/utils.js';

//gets user's name
loadProfile(); 

const computerCharacterImage = document.getElementById('correct-face');
const characterId = getComputerCharacter();
computerCharacterImage.src = ('../assets/faces/' + characterId + '.png');


