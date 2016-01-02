$(window).load(function(){
  $('.home_btn').addClass('active');
});

var class_selection = [
  $('.home_btn'),
  $('.about_btn'),
  $('.blog_btn'),
  $('.create_btn'),
  $('.contact_btn')
];

var i = 0;

// when a button is clicked, remove all instances of active besides the one that was clicked
var class_remove = function(class_name){
  $(this).removeClass('active');
  console.log('class removed');
};


// function to handle page toggling
function page_toggle(){

  // create a smart loop to determine what is being
  // clicked and run the function appropriately
  // based on what has been clicked

  // check to see if the about page is visible
  if($('#about').is(':visible')){
    $('.toggle_down').toggle();
    console.log('toggle activated');
  }
  else{
    $('.toggle_down').css('display','none');
  }

  if(!(($(this).is(':visible') && $('.toggle_down').is(':visible')))){
    $('.toggle_down i').click(function(){
      $('#about').slideToggle('fast');

      // change the active classes back to original state
      $('.main_nav ul li').removeClass('active');
      $('.home_btn').addClass('active');

      console.log('worked');
      // bring class back to original state

    });
  }
  else{
    console.log('something went wrong');
  }
};


// switch statement to toggle between actions
function active_add(click_option){


  switch(click_option){
    case 1:
    // add active class
      $('.home_btn').addClass('active');

      // remove all the other classes
      $('.about_btn').removeClass('active');
      $('.blog_btn').removeClass('active');
      $('.create_btn').removeClass('active');
      $('.contact_btn').removeClass('active');

      console.log('option 1 clicked');
      break;
    case 2:
      // add active class
      $('.about_btn').addClass('active');

      // remove all the other classes
      $('.home_btn').removeClass('active');
      $('.blog_btn').removeClass('active');
      $('create_btn').removeClass('active');
      $('.contact_btn').removeClass('active');

      $('#about').slideToggle('fast');
      page_toggle($('#about'));

      console.log('option 2 clicked');
      break;
    case 3:
      // add active class
      $('.blog_btn').addClass('active');

      // remove all other classes
      $('.home_btn').removeClass('active');
      $('.about_btn').removeClass('active');
      $('.create_btn').removeClass('active');
      $('.contact_btn').removeClass('active');

      console.log('option 3 clicked');
      break;
    case 4:
      // add active class
      $('.create_btn').addClass('active');

      $('.home_btn').removeClass('active');
      $('.about_btn').removeClass('active');
      $('blog_btn').removeClass('active');
      $('.contact_btn').removeClass('active');

      console.log('page not created yet, will link to admin.html');
      console.log('option 4 clicked');
      break;
    case 5:
      // add active class
      $('.contact_btn').addClass('active');

      $('.home_btn').removeClass('active');
      $('.about_btn').removeClass('active');
      $('blog_btn').removeClass('active');
      $('.create_btn').removeClass('active');

      console.log('option 5 clicked');
      break;
    default:
      // add active class in case something goes wrong
      $('home_btn').addClass('active');
      break;
  };
};
