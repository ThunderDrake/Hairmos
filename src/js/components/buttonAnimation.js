import anime from "animejs"

const heroButton = document.querySelector('.hero__button')

function animateButton(button) {
  const innerPathSelector = button.querySelector('.inner-svg-path');
  const outerPathSelector = button.querySelector('.outer-svg-path');
  const innerPath = anime.path(innerPathSelector);
  const outerPath = anime.path(outerPathSelector);

  anime({
    targets: '.inner-element',
    translateX: innerPath('x'),
    translateY: innerPath('y'),
    easing: 'linear',
    duration: 2000,
    loop: true
  })

  anime({
    targets: '.outer-element',
    translateX: outerPath('x'),
    translateY: outerPath('y'),
    easing: 'linear',
    duration: 3000,
    direction: 'reverse',
    loop: true
  })
}

animateButton(heroButton)
