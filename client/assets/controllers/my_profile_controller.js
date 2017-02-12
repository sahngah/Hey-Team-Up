app.controller('my_profile_controller', ['$scope', 'user_factory', '$location', '$routeParams', 'project_factory', '$route', function($scope, UF, $location, $routeParams, PF, $route) {
  var self = this;
  UF.checkOneUser(function(user) {
    if (user) {
      self.curUser = user;
      UF.getUserProfile(user._id, getProjects);
    } else {
      $location.path('/register');
    }
  });
  function getProjects(user) {
    self.curUser.projects = user.projects;
  }
  $scope.deleteProject = function(projectID){
    PF.deleteProject(projectID)
    $route.reload();
  }
}])
