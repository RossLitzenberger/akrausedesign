$(document).ready(function(){
  var i = 0;

  var top = $('.top');
  var middle = $('.middle');
  var bottom = $('.bottom');

  // when a blog is hovered, remove blur effect
  // and add it to others.

  // after hover, add blurs back to the original states

  // if else statements for beginning of hover
  if(top.is(':active')){

    if(!(top.hasClass('blur'))){
      top.removeClass('blur');
      console.log('blur removed');
    }
    else if(!(middle.hasClass('blur'))){
      middle.addClass('blur');
      console.log('blur added');
    }
    else if(!(bottom.hasClass('blur'))){
      bottom.addClass('blur');
      console.log('blur added');
    }

  }

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
