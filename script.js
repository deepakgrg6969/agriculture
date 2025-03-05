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
  
  document.addEventListener('click', function(event) {
    const sideNav = document.getElementById('sideNav');
    const hamburger = document.querySelector('.hamburger-icon');
    
    if (!sideNav.contains(event.target) && !hamburger.contains(event.target)) {
        sideNav.classList.remove('active');
    }
});


function toggleNav() {
  document.getElementById("sideNav").classList.toggle("active");
}