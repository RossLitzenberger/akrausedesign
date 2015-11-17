$(document).ready(function(){


  $('.pull-me').click(function(){
    $('.changer').slideToggle('fast');
  });
  /*
  // column layout clicking action
  $('.column-layout').click(function(){
    $('#top-left').toggleClass('def-top-left col-top-left');
    $('#bottom-left').toggleClass('def-bottom-left col-bottom-left');
    $('#top-right').toggleClass('def-top-right col-top-right');
    $('#bottom-right').toggleClass('def-bottom-right col-bottom-right');

    // grey out the other icons, except for the default one,
    // user must go back to the default view first.
    $('.row-layout').toggle('fast');
    $('.border-layout').toggle('fast');
    $('.default-layout').toggle('fast');
  });
  */

  var elements = [
    "#top-left",
    "#bottom-left",
    "#top-right",
    "#bottom-right"
  ];

  var defaults = [
    ".def-top-left",
    ".def-bottom-left",
    ".def-top-right",
    ".def-bottom-right",
  ];

  var layoutBtns = [
    ".column-layout",
    ".row-layout",
    ".default-layout",
    ".border-layout"
  ];

  var toDefault = function(){

    for(var a = 0; a < elements.length; a++){
      console.log(elements[a]);
    }
    for(var b = 0; b < defaults.length; b++){
      console.log(defaults[b]);
    }

    for(var c = 0; c < layoutBtns.length; c++)
    {
      console.log(layoutBtns[c]);
    }

  }

  toDefault();
/*

jQuery('#id').click(function(){
  $(this).data('clicked', true);
});
Then, to check if it was clicked and perform an action:

if(jQuery('#id').data('clicked')) {
    //clicked element, do-some-stuff
} else {
    //run function2
}



  var screenLayout = function(event, start, end){

    $(event).toggleClass(" " + start + " " + end + " ");

  }

  // column layout clicking action
  $(".column-layout").click(function(){
    screenLayout("#top-left","def-top-left", "col-top-left");
    screenLayout("#bottom-left","def-bottom-left","col-bottom-left");
    screenLayout("#top-right","def-top-right","col-top-right");
    screenLayout("#bottom-right","def-bottom-right","col-bottom-right");
  });

  $(".row-layout").click(function(){
    screenLayout("#top-left","def-top-left","row-top-left");
    screenLayout("#bottom-left","def-bottom-left","row-bottom-left");
    screenLayout("#top-right","def-top-right","row-top-right");
    screenLayout("#bottom-right","def-bottom-right", "row-bottom-right");
  });
*/

});
