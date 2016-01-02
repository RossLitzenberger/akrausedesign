
var class_selection = [
  $('.home_btn'), // 0
  $('.about_btn'), // 1
  $('.blog_btn'), // 2
  $('.create_btn'), // 3
  $('.contact_btn') // 4
];

var i = 0;
/*
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

*/
// when button is clicked, add active class to it
var class_add = function(){
  $(this).addClass('active');
  // check to see if the class were added or not
  if(!($(this).hasClass(""))){
    console.log('class added')
  }
  else{
    console.log('no classes added');
  }
}


// when a button is clicked, remove all instances of active besides the one that was clicked
var class_remove = function(class_name){
  $(this).removeClass('active');
  console.log('class removed');
};



function active_add(click_option){
  switch(click_option){
    case 1:
      class_add();
      console.log('option 1 clicked');


      break;
    case 2:
      class_add();
      console.log('option 2 clicked');


      break;
    case 3:
      class_add();
      console.log('option 3 clicked');


      break;
    case 4:
      class_add();
      console.log('option 4 clicked');


      break;
    case 5:
      class_add();
      console.log('option 5 clicked');


      break;
    default:
      $('home_btn').addClass('active');


      break;
  };
};


if($('.home_btn').is('clicked')){
  for(i in class_selection){
    if(i == 0){
      i++;
    }
    class_remove(i);
  }
}
else if($('.about_btn').is('clicked')){
  for(i in class_selection){
    if(i == 1){
      i++;
    }
    class_remove(i);
  }
}
else if($('.blog_btn').is('clicked')){
  for(i in class_selection){
    if(i == 2){
      i++;
    }
    class_remove(i);
  }
}
else if($('.create_btn').is('clicked')){
  for(i in class_selection){
    if(i == 3){
      i++;
    }
    class_remove(i);
  }
}
else if($('.contact_btn').is('clicked')){
  for(i in class_selection){
    if(i == 4){
      i++;
    }
    class_remove(i);
  }
}
else{
  console.log('error, no classes were added at all. please reload.');
}
