
$(document).ready(function(){

  $('.pull-me').click(function(){
    $('.ui-changer-menu').slideToggle('fast');
    $(this).toggle();
  });

  $('#close').click(function(){
    $('.ui-changer-menu').slideToggle('fast');
    $('.pull-me').toggle();
  });

  $('#close').hover(
    function(){
      $(this).find('img').toggle();
    },
    function(){
      $(this).find('img').toggle();
    }
  );

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
  });

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
