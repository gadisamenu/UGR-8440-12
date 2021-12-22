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
function submitted(){
    alert("submitted successfully!!")
}

function insert(){
    let card = document.createElement('div');
    card.setAttribute('class','section__certifCard')

    let image = document.createElement('img')
    image.setAttribute('class','section__certifCard__image')
    let source = prompt('insert the images source directory','')
    image.setAttribute('src',source)
    let alt = prompt('insert the alt property of the image','this is image of certificate')
    image.setAttribute('alt',alt)

    let par = document.createElement('p')
    let describ = prompt('insert the describtion fo the certificate you are adding','This is a certificate I got by my perfomace.')
    par.setAttribute('class',"section__certifCard__description")
    par.innerHTML=describ

    card.appendChild(image)
    card.appendChild(par)
    document.getElementById('here').appendChild(card);
}
