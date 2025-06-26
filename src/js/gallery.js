import Swiper from 'swiper';
import 'swiper/css/bundle';

let gallerySwiper;

gallerySwiper = new Swiper('.gallery-swiper-container', {
  direction: 'horizontal',
  loop: false,
  grabCursor: true,
  slidesPerView: 1,
  centeredSlides: false,
  initialSlide: 0,
  spaceBetween: 16,
  grabCursor: true,
  allowTouchMove: true,
  speed: 500,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    1440: {
      grabCursor: false,
      allowTouchMove: false,
      spaceBetween: 24,
      initialSlide: 0,
      slidesPerView: 3,
    },
  },
  on: {
    init: () => {
      document.querySelector('.gallery-swiper-container').classList.add('show');
    },
  },
});
