/**
 * @file
 * Navigation toggle.
 */

(function($) {

  $(document).ready(function () {

    $('.nav-toggle').bind('click', function() {
      $('.nav-main').toggleClass('visible');
      $(this).toggleClass('active');
    });

  });

})(jQuery);
