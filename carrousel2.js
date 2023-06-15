const slider = tns({
  container: '.slider-inner',
  items: 1,
  nav: false,
  mouseDrag: true,
  swipeAngle: true,
  preventScrollOnTouch: 'auto',
  speed: 1000,
  controlsContainer: document.querySelector('.slider-nav'),
  prevButton: document.querySelector('.slider-prev'),
  nextButton: document.querySelector('.slider-next'),
});