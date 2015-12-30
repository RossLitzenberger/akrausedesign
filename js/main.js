



$('.home_btn').click(function(){
  if($('.about_me').is(':visible') && $('.about_me').hasClass('active')){
    $('.about_me').slideToggle('active');
    $('.about_me').toggleClass('active');

  }else{
    $(this).toggleClass('active');
  }
});

$('#discover').click(function(){
  $('.about_me').slideToggle("fast");
  $('.home_btn').toggleClass('active');
  $('.about_btn').toggleClass('active');
});


$('.about_btn').click(function(){
  $('.about_me').slideToggle('fast');
  $('.home_btn').toggleClass('active');
  $(this).toggleClass('active');
})


$('.blog_btn').click(function(){
  $('#blogs').toggleClass('blog_open');
});

if($('#blogs').is(":visible")){
  $('.main_nav').css('display','block');
}
else{
  $('.main_nav').css('display','inline-block');
}
