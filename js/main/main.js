var ids = ['#top-left','#bottom-left','#top-right','#bottom-right'];
var tiles = ['-top-left','-bottom-left','-top-right','-bottom-right'];
var open = 'open';
var types = ['def','col','row','border'];
var defPos = 0, colPos = 1, rowPos = 2, borderPos = 3;
var pos = [defPos,colPos,rowPos,borderPos];

var defaults = (a) => {
  for(var i in a.length){
    return a[i].removeClass();
  };
};

var addC = (a,b,c) => {
  for(var i in a.length){
    i.addClass(c[pos[1]]+b[i]);
  };
};

var removeC = (a,b,c) => {
  for(var i in a.length){
    i.removeClass(c[pos[1]]+b[i]);
  }
};

var openC = (event) => {
  return addC(ids, types, tiles) + event;
};

var diffClass = () => {
  defaults(ids);
  addC(ids, tiles, types);
};
