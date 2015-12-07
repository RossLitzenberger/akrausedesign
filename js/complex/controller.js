var myApp = angular.module('complexApp',[]);

myApp.controller('WorkController', ['$scope', function($scope) {
  $scope.tiles = [
    {cover: "http://placehold.it/100x100", descripition: "this is some random text."},
    {cover: "http://placehold.it/100x100", descripition: "this is some random text."},
    {cover: "http://placehold.it/100x100", descripition: "this is some random text."},
    {cover: "http://placehold.it/100x100", descripition: "this is some random text."},
    {cover: "http://placehold.it/100x100", descripition: "this is some random text."},
    {cover: "http://placehold.it/100x100", descripition: "this is some random text."},
    {cover: "http://placehold.it/100x100", descripition: "this is some random text."},
    {cover: "http://placehold.it/100x100", descripition: "this is some random text."},
  ];
}]);
