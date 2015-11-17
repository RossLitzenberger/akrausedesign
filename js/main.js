$(document).ready(function(){




  $('.pull-me').click(function(){
    $('.changer').slideToggle('fast');
  });

  // column layout clicking action
  $('.column-layout').click(function(){
    $('#top-left').toggleClass('def-top-left col-top-left');
    $('#bottom-left').toggleClass('def-bottom-left col-bottom-left');
    $('#top-right').toggleClass('def-top-right col-top-right');
    $('#bottom-right').toggleClass('def-bottom-right col-bottom-right');

    // grey out the other icons, except for the default one,
    // user must go back to the default view first.
    $('.row-layout').toggle('fast');
    $('.border-layout').toggle('fast');
    $('.default-layout').toggle('fast');
  });
  /*
  $('.column-layout').click(function(){
    $('#top-left').toggleClass('row-top-left col-top-left');
    $('#bottom-left').toggleClass('row-bottom-left col-bottom-left');
    $('#top-right').toggleClass('row-top-right col-top-right');
    $('#bottom-right').toggleClass('row-bottom-right col-bottom-right');
  }); */

  // row layout clicking action
  $('.row-layout').click(function(){
    $('#top-left').toggleClass('def-top-left row-top-left');
    $('#bottom-left').toggleClass('def-bottom-left row-bottom-left');
    $('#top-right').toggleClass('def-top-right row-top-right');
    $('#bottom-right').toggleClass('def-bottom-right row-bottom-right');

    // grey out the other icons, except for the default one,
    // user must go back to the default view first.
    $('.column-layout').toggle('fast');
    $('.border-layout').toggle('fast');
    $('.default-layout').toggle('fast');
  });

  $('.row-layout').click(function(){
    $('#top-left').toggleClass('col-top-left row-top-left');
    $('#bottom-left').toggleClass('col-bottom-left row-bottom-left');
    $('#top-right').toggleClass('col-top-right row-top-right');
    $('#bottom-right').toggleClass('col-bottom-right row-bottom-right');
  }); 

  // border layout clicking action
  $('.border-layout').click(function(){
    $('#top-left').toggleClass('def-top-left border-top-left');
    $('#bottom-left').toggleClass('def-bottom-left border-bottom-left');
    $('#top-right').toggleClass('def-top-right border-top-right');
    $('#bottom-right').toggleClass('def-bottom-right border-bottom-right');

    // grey out the other icons, except for the default one,
    // user must go back to the default view first.
    $('.column-layout').toggle('fast');
    $('.row-layout').toggle('fast');
    $('.default-layout').toggle('fast');
  });

});
