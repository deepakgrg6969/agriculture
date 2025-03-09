var swiper = new Swiper(".mySwiper", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },

  breakpoints: {
    1020: {
      slidesPerView: 2,
    },
  },
  mousewheel: true,
  keyboard: true,
});

let navbar = document.querySelector(".navigation .nav-links");
let menu = document.querySelector("#menu-btn");

menu.onclick = () => {
  navbar.classList.toggle("active");
};


window.onscroll = () => {
  navbar.classList.remove("active")
}