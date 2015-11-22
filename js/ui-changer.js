
$(document).ready(function(){



  // remove these classes when another layout has been triggered

  $('#top-left').click(function(){
    $(this).toggleClass('def-top-left def-top-left-open');
  });
  $('#bottom-left').click(function(){
    $(this).toggleClass('def-bottom-left def-bottom-left-open');
  });
  $('#top-right').click(function(){
    $(this).toggleClass('def-top-right def-top-right-open');
  });
  $('#bottom-right').click(function(){
    $(this).toggleClass('def-bottom-right def-bottom-right-open');
  });



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



    // something here that can make the windows open


  $('#column-layout').click(function(){
    // toggle the images when they are clicked
    $(this).find('img').toggle();

    // hide the other buttons so that you have to go
    // back to the default layout first
    $('#row-layout').toggle('fast');
    $('#border-layout').toggle('fast');
    $('#default-layout').toggle('fast');

    // toggle classes when clicked
    $('#top-left').toggleClass('def-top-left col-top-left');
    $('#bottom-left').toggleClass('def-bottom-left col-bottom-left');
    $('#top-right').toggleClass('def-top-right col-top-right');
    $('#bottom-right').toggleClass('def-bottom-right col-bottom-right');


    // something here that makes the windows open

    // windows not opening correclty
    $('.col-top-left').click(function(){
      // toggle between open and close
      $(this).toggleClass('col-top-left col-top-left-open');
    });
    $('.col-bottom-left').click(function(){
      // toggle between open and close
      $(this).toggleClass('col-bottom-left col-bottom-left-open');
    });
    $('.col-top-right').click(function(){
      // toggle between open and close
      $(this).toggleClass('col-top-right col-top-right-open');
    });
    $('.col-bottom-right').click(function(){
      // toggle between open and close
      $(this).toggleClass('col-bottom-right col-bottom-right-open');
    });
  });

  $('#row-layout').click(function(){
    // toggle between the different images
    $(this).find('img').toggle();

    // toggle on and off the other images so the user
    // must go back to the default layout first.
    $('#column-layout').toggle('fast');
    $('#border-layout').toggle('fast');
    $('#default-layout').toggle('fast');

    // toggle classes when clicked
    $('#top-left').toggleClass('def-top-left row-top-left');
    $('#bottom-left').toggleClass('def-bottom-left row-bottom-left');
    $('#top-right').toggleClass('def-top-right row-top-right');
    $('#bottom-right').toggleClass('def-bottom-right row-bottom-right');


    // something here that makes the windows open

    $('#top-left').click(function(){
      // toggle between open and close
      $(this).toggleClass('row-top-left row-top-left-open');
    });
    $('#bottom-left').click(function(){
      // toggle between open and close
      $(this).toggleClass('row-bottom-left row-bottom-left-open');
    });
    $('#top-right').click(function(){
      // toggle between open and close
      $(this).toggleClass('row-top-right row-top-right-open');
    });
    $('#bottom-right').click(function(){
      // toggle between open and close
      $(this).toggleClass('row-bottom-right row-bottom-right-open');
    });
  });

  $('#border-layout').click(function(){
    // toggle between the two images
    $(this).find('img').toggle();

    // toggle on and off the other images so that
    // the user has to go back to the default layout first.
    $('#row-layout').toggle('fast');
    $('#column-layout').toggle('fast');
    $('#default-layout').toggle('fast');

    // toggle classes when clicked
    $('#top-left').toggleClass('def-top-left border-top-left');
    $('#bottom-left').toggleClass('def-bottom-left border-bottom-left');
    $('#top-right').toggleClass('def-top-right border-top-right');
    $('#bottom-right').toggleClass('def-bottom-right border-bottom-right');


    // something here that makes the windows open

    $('#top-left').click(function(){
      // toggle between open and close
      $(this).toggleClass('border-top-left border-top-left-open');
    });
    $('#bottom-left').click(function(){
      // toggle between open and close
      $(this).toggleClass('border-bottom-left border-bottom-left-open');
    });
    $('#top-right').click(function(){
      // toggle between open and close
      $(this).toggleClass('border-top-right border-top-right-open');
    });
    $('#bottom-right').click(function(){
      // toggle between open and close
      $(this).toggleClass('border-bottom-right border-bottom-right-open');
    });
  });

  $('#default-layout').click(function(){
    // these arent required because it is already in default
    // mode, but I just want to follow the same style as
    // with the others. 
    $('#row-layout').toggle('fast');
    $('#column-layout').toggle('fast');
    $('#border-layout').toggle('fast');
  });


});
