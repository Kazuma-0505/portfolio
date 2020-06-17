const mySwiper = new Swiper ('.swiper-container', {
  loop: true,
  autoplay: {
      delay: 5000,
      disableOnInteraction: true,
  },
  slidesPerView: 1.5,
  centeredSlides: true,
  spaceBetween: 30,
  breakpoints: {
      1024: {
          slidesPerView: 4,
          centeredSlides: true,
          spaceBetween: 56,
      },
      480: {
          slidesPerView: 3,
          centeredSlides: true,
      },
  },
    // Optional parameters
    // direction: 'vertical',
    // slidesPerView: 3,
    // spaceBetween: 30,
    // freeMode: true,
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    // },
  })