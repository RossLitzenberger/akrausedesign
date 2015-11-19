
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

    // toggle the icons to new positions
    $('#tl-icon').toggleClass('icon1 icon1-column');
    $('#bl-icon').toggleClass('icon2 icon2-column');
    $('#tr-icon').toggleClass('icon3 icon3-column');
    $('#br-icon').toggleClass('icon4 icon4-column');
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

    // toggle the icons to new positions
    $('#tl-icon').toggleClass('icon1 icon1-row');
    $('#bl-icon').toggleClass('icon2 icon2-row');
    $('#tr-icon').toggleClass('icon3 icon3-row');
    $('#br-icon').toggleClass('icon4 icon4-row');
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

    // toggle the icons to new positions
    $('#tl-icon').toggleClass('icon1 icon1-border');
    $('#bl-icon').toggleClass('icon2 icon2-border');
    $('#tr-icon').toggleClass('icon3 icon3-border');
    $('#br-icon').toggleClass('icon4 icon4-border');
  });

  $('#default-layout').click(function(){
    $('#row-layout').toggle('fast');
    $('#column-layout').toggle('fast');
    $('#border-layout').toggle('fast');

    // reset all classes to the beginning
  });

});
