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

  function animateMaskIn() {
    var maskStart = [0,0,110,0,200,100,0,100];
    var maskEnd = [0,0,9.89,0,16.51,100,0,100];
    maskStart.onUpdate = function() {
      TweenMax.set('.nav-main', {webkitClipPath:'polygon(' + maskEnd[0] + '% ' + maskEnd[1] + '%, ' + maskEnd[2] + '% ' + maskEnd[3] + '%, ' + maskEnd[4] + '% ' + maskEnd[5] + '%, ' + maskEnd[6] + '% ' + maskEnd[7] + '%)'});
    };
    maskStart.ease = Power2.easeOut;
    TweenLite.to(maskEnd, .25, maskStart);
  }

  function animateMaskOut() {
    var maskStart = [0,0,110,0,200,100,0,100];
    var maskEnd = [0,0,9.89,0,16.51,100,0,100];
    maskEnd.onUpdate = function() {
      TweenMax.set('.nav-main', {webkitClipPath:'polygon(' + maskStart[0] + '% ' + maskStart[1] + '%, ' + maskStart[2] + '% ' + maskStart[3] + '%, ' + maskStart[4] + '% ' + maskStart[5] + '%, ' + maskStart[6] + '% ' + maskStart[7] + '%)'});
    };
    maskEnd.ease = Power4.easeOut;;
    TweenLite.to(maskStart, .25, maskEnd);
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
