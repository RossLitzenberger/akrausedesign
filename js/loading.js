$(document).ready(function(){
  function loadbar(){
    $('.loading-position').css('width','100%');
  }
  function clearout(){
    $('#loading-screen').fadeOut('slow');
  }

  function slideIn(){
    setTimeout($('.hide-viewport').fadeIn('slow'), 500);
  }

  function addevents(event){
    event.setTimeout(loadbar, 500);
    event.setTimeout(clearout, 3000);
    event.setTimeout(slideIn, 3500);
  }

  function transition(){
    window.onload = function(){
      addevents(window);
    }
  }

  transition();
});
