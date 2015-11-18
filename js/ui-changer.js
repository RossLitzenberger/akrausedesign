
$(document).ready(function(){

  $('.pull-me').click(function(){
    $('.ui-changer-menu').slideToggle('fast');

  });

  $('#column-layout').click(function(){
    $(this).find('img').toggle();
    $('#row-layout').toggle('fast');
    $('#border-layout').toggle('fast');
    $('#default-layout').toggle('fast');

    // toggle classes when clicked
    $('#top-left').toggleClass('def-top-left col-top-left');
    $('#bottom-left').toggleClass('def-bottom-left col-bottom-left');
    $('#top-right').toggleClass('def-top-right col-top-right');
    $('#bottom-right').toggleClass('def-bottom-right col-bottom-right');
  });

  $('#row-layout').click(function(){
    $(this).find('img').toggle();
    $('#column-layout').toggle('fast');
    $('#border-layout').toggle('fast');
    $('#default-layout').toggle('fast');

    // toggle classes when clicked
    $('#top-left').toggleClass('def-top-left row-top-left');
    $('#bottom-left').toggleClass('def-bottom-left row-bottom-left');
    $('#top-right').toggleClass('def-top-right row-top-right');
    $('#bottom-right').toggleClass('def-bottom-right row-bottom-right');
  });

  $('#border-layout').click(function(){
    $(this).find('img').toggle();
    $('#row-layout').toggle('fast');
    $('#column-layout').toggle('fast');
    $('#default-layout').toggle('fast');

    // toggle classes when clicked
    $('#top-left').toggleClass('def-top-left border-top-left');
    $('#bottom-left').toggleClass('def-bottom-left border-bottom-left');
    $('#top-right').toggleClass('def-top-right border-top-right');
    $('#bottom-right').toggleClass('def-bottom-right border-bottom-right');
  });

  $('#default-layout').click(function(){
    $('#row-layout').toggle('fast');
    $('#column-layout').toggle('fast');
    $('#border-layout').toggle('fast');

    // reset all classes to the beginning
  });

});
