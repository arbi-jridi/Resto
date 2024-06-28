var swiper = new Swiper(".home", {
    spaceBetween: 2,
    centeredSlides: true,
    // loop: true,
    autoplay: {
      delay: 3200,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

let menu = document.querySelector('#menu-icon')
let navBar = document.querySelector('.navbar')

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navBar.classList.toggle('active');
}

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navBar.classList.remove('active');
}