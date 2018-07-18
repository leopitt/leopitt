/**
 * @file
 * Navigation toggle.
 */

(function($) {

  var elementColor = '#bd1857';
  var numCols = 20;
  var numRows = 10;
  var numElements = numCols * numRows;
  var canvasClass = '.animate-canvas'
  var delayBetweenAnimations = .001;

  function build() {
    var canvas = $(canvasClass);
    var elementHeight = canvas.height() / numRows;
    var elementWidth = canvas.width() / numCols;
    var x = 0;
    var y = 0;

    // Delete any existing elements.
    $('.animate-item').remove();

    // Create elements.
    for (var i = 0; i < numElements; i++) {
      // calculate current col and row
      row = i % numRows;
      col = Math.floor(i / numRows);
      // Create element.
      var animateItem = $('<div></div>').addClass('animate-item').addClass('animate-item-' + i).css({
        'display': 'block',
        'background-color': elementColor,
        'height': elementHeight + 'px',
        'width': elementWidth + 'px',
        'position': 'absolute',
        'z-index': -1,
        'top': (elementHeight * row) + 'px',
        'left': (elementWidth * col) + 'px',
      });
      TweenMax.set(animateItem, {scaleY: 0, rotation: 45, transformOrigin: '50% 50%'});
      canvas.append(animateItem);
      console.log('Loop end.');
    };
  }

  function animate() {
    // Animate elements.
    for (var i = 0; i < numElements; i++) {
      var animateItem = $('.animate-item-' + i);
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
