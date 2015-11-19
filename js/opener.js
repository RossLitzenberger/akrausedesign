$(document).ready(function(){

  $('.def-top-left').click(function(){
    $(this).toggleClass('def-top-left-open');
    $(this).toggleClass('importance');
  });

  $('.def-bottom-left').click(function(){
    $(this).toggleClass('def-bottom-left-open');
    $(this).toggleClass('importance');
  });

  $('.def-top-right').click(function(){
    $(this).toggleClass('def-top-right-open');
    $(this).toggleClass('importance');
  });

  $('.def-bottom-right').click(function(){
    $(this).toggleClass('def-bottom-right-open');
    $(this).toggleClass('importance');
  });

});
