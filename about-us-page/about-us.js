const homeButton = document.getElementById('HomeButton');

homeButton.addEventListener('click', () => {
    // I wonder if a button inside an <a> tag would have made more sense here
    window.location = '../index.html';
});

