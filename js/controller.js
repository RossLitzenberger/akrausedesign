var app = angular.module('blogList', []);
app.controller('snapshots', function($scope){

  $scope.blog_img = [
    "<img src='../img/261H.jpg'></img>",
    "<img src='../img/blog2.jpeg'></img>",
    "<img src='../img/blog3.jpeg'></img>",
    "<img src='../img/blog4.jpeg'></img>",
    "<img src='../img/blog5.jpeg'></img>"
  ];
  $scope.blog_title = [
    "First blog of 2016",
    "Second blog of 2016",
    "Third blog of 2016",
    "Fourth blog of 2016",
    "Fifth blog of 2016"
  ];

  $scope.blog_author = [
    "Andrew Krause",
    "Andrew Krause",
    "Andrew Krause",
    "Andrew Krause",
    "Andrew Krause"
  ];

  $scope.blog_date = [
    "January 1, 2016",
    "January 2, 2016",
    "January 3, 2016",
    "January 4, 2016",
    "January 5, 2016"
  ];

});
