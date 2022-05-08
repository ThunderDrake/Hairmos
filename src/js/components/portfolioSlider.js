import Swiper, { Navigation, Pagination } from 'swiper';

const portfolioSlider = document.querySelector('.portfolio__slider');

Swiper.use([Navigation, Pagination]);
const swiper = new Swiper(portfolioSlider, {
  centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  breakpoints: {
    320: {
      slidesPerView: '1',
    },
    376: {
      slidesPerView: '1.5',
    },
    768: {
      slidesPerView: '1.75',
      spaceBetween: 0,
    },
    1200: {
      slidesPerView: '3',
      spaceBetween: 60,
    }
  }
});
