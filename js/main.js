var about = $('#about').offset().top;
var bottom = $('#about').offset().bottom;
$(window).scroll(function(){
  // var wScroll = $(this).scrollTop();
  // console.log(wScroll);


});



$('#discover').click(function(){
  $('.about_me').slideToggle("fast");
});


$('.about_btn').click(function(){
  $('.about_me').slideToggle('fast');
})


$('.blog_btn').click(function(){
  $('#blogS').slideToggle("fast");
});
