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
    controller: "my_profile_controller",
    controllerAs: 'PC'
  })
  .when('/users/:id', {
    templateUrl: './partials/otherUserProfile.html',
    controller: 'otherUserProfileController',
    controllerAs: 'oUPC'
  })
  .when('/project/new', {
    templateUrl: './partials/newproject.html'
  })
  .otherwise({
    redirectTo: '/'
  })
})
