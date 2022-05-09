import anime from "animejs";
import AOS from 'aos';

const init = () => {
window.onload = function() {
  const bigImageContainer = document.querySelector('.hero__big-image');
  const bigImage = bigImageContainer.querySelector('.hero__big-image-image');
  const header = document.querySelector('.header');
  const firstImageContainer = document.querySelector('.hero__image-wrapper--first');
  const firstImage = firstImageContainer.querySelector('.hero__image');
  const secondImageContainer = document.querySelector('.hero__image-wrapper--second');
  const secondImage = secondImageContainer.querySelector('.hero__image');
  const title = document.querySelector('.hero__title');
  const subtitle = document.querySelector('.hero__subtitle');
  const button = document.querySelector('.hero__button');

  const tl = anime.timeline({
    easing: 'easeInOutQuad',
    duration: 750
  })

  tl.add({
    targets: title,
    opacity: 1,
    translateY: [50, 0],
    delay: 500
  })
  .add({
    targets: subtitle,
    opacity: 1,
    translateY: [50, 0]
  }, '+=100')
  .add({
    targets: header,
    translateY: [-100, 0]
  }, '+=500')
  .add({
    targets: bigImageContainer,
    translateX: ['100%', '0']
  }, '-=500')
  .add({
    targets: bigImage,
    translateX: ['-100%', '0']
  }, '-=750')
  .add({
    targets: firstImageContainer,
    translateY: ['100%', '0']
  }, '-=100')
  .add({
    targets: firstImage,
    translateY: ['-100%', '0']
  }, '-=750')
  .add({
    targets: secondImageContainer,
    translateX: ['100%', '0']
  }, '-=550')
  .add({
    targets: secondImage,
    translateX: ['-100%', '0']
  }, '-=750')
  .add({
    targets: button,
    opacity: [0, 1]
  }, '+=150')


  AOS.init({
    once: true,
    offset: 50
  });
}
}

init();
