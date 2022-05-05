import anime from "animejs"

const aboutPath = anime.path('#svg-path');

anime({
  targets: '.about__image-element',
  translateX: aboutPath('x'),
  translateY: aboutPath('y'),
  easing: 'linear',
  duration: 12000,
  loop: true
})
