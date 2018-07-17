/**
 * @file
 * Navigation toggle.
 */

(function($) {

  function animateToggleIn() {
    // Reset positions
    TweenMax.set('.bar:nth-child(2)', {scaleX: 1});
    // Animate
    TweenMax.to('.bar:nth-child(1)', .125, {y: 7, rotation: '+=45', ease:Power1.easeOut});
    TweenMax.to('.bar:nth-child(2)', .125, {scaleX: 0.20689655172414, ease:Power1.easeOut});
    TweenMax.to('.bar:nth-child(3)', .125, {y: -7, rotation: '+=45', ease:Power1.easeOut});
  }

  function animateToggleOut() {
    TweenMax.to('.bar:nth-child(1)', .125, {y: 0, rotation: '+=45', ease:Power2.easeOut});
    TweenMax.to('.bar:nth-child(2)', .125, {scaleX: 1, ease:Power2.easeOut});
    TweenMax.to('.bar:nth-child(3)', .125, {y: 0, rotation: '+=45', ease:Power2.easeOut});
  }

  $(document).ready(function () {

    $('.nav-toggle').bind('click', function() {
      if (!$(this).hasClass('active')) {
        $('.nav-main').toggleClass('visible');
        $(this).toggleClass('active');
        animateToggleIn();
        animateMaskIn();
      }
      else {
        $('.nav-main').removeClass('visible');
        $(this).removeClass('active');
        animateToggleOut();
        animateMaskOut();
      }
    });

  });

})(jQuery);
