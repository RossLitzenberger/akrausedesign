


$('.home_btn').click(function(){
  if($('.about_me').is(':visible') && $('.about_me').hasClass('active')){
    $('.about_me').slideToggle('active');
    $('.about_me').toggleClass('active');

  }else{
    $(this).toggleClass('active');
  }
});

$('#discover').click(function(){

  if(!$('.about_btn').hasClass('active')){
    $('.about_btn').addClass('active');
  }
  else{
    $('.about_btn').removeClass('active');
  }

  $('.about_me').slideToggle("fast");
  $('.home_btn').toggleClass('active');
  $('.about_btn').toggleClass('active');
});


$('.about_btn').click(function(){
  $('.about_me').slideToggle('fast');
  $('.home_btn').toggleClass('active');
  $(this).toggleClass('active');
});

$('.about_me').click(function(){
  // hide any pages in front of this if it is clicked
  if($('#blogs').is(':visible')){
    $('#blogs').slideToggle('fast');
    console.log('blog page was hidden');

    if($('#contact').is(':visible')){
      $('#contact').slideToggle('fast');
      console.log('contact page was hidden');
    }
    else{
      console.log('contact page is not opened');
    }

    console.log('pages hidden');
  }
  else if($('#contact').is(':visible')){
    $('#contact').slideToggle('fast');
    console.log('contact page was hidden')
  }
  else{
    $(this).slideToggle();
    $('.about_me').removeClass('active');
    $('.home_btn').toggleClass('active');
    console.log('active buttons changed');
  }
});

$('.blog_btn').click(function(){
  $('#blogs').slideToggle('fast');
});

$('#blogs').click(function(){
  if($(this).is(":visible")){
    $(this).slideToggle('fast');
    console.log('blog page was hidden');
  }
});
$('.contact_btn').click(function(){
  $('#contact').slideToggle('fast');
  console.log('contact page was hidden');
});

$('#contact').click(function(){
  if($(this).is(':visible')){
    $(this).slideToggle('fast');
  }
});
