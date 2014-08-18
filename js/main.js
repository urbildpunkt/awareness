$('.login').hide();

$(document).keyup(function(e) {
  if(e.which == 27) {
    // enter pressed
    $('.login').slideToggle( 'slow' );
  }
});

$( ".login .close" ).on( "click", function() {
  $('.login').slideToggle( 'slow' );
});
