const swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  loop: true,
  spaceBetween: 30,

  autoplay: {
    delay: 3000,

    stopOnLastSlide: false,

    disableOnInteractions: false
  }
});
