//-------------------------------------------------------------------
//  Gradually fade hero headline as users scroll down
//-------------------------------------------------------------------
function fadeHero(event) {
  // Unless it's a touch device, apply subtle transformation
  // to the header as you scroll down. Touch excluded for now
  // for optimal performance. Does not exclude trackpads.
  if ('ontouchstart' in document.documentElement == false) {
    if (window.pageYOffset > 0) {
      $('.hero-image').css('opacity', (1 - (1/380) * window.pageYOffset ));
      //$('.spinner').css('opacity', (1 / (window.pageYOffset / 150)) - 0.3);
      //$('.hero-heading').css('bottom', (80 - (window.pageYOffset / 8)) + 'px');
    } else {
      $('.hero-image').css('opacity', 1);
      //$('.spinner').css('opacity', 1);
      //$('.hero-heading').css('bottom', '80px');
    }
  }
};
