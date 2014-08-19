$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

$(document).keyup(function(e) {
  if(e.which == 27) {
    // enter pressed
    $('.login').toggleClass('open');
  }
});

$('.login .close').on('click', function() {
  $('.login').toggleClass('open');
});

$('.edit').on('click', function() {
  $(this).find('i').removeClass('fa-pencil');
  $(this).find('i').addClass('fa-circle-o-notch');
  $(this).find('i').addClass('fa-spin');
  $(this).find('span').text('');
});

var stream = $('.stream');
var position = stream.position();
var fixed = position.top - 50;
var set = 'translateY(-' + fixed + 'px)';
$('.stream .edit').on('click', function() {
  $('.stream').css({'-webkit-transform': set});
  $('.stream-nav').hide();
  $('.stream-nav-edit').show();
});

$('.save').on('click', function() {
  $(this).find('i').removeClass('fa-check');
  $(this).find('i').addClass('fa-circle-o-notch');
  $(this).find('i').addClass('fa-spin');
  $(this).find('span').text('');
});


$('.stream-content li').on('click', function() {
  $('.stream-content li').not(this).removeClass('col-md-6');
  $('.stream-content li').not(this).addClass('col-md-3');
  $(this).removeClass('col-md-3');
  $(this).addClass('col-md-6');
});
