export function correctFace(characterArray) {
    const correctFace = Math.floor(Math.random() * characterArray.length);
    return characterArray[correctFace];
}
export function findById(characterArray, id) {
    for (let i = 0; i < characterArray.length; i++) {
        // in the future, this will be a .find array method
        const character = characterArray[i];
        if (character.id === id) {
            return character;
        }
    }
}
export const saveUserArray = (userArray) => {
    const jsonUserArray = JSON.stringify(userArray);
    localStorage.setItem('user-array', jsonUserArray);
};
export function saveUser(user) {
    const jsonUser = JSON.stringify(user);
    localStorage.setItem('user', jsonUser);
}
export const findUserByName = (userArray, userName) => {
    for (let i = 0; i < userArray.length; i++) {
        // in the future, this will be a .find array method
        const user = userArray[i];
        if (user.name === userName) {
            return user;
        }
    }
};
export function getUserArray() {
    const getJsonUserArray = localStorage.getItem('user-array');
    if (!getJsonUserArray) return null;
    const userArray = JSON.parse(getJsonUserArray);
    return userArray;
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
    nameCell.textContent = userName;
    tr.appendChild(nameCell);

    const winCell = document.createElement('td');
    winCell.textContent = wins;
    tr.appendChild(winCell);

    const lossesCell = document.createElement('td');
    lossesCell.textContent = losses;
    tr.appendChild(lossesCell);

    const percentageCell = document.createElement('td');
    const total = Math.round(wins / (wins + losses) * 100);
    percentageCell.textContent = total + '%';
    tr.appendChild(percentageCell);

    return tr;
}
export function compareFace(guessedFace, correctFaceId) {
    if (guessedFace === correctFaceId) {
        return true;
    }
}
export const compareQuestionFeature = (questionOptionValue, computerCharacter) => {
    /*
    this whole chain of ifs could be replaced with a hash map and dynamic object property:

    return computerCharacter[questionOptionValue] // resolves to true or false
    */
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
export const compareQuestionFeatureTwo = (
    questionOptionValue,
    computerCharacter
) => {
    /*
this whole chain of ifs could be replaced with a hash map and dynamic object property:

return computerCharacter[questionOptionValue] // resolves to true or false
*/

    if (questionOptionValue === 'hat' && computerCharacter.hat === true) {
        return true;
    }
    if (questionOptionValue === 'scarf' && computerCharacter.scarf === true) {
        return true;
    }
    if (questionOptionValue === 'redhair' && computerCharacter.redhair === true) {
        return true;
    }
    if (questionOptionValue === 'brownhair' && computerCharacter.brownhair === true) {
        return true;
    }
    if (questionOptionValue === 'bald' && computerCharacter.bald === true) {
        return true;
    }
    if (
        questionOptionValue === 'tie' &&
        computerCharacter.tie === true
    ) {
        return true;
    }
    if (
        questionOptionValue === 'glasses' &&
        computerCharacter.glasses === true
    ) {
        return true;
    }
    if (
        questionOptionValue === 'freckles' &&
        computerCharacter.freckles === true
    ) {
        return true;
    }
    if (questionOptionValue === 'earrings' && computerCharacter.earrings === true) {
        return true;
    }
    if (questionOptionValue === 'blackhair' && computerCharacter.blackhair === true) {
        return true;
    } else return false;
};

export function createUser(formData) {
    const user = {
        name: formData.get('name'),
        wins: 0,
        losses: 0,
    };
    return user;
}
export function saveComputerCharacter(computerCharacter) {
    const json = JSON.stringify(computerCharacter);
    localStorage.setItem('computer-character', json);
}
export function getComputerCharacter() {
    const getJsonFace = localStorage.getItem('computer-character');
    if (!getJsonFace) return null;
    const computerFace = JSON.parse(getJsonFace);
    return computerFace;
}
export function saveResults(winOrLose) {
    const json = JSON.stringify(winOrLose);
    localStorage.setItem('win-lose', json);
}
export function getResults() {
    const get = localStorage.getItem('win-lose');
    if (!get) return null;
    const results = JSON.parse(get);
    return results;
}
