var burgerMenu = document.querySelector('.burger_menu');
var headerMenu = document.querySelector(".header_menu");
var headerOverlay = document.querySelector('.menu_overlay');
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

burgerMenu.addEventListener('click', function () {
     console.log('test');
    toggleBurgerMenu();
})
