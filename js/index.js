
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

  function addBlur(t,m,b){
    t.removeClass('blur');
    m.addClass('blur');
    b.addClass('blur');
  }

  function blurReset(t,m,b){
    t.removeClass('blur');
    m.addClass('blur');
    b.addClass('blur');
  }

  function reorder(important, mid, btm){

    // change z-index importance
    important.css('z-index','3');
    mid.css('z-index','2');
    btm.css('z-index','1');

    // add blurs
    important.removeClass('blur');
    mid.addClass('blur');
    btm.addClass('blur');
  }
  function unorder(){

    // change z-index importance back to normal
    top.css('z-index','3');
    middle.css('z-index','2');
    bottom.css('z-index','1');

    // put blurs back to normal
    blurReset(top, middle, bottom);
  }

  // when a blog is hovered, remove blur effect
  // and add it to others.

  // after hover, add blurs back to the original states

  // if else statements for beginning of hover
  top.hover(function(){
    reorder(top,middle,bottom);
  }, function(){
    unorder();
  });

  middle.hover(function(){
    reorder(middle,top,bottom);
  }, function(){
    unorder();
  });

  bottom.hover(function(){
    reorder(bottom,middle,top);
  }, function(){
    unorder();
  });

});
