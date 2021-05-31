var burger_btn_on = document.getElementsByClassName(".burger_menu");
var burger_btn_off = document.getElementsByClassName(".burger_menu");
var burger_menu = document.getElementsByClassName(".burger_menu_on");

burger_btn_on.onclick = function() {
     burger_menu.style.display = "unset";
    };

burger_btn_off.onclick = function(){
    burger_menu.style.display = "none";
};