
$(document).ready(function(){

  $('.pull-me').click(function(){
    $('.ui-changer-menu').slideToggle('fast');

  });

  $('#column-layout').click(function(){
    $(this).find('img').toggle();
    $('#row-layout').toggle('fast');
    $('#border-layout').toggle('fast');
    $('#default-layout').toggle('fast');
  });
  $('#row-layout').click(function(){
    $(this).find('img').toggle();
    $('#column-layout').toggle('fast');
    $('#border-layout').toggle('fast');
    $('#default-layout').toggle('fast');
  });
  $('#border-layout').click(function(){
    $(this).find('img').toggle();
    $('#row-layout').toggle('fast');
    $('#column-layout').toggle('fast');
    $('#default-layout').toggle('fast');
  });
  $('#default-layout').click(function(){
    $(this).find('img').toggle();
    $('#row-layout').toggle('fast');
    $('#column-layout').toggle('fast');
    $('#default-layout').toggle('fast');
  });

});
