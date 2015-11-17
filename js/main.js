$(document).ready(function(){




  $('.pull-me').click(function(){
    $('.changer').slideToggle('fast');
  });

  $('.column-layout').click(function(){
    $('.top-left').toggleClass('col-top-left')
    $('.bottom-left').toggleClass('col-bottom-left');
    $('.top-right').toggleClass('col-top-right');
    $('.bottom-right').toggleClass('col-bottom-right');
    $('.changer').slideToggle('fast');
  });

  $('.row-layout').click(function(){
    $('.top-left').toggleClass('row-top-left');
    $('.bottom-left').toggleClass('row-bottom-left');
    $('.top-right').toggleClass('row-top-right');
    $('.bottom-right').toggleClass('row-bottom-right');
    $('.changer').slideToggle('fast');
  });


/*
  $('.border-layout').click(function(){
    $('.top-left');
    $('.bottom-left');
    $('.top-right');
    $('.bottom-right');
  }); */
});
