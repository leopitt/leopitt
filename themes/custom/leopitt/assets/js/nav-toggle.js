/**
 * @file
 * Navigation toggle.
 */

(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.navToggle = {
    attach: function (context, settings) {

      var breakpointMin = 1024;
      var navToggleSelector = '.nav-toggle';
      var maskElementSelector = '.page-nav-wrapper';

      function animateToggleIn() {
        // Reset positions
        TweenMax.set('.bar:nth-child(2)', {scaleX: 1});
        // Animate
        if ($(window).width() < breakpointMin) {
          TweenMax.to('.bar:nth-child(1)', .125, {y: 3, rotation: '+=45', ease:Power1.easeOut});
          TweenMax.to('.bar:nth-child(2)', .125, {scaleX: 0.20689655172414, ease:Power1.easeOut});
          TweenMax.to('.bar:nth-child(3)', .125, {y: -3, rotation: '+=45', ease:Power1.easeOut});
        }
        else {
          TweenMax.to('.bar:nth-child(1)', .125, {y: 7, rotation: '+=45', ease:Power1.easeOut});
          TweenMax.to('.bar:nth-child(2)', .125, {scaleX: 0.20689655172414, ease:Power1.easeOut});
          TweenMax.to('.bar:nth-child(3)', .125, {y: -7, rotation: '+=45', ease:Power1.easeOut});
        }
      }

      function animateToggleOut() {
        TweenMax.to('.bar:nth-child(1)', .125, {y: 0, rotation: '+=45', ease:Power2.easeOut});
        TweenMax.to('.bar:nth-child(2)', .125, {scaleX: 1, ease:Power2.easeOut});
        TweenMax.to('.bar:nth-child(3)', .125, {y: 0, rotation: '+=45', ease:Power2.easeOut});
      }

      function animateMaskIn() {
        /* Animate mask if the browser supports it. */
        if ($('html').hasClass('cssmask')) {

          if ($(window).width() < breakpointMin) {
            var maskStart = [0,0,2,0,2,100,0,100];
            var maskEnd = [0,0,100,0,100,100,0,100];
          }
          else {
            var maskStart = [0,0,9.89,0,16.51,100,0,100];
            var maskEnd = [0,0,110,0,116,100,0,100];
          }

          maskEnd.onUpdate = function() {
            TweenMax.set(maskElementSelector, {webkitClipPath:'polygon(' + maskStart[0] + '% ' + maskStart[1] + '%, ' + maskStart[2] + '% ' + maskStart[3] + '%, ' + maskStart[4] + '% ' + maskStart[5] + '%, ' + maskStart[6] + '% ' + maskStart[7] + '%)'});
          };

          maskEnd.ease = Power2.easeOut;
          TweenLite.to(maskStart, .25, maskEnd);
        }
        /* If browser does not support it, just display the mask element. */
        else {
          $(maskElementSelector).css('display', 'block');
        }
      }

      function animateMaskOut() {
        /* Animate mask if the browser supports it. */
        if ($('html').hasClass('cssmask')) {

          if ($(window).width() < breakpointMin) {
            var maskStart = [0,0,2,0,2,100,0,100];
            var maskEnd = [0,0,100,0,100,100,0,100];
          }
          else {
            var maskStart = [0,0,9.89,0,16.51,100,0,100];
            var maskEnd = [0,0,110,0,116,100,0,100];
          }

          maskStart.onUpdate = function() {
            TweenMax.set(maskElementSelector, {webkitClipPath:'polygon(' + maskEnd[0] + '% ' + maskEnd[1] + '%, ' + maskEnd[2] + '% ' + maskEnd[3] + '%, ' + maskEnd[4] + '% ' + maskEnd[5] + '%, ' + maskEnd[6] + '% ' + maskEnd[7] + '%)'});
          };

          maskStart.onComplete = function() {
            $(maskElementSelector, context).removeClass('visible');
          }

          maskStart.ease = Elastic.easeOut;;
          TweenLite.to(maskEnd, .75, maskStart);
        }
        /* If browser does not support it, just hide the mask element. */
        else {
          $(maskElementSelector).css('display', 'none');
        }
      }

      $(navToggleSelector, context).bind('click', function() {
        if (!$(this).hasClass('active')) {
          $(maskElementSelector, context).toggleClass('visible');
          $(this).toggleClass('active');
          animateToggleIn();
          animateMaskIn();
        }
        else {
          $(this).removeClass('active');
          animateToggleOut();
          animateMaskOut();
        }
      });

    }
  };

})(jQuery, Drupal);
