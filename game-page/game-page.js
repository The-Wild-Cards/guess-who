const flipButtons = document.querySelectorAll('.overlay2');

flipButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        btn.classList.add('overlay3');
    });
});
