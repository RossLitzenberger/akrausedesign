var i = 0;
var LAYOUTS = [
  "$('#default')",
  "$('#row')",
  "$('#column')",
  "$('#border')"
];

var flipper = function(flip){
  $(flip).click(function(){
    $(this).find('img').toggle();
  });
}
