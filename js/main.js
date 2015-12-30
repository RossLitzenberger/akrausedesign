



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
  $('#blogs').slideToggle("fast");
});

if($('#blogs').is(":visible")){
  $('.main_nav').css('display','block');
}
else{
  $('.main_nav').css('display','inline-block');
}
