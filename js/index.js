
$(window).onLoad(function(){
  $('.top').removeClass('blur');
  $('.middle').addClass('blur');
  $('.bottom').addClass('blur');
});

$(document).ready(function(){
  var i = 0;

  var top = $('.top');
  var middle = $('.middle');
  var bottom = $('.bottom');

  // when a blog is hovered, remove blur effect
  // and add it to others.

  // after hover, add blurs back to the original states

  // if else statements for beginning of hover


  else if(middle.is(':active')){
    top.addClass('blur');
    middle.removeClass('blur');
    bottom.addClass('blur');

  }
  else if(bottom.is(':active')){
    top.addClass('blur');
    middle.addClass('blur');
    bottom.removeClass('blur');
  }
});
