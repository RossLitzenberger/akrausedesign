var LAYOUTS = ["$('#default')","$('#row')","$('#column')","$('#border')"];
var IMAGES = ["#cl", "#rl", "#bl", "#dl"];

var IMAGES = [
  ["#cl img", "#cl img"],
  ["#rl img", "#rl img"],
  ["#bl img", "#bl img"],
  ["#dl img", "#dl img"]
];

var img_toggle = function(){
  for(var a in IMAGES){
    for(var b in IMAGES[a]){
      b.toString();
    }
  }
}
