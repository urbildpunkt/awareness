$('.login').hide();

$(document).keyup(function(e) {
  if(e.which == 27) {
    // enter pressed
    $('.login').slideToggle( 'slow' );
  }
});

$('.login .close').on('click', function() {
  $('.login').slideToggle('slow');
});

$('.stream-content li').on('click', function() {
  $('.stream-content li').not(this).removeClass('col-md-6');
  $('.stream-content li').not(this).addClass('col-md-3');
  $(this).removeClass('col-md-3');
  $(this).addClass('col-md-6');
});
