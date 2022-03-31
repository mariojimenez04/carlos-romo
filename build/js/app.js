const LOGO = document.querySelector('#logo');

document.addEventListener('DOMContentLoaded', () => {

    app();
});


function app(){

    setTimeout(() => {
        LOGO.classList.add('logo');
    }, 1000);

    setTimeout(() => {
        LOGO.style.display = 'none';
    }, 1800);
}