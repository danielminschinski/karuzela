
(function(){

var templateSlide = document.getElementById('template-carousel-slide').innerHTML;

Mustache.parse(templateSlide);

var slide = '';


for(var i = 0; i < imageData.length; i++){
    console.log(imageData);
    slide += Mustache.render(templateSlide, imageData[i]);
  }


var print = document.getElementById('print');

print.insertAdjacentHTML('beforeend', slide);


})();


var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  hash: true
    

});


var restart = document.querySelector('.button');

restart.addEventListener( 'click', function( event ) {
    flkty.select( 0 );
});
  



var $carousel = $('.main-carousel').flickity();

var $progressBar = $('.progress-bar');

$carousel.on( 'scroll.flickity', function( event, progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  $progressBar.width( progress * 100 + '%' );
});
