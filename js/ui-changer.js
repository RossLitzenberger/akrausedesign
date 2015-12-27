$('.pull-me').click(function(){
  $('.ui-changer-menu').slideToggle('fast');
  $(this).toggle();
});

$('.img_toggle').click(function(){
  switch(this){
    case "#column":
      console.log('column');
      break;
    case "#row":
      console.log('row');
      break;
    case "#border":
      console.log('border');
      break;
    case "#default":
      console.log('default');
      break;
    default:
      console.log('error');
      break;
  };
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
