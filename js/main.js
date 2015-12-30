



$('#discover').click(function(){
  $('.about_me').slideToggle("fast");
  $('.about_btn').toggleClass('blur');
});


$('.about_btn').click(function(){
  $('.about_me').slideToggle('fast');
  $(this).toggleClass('blur');
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
