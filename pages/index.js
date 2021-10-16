const individualShotsSizeBigSwiper = new Swiper('.individual-shoots__swiper_size-big', {
  navigation: {
    nextEl: '.individual-shoots__swiper_size-big-button-next',
    prevEl: '.individual-shoots__swiper_size-big-button-prev'
  },
  pagination: {
    el: '.individual-shoots__swiper_size-big-pagination',
    clickable: true,
  },
  loop: true,


  // autoplay: {
  //   delay: 3000,

  //   stopOnLastSlide: false,

  //   disableOnInteractions: true
  // }
});

const individualShotsSizeSmallSwiper = new Swiper('.individual-shoots__swiper_size-small', {
  navigation: {
    nextEl: '.individual-shoots__swiper_size-small-button-next',
    prevEl: '.individual-shoots__swiper_size-small-button-prev'
  },
  pagination: {
    el: '.individual-shoots__swiper_size-small-pagination',
    clickable: true,
  },
  loop: true,


  // autoplay: {
  //   delay: 3000,

  //   stopOnLastSlide: false,

  //   disableOnInteractions: true
  // }
});

const individualShotsSizeSmallBigScreenSwiper = new Swiper('.individual-shoots__swiper_size-small-big-screen', {
  navigation: {
    nextEl: '.individual-shoots__swiper_size-small-big-screen-button-next',
    prevEl: '.individual-shoots__swiper_size-small-big-screen-button-prev'
  },
  pagination: {
    el: '.individual-shoots__swiper_size-small-big-screen-pagination',
    clickable: true,
  },
  loop: true,


  // autoplay: {
  //   delay: 3000,

  //   stopOnLastSlide: false,

  //   disableOnInteractions: true
  // }
});

const aboutShotsSizeBigSwiper = new Swiper('.about-shoots__swiper_size-big', {
  navigation: {
    nextEl: '.about-shoots__swiper_size-big-button-next',
    prevEl: '.about-shoots__swiper_size-big-button-prev'
  },
  pagination: {
    el: '.about-shoots__swiper_size-big-pagination',
    clickable: true,
  },
  loop: true,


  // autoplay: {
  //   delay: 3000,

  //   stopOnLastSlide: false,

  //   disableOnInteractions: true
  // }
});

const aboutShotsSizeSmallSwiper = new Swiper('.about-shoots__swiper_size-small', {
  navigation: {
    nextEl: '.about-shoots__swiper_size-small-button-next',
    prevEl: '.about-shoots__swiper_size-small-button-prev'
  },
  pagination: {
    el: '.about-shoots__swiper_size-small-pagination',
    clickable: true,
  },
  loop: true,


  // autoplay: {
  //   delay: 3000,

  //   stopOnLastSlide: false,

  //   disableOnInteractions: true
  // }
});

const aboutShotsSizeSmallBigScreenSwiper = new Swiper('.about-shoots__swiper_size-small-big-screen', {
  navigation: {
    nextEl: '.about-shoots__swiper_size-small-big-screen-button-next',
    prevEl: '.about-shoots__swiper_size-small-big-screen-button-prev'
  },
  pagination: {
    el: '.about-shoots__swiper_size-small-big-screen-pagination',
    clickable: true,
  },
  loop: true,


  // autoplay: {
  //   delay: 3000,

  //   stopOnLastSlide: false,

  //   disableOnInteractions: true
  // }
});


const mediaQuery = window.matchMedia('(min-width: 1280px)');


if (mediaQuery.matches) {
  individualShotsSizeBigSwiper.controller.control = individualShotsSizeSmallBigScreenSwiper;
  individualShotsSizeSmallBigScreenSwiper.controller.control = individualShotsSizeBigSwiper;

  aboutShotsSizeBigSwiper.controller.control = aboutShotsSizeSmallBigScreenSwiper;
  aboutShotsSizeSmallBigScreenSwiper.controller.control = aboutShotsSizeBigSwiper;
} else {
  individualShotsSizeBigSwiper.controller.control = individualShotsSizeSmallSwiper;
  individualShotsSizeSmallSwiper.controller.control = individualShotsSizeBigSwiper;

  aboutShotsSizeBigSwiper.controller.control = aboutShotsSizeSmallSwiper;
  aboutShotsSizeSmallSwiper.controller.control = aboutShotsSizeBigSwiper;
}

window.addEventListener("resize", windowResizeListener);


function windowResizeListener() {
  if (mediaQuery.matches) {
    // Then trigger an alert
    individualShotsSizeBigSwiper.controller.control = individualShotsSizeSmallBigScreenSwiper;
    individualShotsSizeSmallBigScreenSwiper.controller.control = individualShotsSizeBigSwiper;
  } else {
    individualShotsSizeBigSwiper.controller.control = individualShotsSizeSmallSwiper;
    individualShotsSizeSmallSwiper.controller.control = individualShotsSizeBigSwiper;
  }
}
// Check if the media query is true
if (mediaQuery.matches) {
  // Then trigger an alert
  individualShotsSizeBigSwiper.controller.control = individualShotsSizeSmallBigScreenSwiper;
} else {

}
