// intelligent.js

var a = 5;
var b = 5;
var c = 5;
var d = 5;

// count how many options for the array
var z = 1;


for(var i = 1; i < default_layout; i++)
{
  for(var j = 1; j < b; j++)
  {
    for(var f = 1; f < c; f++)
    {
      for(var e = 1; e < d; e++)
      {
        document.write(i + " " + j + " " + f + " " + e + " ");
        document.write(i + " " + j + " " + f + " " + e + " ");
        document.write(i + " " + j + " " + f + " " + e + " ");
        document.write(i + " " + j + " " + f + " " + e + "<br>");
        console.log("line: " + z++);
      }
    }
  }
}


// default, column, row, border

var default_layout = {
    topLeft: $(".def-top-left"),
    bottomLeft: $(".def-bottom-left"),
    topRight: $(".def-top-right"),
    bottomRight: $(".def-bottom-right")
};



var column_layout = {
  topLeft: $(".col-top-left"),
  bottomLeft: $(".col-bottom-left"),
  topRight: $(".col-top-right"),
  bottomRight: $(".col-bottom-right")
};



var row_layout = {
  topLeft: $(".row-top-left"),
  bottomLeft: $(".row-bottom-left"),
  topRight: $(".row-top-right"),
  bottomRight: $(".row-bottom-right")
};



var border_layout = {
  topLeft: $(".border-top-left"),
  bottomLeft: $(".border-bottom-right"),
  topRight: $(".border-top-right"),
  bottomRight: $(".border-bottom-right")
};

console.log(border_layout.topLeft);
console.log(border_layout.bottomLeft);
console.log(border_layout.topRight);
console.log(border_layout.bottomRight);

var a = 5;
var b = 5;
var c = 5;
var d = 5;

// count how many options for the array
var z = 1;


for(var i = 1; i < default_layout; i++)
{
  for(var j = 1; j < b; j++)
  {
    for(var f = 1; f < c; f++)
    {
      for(var e = 1; e < d; e++)
      {
        /*
        console.log(i + " " + j + " " + f + " " + e + " ");
        console.log(i + " " + j + " " + f + " " + e + " ");
        console.log(i + " " + j + " " + f + " " + e + " ");
        console.log(i + " " + j + " " + f + " " + e + "<br>");
        console.log("line: " + z++);
        */
      }
    }
  }
}
