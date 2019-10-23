export function correctFace(characterArray) {
    const correctFace = Math.floor(Math.random() * characterArray.length);
    return characterArray[correctFace];
}
export function findById(characterArray, id) {
    for (let i = 0; i < characterArray.length; i++) {
        const character = characterArray[i];
        if (character.id === id) { 
            return character;
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

export function compareFace(guessedFace, correctFaceId) {
    if (guessedFace === correctFaceId) {
        return true;
    } 
    
}
export const compareQuestionFeature = (questionOptionValue, computerCharacter) => {
    if (questionOptionValue === 'horns' && computerCharacter.horns === true) {
        return true;
    }
    if (questionOptionValue === 'hat' && computerCharacter.hat === true) {
        return true;
    }
    if (questionOptionValue === 'hair' && computerCharacter.hair === true) {
        return true;
    }
    if (questionOptionValue === 'fin' && computerCharacter.fin === true) {
        return true;
    }
    if (questionOptionValue === 'oneEye' && computerCharacter.oneEye === true) {
        return true;
    }
    if (questionOptionValue === 'twoEyes' && computerCharacter.twoEyes === true) {
        return true;
    }
    if (questionOptionValue === 'threeEyes' && computerCharacter.threeEyes === true) {
        return true;
    }
    if (questionOptionValue === 'fourEyes' && computerCharacter.fourEyes === true) {
        return true;
    }
    if (questionOptionValue === 'spots' && computerCharacter.spots === true) {
        return true;
    }
    if (questionOptionValue === 'nose' && computerCharacter.nose === true) {
        return true;
    }
    if (questionOptionValue === 'ears' && computerCharacter.ears === true) {
        return true;
    } else return false;
};

export function createUser(formData) {
    const user = {
        name: formData.get('name'),
    };
    return user;
}


export function loadProfile() {
    const name = document.getElementById('name');
    const user = getUser();
    if (!user) {
        window.location = './';
    }
    name.textContent = user.name;
}

export function saveComputerCharacter(computer) {
    const json = JSON.stringify(computer);
    localStorage.setItem('computer-character', json);
}

export function getComputerCharacter() {
    const getJsonFace = localStorage.getItem('computer-character');
    if (!getJsonFace) return null;
    const computerFace = JSON.parse(getJsonFace);
    return computerFace;
}

