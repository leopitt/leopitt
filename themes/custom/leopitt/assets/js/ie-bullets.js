/**
 * @file
 * Bug fix for IE bullets.
 */

(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.IEBullets = {
    attach: function (context, settings) {

      // Mitigate IE/Edge bug showing bullets on lists which are hidden when loading the page
      $(document).ready(function(){
          if (document.documentMode || /Edge/.test(navigator.userAgent)) {
              $('ul:hidden').each(function(){
                  $(this).parent().append($(this).detach());
              });
          }
      });

    }
  };

})(jQuery, Drupal);
