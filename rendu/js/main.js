var burgerMenu = document.querySelector('.burger__menu');
var headerMenu = document.querySelector(".header__menu");
var headerOverlay = document.querySelector('.menu__overlay');
var body = document.querySelector('body');

console.log(burgerMenu, 'burger menu');

//Fonction à utiliser
function toggleBurgerMenu(burger, menu, overlay) {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
    body.classList.toggle('stop-scroll');
}

burgerMenu.onclick = function () {
    toggleBurgerMenu(burgerMenu, headerMenu, headerOverlay);
}

headerOverlay.onclick = function () {
    toggleBurgerMenu(burgerMenu, headerMenu, headerOverlay);
}

// burgerMenu.addEventListener('click', function () {
//     console.log('test');
//     toggleBurgerMenu();
// })
