/* affix the navbar after scroll below header */
$('.navbar-stream').affix({
      offset: {
        top: $('.stream').position().top
      }
});

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

$('.btn-login').on('click', function() {
  $('.login').toggleClass('open');
  $('.settings a').css('display', 'block');
});

$('.edit').on('click', function() {
  $(this).find('i').removeClass('fa-pencil');
  $(this).find('i').addClass('fa-circle-o-notch');
  $(this).find('i').addClass('fa-spin');
  $(this).find('span').text('');
});

var stream = $('.stream');
var position = stream.position();
var fixed = position.top - 90;
var set = 'translateY(-' + fixed + 'px)';
$('.stream .edit').on('click', function() {
  $('.stream').css({'-ms-transform': set});
  $('.stream').css({'-webkit-transform': set});
  $('.stream').css({'transform': set});
  $('input').css({'visibility': 'hidden'});
  $('.stream-nav').hide();
  $('.stream-nav-edit').show();
  $("html, body").animate({ scrollTop: 0 }, "slow");
});

$('.save').on('click', function() {
  $(this).find('i').removeClass('fa-check');
  $(this).find('i').addClass('fa-circle-o-notch');
  $(this).find('i').addClass('fa-spin');
  $(this).find('span').text('');
});


$('.col-flex').on('click', function() {
  $('.col-flex').not(this).removeClass('expand');
  $(this).toggleClass('expand');
});
