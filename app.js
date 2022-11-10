const url = "https://landingfolio.com/templates/post/evolo";


let menu = document.querySelector('#menu-bars')
let navbar = document.querySelector('.navbar')


menu.onclick = () => {
    menu.classList.toggle("fa-circle-xmark");
    navbar.classList.toggle("menu-show");
}

//swipper
// var swiper = new Swiper(".team", {
//     slidesPerView: 4,
//     spaceBetween: 25,
//     loop: true,
//     centerSlide: 'true',
//     fade: 'true',
//     grabCursor: true,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// });