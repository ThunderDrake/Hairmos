import SmoothScroll from 'smooth-scroll';
const scroll = new SmoothScroll('[data-scroll-anchor]',{
  offset: 150,
  speed: 500,
	speedAsDuration: true,
  easing: 'easeInOutQuart',
});

const upButton = document.querySelector('.to-up');
const footer = document.querySelector('.footer');

function checkOffset() {
  function getRectTop(el){
    const rect = el.getBoundingClientRect();
    return rect.top;
  }

  if((getRectTop(upButton) + document.body.scrollTop) + upButton.offsetHeight >= (getRectTop(footer) + document.body.scrollTop) - 10) {
    upButton.style.position = 'absolute';
    upButton.style.bottom = footer.offsetHeight + 'px';
  }
  if(document.body.scrollTop + window.innerHeight < (getRectTop(footer) + document.body.scrollTop)) {
    upButton.style.position = 'fixed'; // restore when you scroll up
    upButton.style.bottom = '5%';
  }
}

document.addEventListener("scroll", function(){
  checkOffset();
});

