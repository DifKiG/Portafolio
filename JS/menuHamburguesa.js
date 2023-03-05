const menuBtn = document.querySelector("#menu-btn");
const nav__menu = document.querySelector(".menu");

menuBtn.onclick = () => {
    menuBtn.classList.toggle("fa-times");
    nav__menu.classList.toggle("active");
}
window.onscroll = () => {
    menuBtn.classList.remove("fa-times");
    nav__menu.classList.remove("active");
}