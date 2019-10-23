const flipButtons = document.querySelectorAll('.overlay');

flipButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        btn.classList.add('overlay3');
    });
});