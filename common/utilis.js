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