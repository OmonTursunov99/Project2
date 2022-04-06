let buttonsGroup = document.querySelectorAll('.button-dropdown');
let dropdownItemsGroup = document.querySelectorAll('.button-dropdown-item');
let inputDarkMode = document.querySelector('#inputDarkMode');
let mainTag = document.querySelector('#main');
let mainSpinner = document.querySelector('.main-spinner');

let spinnerStop = () => {
    mainSpinner.style.display = 'flex';
    setTimeout(() => {
        mainSpinner.style.display = 'none';
    }, 400)
}
buttonsGroup.forEach(item => {
    item.onclick = function () {
        if(!item.nextElementSibling.classList.contains('active')) {
            buttonsGroup.forEach(el => {el.nextElementSibling.classList.remove('active')});
        }
        item.nextElementSibling.classList.toggle('active');
    };
});
dropdownItemsGroup.forEach(item => {
    item.onclick = function () {
        item.parentElement.classList.remove('active');
    };
});
inputDarkMode.onclick = function () {
    if(inputDarkMode.checked) {
        mainSpinner.classList.remove('dark');
        spinnerStop();
        mainTag.classList.add('dark-mode');
        inputDarkMode.parentElement.classList.add('active');
    } else {
        mainSpinner.classList.add('dark');
        spinnerStop();
        mainTag.classList.remove('dark-mode');
        inputDarkMode.parentElement.classList.remove('active');

    }
};



