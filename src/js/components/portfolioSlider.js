import Swiper, { Navigation, Pagination } from 'swiper';

const portfolioSlider = document.querySelector('.portfolio__slider');

Swiper.use([Navigation, Pagination]);
const swiper = new Swiper(portfolioSlider, {
  slidesPerView: '3',
  spaceBetween: 60,
  centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
});
