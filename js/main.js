$(document).ready(function(){

  $('.screen-divider > *').hover(
    function(){
      $(this).addClass('bgChange');
      $('.icon1').addClass('iconChange');
    },
    function(){
      $(this).removeClass('bgChange');
      $('.icon1').removeClass('iconChange');
    }
  );



});
