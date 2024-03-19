///////HERO CAROUSEL//////////
var swiper = new Swiper(".mySwiper", {
    direction: "horizontal",
    loop: "true",

    autoplay: {
      delay:3000,
      // disableOnInteraction: false,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });