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
function page_toggle(page){
  $('toggle_down i').click(function(){
    $(page).slideToggle('fast');
    console.log('fa-chevron-down was clicked');
  });
};

function page_hider(){
  console.log('page hider function worked');
}

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

      // page changer functions
      page_toggle($('#about'));
      page_hider();

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
