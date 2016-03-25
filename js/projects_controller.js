var app = angular.module("ProjectsPage", []);

app.controller("projects_controller", ["$scope", function($scope){

  $scope.isLinked = false;

  $scope.myProjects = [
        {"id":18,"title":'Management'},
        {"id":19,"title":'Administration'},
        {"id":21,"title":'Designers'},
        {"id":22,"title":'Accounts'},
    ]

}]);
