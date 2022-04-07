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
        mainTag.classList.add('dark-mode');
        inputDarkMode.parentElement.classList.add('active');
    } else {
        mainSpinner.classList.add('dark');
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

let slidesPerView = 5
window.onresize = function () {
    let size = window.innerWidth
    if ( size > 939) mainHeaderNavbar.classList.remove('active');
    if (size < 1440 && size > 1160) slidesPerView = 4
};
const swiper = new Swiper('.swiper', {
    slidesPerView: slidesPerView,
    spaceBetween: 30,
    freeMode: true,
    autoplay: {
        delay: 2000,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1440: {
            slidesPerView: 4,
            spaceBetween: 40
        },
    }
});



