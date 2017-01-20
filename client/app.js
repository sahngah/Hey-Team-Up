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
    templateUrl: './partials/myprofile.html'
  })
  .otherwise({
    redirectTo: '/'
  })
})
