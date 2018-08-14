/**
 * @file
 * Navigation click effect.
 */

(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.navClick = {
    attach: function (context, settings) {

      var maskElementSelector = '.page-nav-wrapper';
      var rippleCanvas = '.layout-ripple-canvas';
      var rippleHTML = '<span class="ripple"></span>';
      var rippleCount = 0;

      $(maskElementSelector, context).bind('click', function(event) {
        var rippleID = 'ripple-' + rippleCount;
        /* Get mouse x and y coords. */
        var x = event.pageX - $(this).offset().left;
        var y = event.pageY - $(this).offset().top;
        /* Create element at that position. */
        $(rippleCanvas).append($(rippleHTML).css({
          position: 'absolute',
          top: y,
          left: x
        }).attr('id', rippleID));
        /* Remove the element after a few seconds. */
        setTimeout(function(id){
          $('#' + id).remove();
        }, 4000, rippleID);
        /* Increment count. */
        rippleCount++;
      });

    }
  };

})(jQuery, Drupal);
