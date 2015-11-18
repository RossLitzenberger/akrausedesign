// intelligent.js

var a = 5;
var b = 5;
var c = 5;
var d = 5;

// count how many options for the array
var z = 1;


for(var i = 1; i < a; i++)
{
  for(var j = 1; j < b; j++)
  {
    for(var f = 1; f < c; f++)
    {
      for(var e = 1; e < d; e++)
      {
        ++z;
      }
    }
  }
}
console.log('lines: ' + z);

// default, column, row, border

var default_layout = {
  1: [$(".def-top-left")],
  2: [$(".def-bottom-left")],
  3: [$(".def-top-right")],
  4: [$(".def-bottom-right")]
};



var column_layout = {
  1: [$(".col-top-left")],
  2: [$(".col-bottom-left")],
  3: [$(".col-top-right")],
  4: [$(".col-bottom-right")]
};



var row_layout = {
  1: [$(".row-top-left")],
  2: [$(".row-bottom-left")],
  3: [$(".row-top-right")],
  4: [$(".row-bottom-right")]
};



var border_layout = {
  1: [$(".border-top-left")],
  2: [$(".border-bottom-right")],
  3: [$(".border-top-right")],
  4: [$(".border-bottom-right")]
};






/*
  create a click function that lets the system
  figure out what classes to add or remove on its own
*/



console.log(border_layout.topLeft);
console.log(border_layout.bottomLeft);
console.log(border_layout.topRight);
console.log(border_layout.bottomRight);


// print out the length of the objects
// (should be 4 for each)
var defaultObjectLength = Object.keys(default_layout).length;
var columnObjectLength = Object.keys(column_layout).length;
var rowObjectLength = Object.keys(row_layout).length;
var borderObjectLength = Object.keys(border_layout).length;

console.log(defaultObjectLength);
console.log(columnObjectLength);
console.log(rowObjectLength);
console.log(borderObjectLength);

var arr = [];
for(var i in default_layout)
{
  if(default_layout.hasOwnProperty(i)){
    arr.push(default_layout[i]);
  }
}
console.log(arr);
