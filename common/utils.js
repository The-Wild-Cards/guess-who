//added comment to push
export function findById(characterArray, id) {
    for (let i = 0; i < characterArray.length; i++) {
        const characterArray = characterArray[i];
        if (characterArray.id === id) {
            return characterArray;
        }
    }
}
export function saveUser(user) {
    const jsonUser = JSON.stringify(user);
    localStorage.setItem('user', jsonUser);
}

export function getUser() {
    const getJsonUser = localStorage.getItem('user');
    if (!getJsonUser) return null;
    const user = JSON.parse(getJsonUser);
    return user;
}
export function renderTableRow(userName, wins, losses) {
    const tr = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.className = 'align-left';
    nameCell.name = userName;
    tr.appendChild(nameCell);

    const winCell = document.createElement('td');
    winCell.textContent = wins;
    tr.appendChild(winCell);

    const lossesCell = document.createElement('td');
    lossesCell.textContent = losses;
    tr.appendChild(lossesCell);

    const percentageCell = document.createElement('td');
    percentageCell.className = 'win-loss-percentage';
    const total = wins / losses;
    percentageCell.textContent = total;
    tr.appendChild(percentageCell);

    return tr;
}
export function correctFace(characterArray) {
    const correctFace = Math.floor(Math.random() * characterArray.length);
    return characterArray[correctFace];
}



export function compareFace(guessedFace, correctFaceId) {
    if (guessedFace === correctFaceId) {
        window.location = '../results-page/index.html';
    } 
    
}
export const compareQuestionFeature = (questionOption, computerCharacter) => {
    if (questionOption.id === 'horns' && computerCharacter.horns === true) {
        return true;
    }
    if (questionOption.id === 'hat' && computerCharacter.hat === true) {
        return true;
    }
    if (questionOption.id === 'hair' && computerCharacter.hair === true) {
        return true;
    }
    if (questionOption.id === 'fin' && computerCharacter.fin === true) {
        return true;
    }
    if (questionOption.id === 'oneEye' && computerCharacter.oneEye === true) {
        return true;
    }
    if (questionOption.id === 'twoEyes' && computerCharacter.twoEyes === true) {
        return true;
    }
    if (questionOption.id === 'threeEyes' && computerCharacter.threeEyes === true) {
        return true;
    }
    if (questionOption.id === 'fourEyes' && computerCharacter.hat === true) {
        return true;
    }
    if (questionOption.id === 'spots' && computerCharacter.spots === true) {
        return true;
    }
    if (questionOption.id === 'nose' && computerCharacter.nose === true) {
        return true;
    }
    if (questionOption.id === 'ears' && computerCharacter.ears === true) {
        return true;
    } else return false;
};
