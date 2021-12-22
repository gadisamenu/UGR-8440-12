const huburger = document.querySelector(".hamburger");
const navList = document.querySelector(".navigation__list");
const head = document.querySelector(".head")
huburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    huburger.classList.toggle("active");
    navList.classList.toggle("active");
    head.classList.toggle("active")
}

const navLink = document.querySelectorAll(".navigation__link");
navLink.forEach(n => n.addEventListener("click", closeMenu))
function closeMenu() {
    huburger.classList.remove("active");
    navList.classList.remove("active");
    head.classList.remove("active")
}