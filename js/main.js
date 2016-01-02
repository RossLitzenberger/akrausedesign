
var class_selection = [
  $('.home_btn'), // 0
  $('.about_btn'), // 1
  $('.blog_btn'), // 2
  $('.create_btn'), // 3
  $('.contact_btn') // 4
];

var i = 0;



// when button is clicked, add active class to it
var class_add = function(btn){
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
      $('.home_btn').addClass('active');
      console.log('option 1 clicked');



      break;
    case 2:
      $('.about_btn').addClass('active');
      console.log('option 2 clicked');


      break;
    case 3:
      $('.blog_btn').addClass('active');
      console.log('option 3 clicked');


      break;
    case 4:
      $('.create_btn').addClass('active');
      console.log('page not created yet, will link to admin.html');
      console.log('option 4 clicked');


      break;
    case 5:
      $('.contact_btn').addClass('active');
      console.log('option 5 clicked');


      break;
    default:
      $('home_btn').addClass('active');


      break;
  };
};

/*

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
*/
