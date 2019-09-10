'use strict';

(function(){


var templateSlide = document.getElementById('template-carousel-slide').innerHTML;

Mustache.parse(templateSlide);

var listSlide = '';

for(var i = 0; i < imageData.length; i++){
  console.log(imageData[i]);
  listSlide += Mustache.render(templateSlide, imageData[i]);
}




var carousel = document.querySelector('.main-carousel');

carousel.innerHTML += listSlide;
  

var flkty = new Flickity( carousel, {
  cellAlign: 'left',
  contain: true,
  imagesLoaded: true,
  percentPosition: false,
  hash: true,
});


var buttonGroup = document.querySelector('.button-group');
var buttons = buttonGroup.querySelectorAll('.button');
buttons = fizzyUIUtils.makeArray( buttons );

buttonGroup.addEventListener( 'click', function( event ) {
  // filter for button clicks
  if ( !matchesSelector( event.target, '.button' ) ) {
    return;
  }
  var index = buttons.indexOf( event.target );
  flkty.select( index );
});

var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});

})();












