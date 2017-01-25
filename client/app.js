var app = angular.module('LogRegApp', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: './partials/home.html'
  })
  .when('/register', {
    templateUrl: './partials/register.html'
  })
  .when('/myprofile', {
    templateUrl: './partials/myprofile.html',
    controller: "profile_controller",
    controllerAs: 'PC'
  })
  .when('/project/new', {
    templateUrl: './partials/newproject.html'
  })
  .otherwise({
    redirectTo: '/'
  })
})
