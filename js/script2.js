const body = document.querySelector('body');
const winLoad = document.querySelector('.winLoad');
const user = document.querySelector('.user');
const userInput = document.querySelector('.user input');
const userBtn = document.querySelector('.user button');
const userLoading = document.querySelector('.user .loading');
const userName = document.querySelector('.user p');
const userText = document.querySelector('.user span');
const input = document.querySelector('.user form input');
const eye = document.querySelector('form .fa-eye');
const eyeSlash = document.querySelector('form .fa-eye-slash');
const password = document.querySelector('.user .password');

setTimeout(function () {
    winLoad.style.display = 'inline-block';

    setTimeout(function () {
        winLoad.style.display = 'none';
        user.style.display = 'inline-block';

        const audio = document.createElement('audio');
        audio.src = './Win11StartupSound.mp3';
        audio.play();
    }, 5000);
}, 500);

userBtn.addEventListener('click', function (event) {
    event.preventDefault();

    if (userInput.value !== '123GG321') {
        password.style.display = 'block';
        userInput.value = '';
        userInput.focus();
    } else {
        userBtn.style.display = 'none';
        userInput.style.display = 'none';
        userLoading.style.display = 'flex';
        userName.style.top = '16rem';
        userText.style.display = 'none';
        eye.style.display = 'none';
        eyeSlash.style.display = 'none';
        password.style.display = 'none';

        setInterval(function () {
            window.location.href = './index1.html';
        }, 5000);
    }
});

eye.addEventListener('click', function () {
    eye.style.display = 'none';
    eyeSlash.style.display = 'flex';
    input.type = 'password';
})

eyeSlash.addEventListener('click', function () {
    eye.style.display = 'flex';
    eyeSlash.style.display = 'none';
    input.type = 'text';
})

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
})