const button = document.getElementById('btn');
const email = document.getElementById('email');
const password = document.getElementById('password');
const emailError = document.querySelector('.error');
const passError = document.querySelector('.error-pass');

document.querySelector('#btn').addEventListener('click', (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    const emailValue = email.value.trim();
    const passValue = password.value.trim();

    if(emailValue === '') {
        // Show Error
        email.style.border = '1px red solid';
        emailError.style.visibility = 'visible';

    } else {
        email.style.border = '1px green solid';
        emailError.style.visibility = 'hidden';
    }

    if(passValue === '') {
        // Show Error
        password.style.border = '1px red solid';
        passError.style.visibility = 'visible';
    } else {
        password.style.border = '1px green solid';
        passError.style.visibility = 'hidden';
    }
}

