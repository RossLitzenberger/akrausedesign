$(document).ready(function(){




  $('.pull-me').click(function(){
    $('.changer').slideToggle('fast');
  });

  $('.column-layout').click(function(){
    $('#top-left').toggleClass('def-top-left col-top-left');
    $('#bottom-left').toggleClass('def-bottom-left col-bottom-left');
    $('#top-right').toggleClass('def-top-right col-top-right');
    $('#bottom-right').toggleClass('def-bottom-right col-bottom-right');

    // grey out the other icons, except for the default one,
    // user must go back to the default view first.
    $('.row-layout').toggle('fast');
    $('.border-layout').toggle('fast');
  });

  $('.row-layout').click(function(){
    $('#top-left').toggleClass('def-top-left row-top-left');
    $('#bottom-left').toggleClass('def-bottom-left row-bottom-left');
    $('#top-right').toggleClass('def-top-right row-top-right');
    $('#bottom-right').toggleClass('def-bottom-right row-bottom-right');

    // grey out the other icons, except for the default one,
    // user must go back to the default view first.
    $('.column-layout').toggle('fast');
    $('.border-layout').toggle('fast');
  });

});
