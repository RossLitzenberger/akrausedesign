var about = $('#about').offset().top;
var bottom = $('#about').position().bottom;
$(window).scroll(function(){
  // var wScroll = $(this).scrollTop();
  // console.log(wScroll);

  if($(this).scrollTop() == 100%){

  }
  else{
    if(bottom >= 0){
      $('.about_me').css('position','fixed');
      $('.about_me').css('top','0');
      console.log('added');
   }
  }
});
