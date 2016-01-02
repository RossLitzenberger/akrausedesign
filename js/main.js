$(window).load(function(){
  $('.home_btn').addClass('active');
});

var class_selection = [
  $('.home_btn'), // 0
  $('.about_btn'), // 1
  $('.blog_btn'), // 2
  $('.create_btn'), // 3
  $('.contact_btn') // 4
];

var i = 0;

// when a button is clicked, remove all instances of active besides the one that was clicked
var class_remove = function(class_name){
  $(this).removeClass('active');
  console.log('class removed');
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
