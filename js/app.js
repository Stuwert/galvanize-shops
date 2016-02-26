var app = angular.module('gEats', ['ngRoute']);

app.controller('MainController', ['$scope', function($scope){

}])

app.config(function($routeProvider){
  $routeProvider
    .otherwise({
      templateUrl: 'partials/tea.html',
      controller: 'TeaController'
    })
})
