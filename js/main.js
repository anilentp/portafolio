$( document ).ready(function(){
	$(".button-collapse").sideNav();
	$('.carousel.carousel-slider').carousel({full_width: true});
  // Next slide
  $('.carousel').carousel('next');
  
  // Previous slide
  $('.carousel').carousel('prev');
  
  

/*
	 var options = [
    {selector: '.habilidad', offset: 200, callback: customCallbackFunc } },
    {selector: '.habilidad', offset: 200, callback: function() {
      customCallbackFunc();
    } },
  ];
  Materialize.scrollFire(options);
    

    var options = [ 
    {selector: '#staggered-test', offset: 50, callback: function(el) 
    { Materialize.toast("This is our ScrollFire Demo!", 1500 ); } }, 
    {selector: '#staggered-test', offset: 205, callback: function(el) { Materialize.toast("Please continue scrolling!", 1500 ); } }, 
    {selector: '#staggered-test', offset: 400, callback: function(el) { Materialize.showStaggeredList($(el)); } }, 
    {selector: '#image-test', offset: 500, callback: function(el) { Materialize.fadeInImage($(el)); } } ]; 
    Materialize.scrollFire(options); 
*/
});
