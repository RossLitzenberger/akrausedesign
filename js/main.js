$(document).ready(function(){
  $('.top-left').hover(
    function(){
      // change the icon position
      $('.icon1').addClass('icon1open');
      $('.icon1').css('padding','15px');
      $('.icon1').css('border-radius','20%');
    },
    function(){
      // change the icon position back
      $('.icon1').removeClass('icon1open');
      $('.icon1').css('padding','0px');
      $('.icon1').css('border-radius','0');
    }
  );

  $('.bottom-left').hover(
    function(){
      // change the icon position
      $('.icon2').addClass('icon2open');
      $('.icon2').css('padding','15px');
      $('.icon2').css('border-radius','20%');
    },
    function(){
      // change the icon position back
      $('.icon2').removeClass('icon2open');
      $('.icon2').css('padding','0px');
      $('.icon2').css('border-radius','0');
    }
  );

  $('.top-right').hover(
    function(){
      // change the icon position
      $('.icon3').addClass('icon3open');
      $('.icon3').css('padding','15px');
      $('.icon3').css('border-radius','20%');
    },
    function(){
      // change the icon position back
      $('.icon3').removeClass('icon3open');
      $('.icon3').css('padding','0px');
      $('.icon3').css('border-radius','0');
    }
  );

  $('.bottom-right').hover(
    function(){
      // change the icon position
      $('.icon4').addClass('icon4open');
      $('.icon4').css('padding','15px');
      $('.icon4').css('border-radius','20%');
    },
    function(){
      // change the icon position back
      $('.icon4').removeClass('icon4open');
      $('.icon4').css('padding','0px');
      $('.icon4').css('border-radius','0');
    }
  );
});
