let buttonsGroup = document.querySelectorAll('.button-dropdown');
let dropdownItemsGroup = document.querySelectorAll('.button-dropdown-item');
let inputDarkMode = document.querySelector('#inputDarkMode');
let mainTag = document.querySelector('#main');
let mainSpinner = document.querySelector('.main-spinner');
let otherCustomers = document.querySelector('#otherCustomers');
let viewCustomers = document.querySelector('#viewCustomers');
let mainHeaderNavbar = document.querySelector('.main-header-navbar');
let mobileButton = document.querySelectorAll('.mobileButton');
let mainSliderItems = document.querySelectorAll('.main-slider-item');
const SLIDER_CLASSES = [];

let spinnerStop = () => {
    mainSpinner.style.display = 'flex';
    setTimeout(() => {
        mainSpinner.style.display = 'none';
    }, 400)
}
buttonsGroup.forEach(item => {
    item.onclick = function () {
        item.nextElementSibling.classList.toggle('active');
        item.classList.toggle('active');
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
viewCustomers.onclick = function () {
    otherCustomers.classList.toggle('active');
}
mobileButton.forEach(item => {
    item.onclick = function () {
        mainHeaderNavbar.classList.toggle('active');
    }
})
window.onresize = function () {
    if (window.innerWidth > 939) mainHeaderNavbar.classList.remove('active');
};
let checkSliderClasses = () => {
    mainSliderItems.forEach(item => {
        SLIDER_CLASSES.push(item.className);
    })
}
let changeSlideClasses = () => {
    let a = SLIDER_CLASSES.splice(0, 1);
    SLIDER_CLASSES.push(a[0]);
    console.log(SLIDER_CLASSES)
}
let sliderControllerNext = () => {
    changeSlideClasses();
    let slideItems = document.querySelectorAll('.main-slider-item');
    slideItems.forEach((item, index) => {
        let slideLength = mainSliderItems.length;
        if(index === slideLength - 1) item.classList = SLIDER_CLASSES[0];
        else item.classList = SLIDER_CLASSES[index + 1];
    });
}
checkSliderClasses();
let slideInterval = setInterval(() => {
    sliderControllerNext();
}, 2000);
// clearInterval(slideInterval)
let stopInterval = () => {
    clearInterval(slideInterval)
}



