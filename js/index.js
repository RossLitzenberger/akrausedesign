
$(window).load(function(){
  $('.top').removeClass('blur');
  $('.middle').addClass('blur');
  $('.bottom').addClass('blur');
});

$(document).ready(function(){
  var i = 0;

  var top = $('.top');
  var middle = $('.middle');
  var bottom = $('.bottom');

  function importance(){
    $(this).css('z-index','3');
  }

  // when a blog is hovered, remove blur effect
  // and add it to others.

  // after hover, add blurs back to the original states

  // if else statements for beginning of hover
  top.hover(function(){
    $(this).removeClass('blur');
    middle.addClass('blur');
    bottom.addClass('blur');
    importance();
  }, function(){
    $(this).removeClass('blur');
    middle.addClass('blur');
    bottom.addClass('blur');
  });

  middle.hover(function(){
    top.addClass('blur');
    middle.removeClass('blur');
    bottom.addClass('blur');
    importance();
  }, function(){
    top.removeClass('blur');
    middle.addClass('blur');
    bottom.addClass('blur');
  });

  bottom.hover(function(){
    top.addClass('blur');
    middle.addClass('blur');
    bottom.removeClass('blur');
    importance();
  }, function(){
    top.removeClass('blur');
    middle.addClass('blur');
    bottom.addClass('blur');
  });

});
