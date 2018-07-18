/**
 * @file
 * Navigation toggle.
 */

(function($) {

  var animateItemClass = 'nav-animate-item';
  var elementColor = '#bd1857';
  var numCols = 20;
  var numRows = 10;
  var numElements = numCols * numRows;
  var canvasClass = '#nav-clip'
  var refClass = 'body';
  var delayBetweenAnimations = .001;

  function build() {
    var canvas = $(canvasClass);
    var ref = $(refClass);
    var elementHeight = ref.height() / numRows;
    var elementWidth = ref.width() / numCols;
    var x = 0;
    var y = 0;

    // Delete any existing elements.
    $('.' + animateItemClass).remove();

    // Create elements.
    for (var i = 0; i < numElements; i++) {
      // calculate current col and row
      row = i % numRows;
      col = Math.floor(i / numRows);
      // Create element.
      var animateItem = $('<rect x="' + (elementWidth * col) + '" y="' + (elementHeight * row) + '" width="' + elementWidth + '" height="' + elementHeight + '" />').addClass('bg-highlight').addClass(animateItemClass).addClass(animateItemClass + '-' + i);
      //TweenMax.set(animateItem, {scaleY: 0, rotation: 45, transformOrigin: '50% 50%'});
      canvas.append(animateItem);
      console.log('Loop end.');
    };
  }

  function animate() {
    // Animate elements.
    for (var i = 0; i < numElements; i++) {
      var animateItem = $('.' + animateItemClass + '-' + i);
      TweenMax.to(animateItem, 1, {scaleY: 1, rotation: 0, ease:Power4.easeOut, delay: (delayBetweenAnimations * i)});
    }
  }

  $(document).ready(function () {

    $('.build').bind('click', function() {
      build();
    });

    $('.animate').bind('click', function() {
      animate();
    });

  });

})(jQuery);
