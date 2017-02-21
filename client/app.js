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
  .when('/project/info/:projectID', {
    templateUrl: './partials/projectPage.html',
    controller: 'project_controller',
    controllerAs: 'PC'
  })
  .when('/project/new', {
    templateUrl: './partials/newproject.html',
    controller: 'newProjectController',
    controllerAs: 'nPC'
  })
  .when('/project/category/:category', {
    templateUrl: './partials/projectsByCategory.html',
    controller: 'projectsByCategoryController',
    controllerAs: 'PCC'
  })
  .when('/project/keyword/:keyword', {
    templateUrl: './partials/projectsByKeyword.html',
    controller: 'projectsByKeywordController',
    controllerAs: 'PKC'
  })
  .otherwise({
    redirectTo: '/'
  })
})
