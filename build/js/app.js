const LOGO = document.querySelector('#logo');

document.addEventListener('DOMContentLoaded', () => {

    app();
});


function app(){
    LOGO.classList.add('logo');

    setTimeout(() => {
        LOGO.classList.remove('logo');
        LOGO.style.display = 'none';
    }, 4000);

    const remove = LOGO.parentElement;

    console.log(remove)

    // setTimeout(() => {
        
    // }, 4500);
}