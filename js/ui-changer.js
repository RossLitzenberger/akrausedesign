$(document).ready(function(){
  $('.pull-me').click(function(){
    $('.changer').slideToggle('fast');
  });

  $('.column-layout').click(function(){
    $(this).find('img').toggle();
    $('.row-layout').toggle();
    $('.border-layout').toggle();
  });
  $('.row-layout').click(function(){
    $(this).find('img').toggle();
    $('.column-layout').toggle();
    $('.border-layout').toggle();
  });
  $('.border-layout').click(function(){
    $(this).find('img').toggle();
    $('row-layout').toggle();
    $('.column-layout').toggle();
  });

});
