app.controller('profile_controller', ['$scope', 'user_factory', '$location', '$routeParams', function($scope, UF, $location, $routeParams) {
  var self = this;
  UF.checkOneUser(function(user) {
    if (user) {
      self.curUser = user;
      UF.getUserProjects(user._id, getProjects);
    } else {
      $location.path('/');
    }
  });
  function getProjects(projects) {
    self.curUser.projects = projects;
  }
}])
