$('.pull-me').click(function(){
  $('.ui-changer-menu').slideToggle('fast');
  $(this).toggle();
});

flipper('.img_toggle');

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
