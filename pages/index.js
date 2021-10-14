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

individualShotsSizeBigSwiper.controller.control = individualShotsSizeSmallSwiper;
individualShotsSizeSmallSwiper.controller.control = individualShotsSizeBigSwiper;

aboutShotsSizeBigSwiper.controller.control = aboutShotsSizeSmallSwiper;
aboutShotsSizeSmallSwiper.controller.control = aboutShotsSizeBigSwiper;
