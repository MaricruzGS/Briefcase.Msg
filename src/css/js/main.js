const menu = document.querySelector(".menu");
const iconMenu = document.querySelector(".bx-menu");

iconMenu.addEventListener("click", function(){
    menu.classList.toggle("menu-show");
});