const LOGO = document.querySelector('#logo');
const CONTROL = document.querySelector('#control');

document.addEventListener('DOMContentLoaded', () => {

    app();
});


function app(){

    setTimeout(() => {
        LOGO.classList.add('logo');
    }, 2500);

    setTimeout(() => {
        LOGO.style.display = 'none';
    }, 3500);

    setTimeout(() => {
        CONTROL.classList.remove('display-none');
    }, 3500);
}