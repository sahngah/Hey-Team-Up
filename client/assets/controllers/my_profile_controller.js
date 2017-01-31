app.controller('my_profile_controller', ['$scope', 'user_factory', '$location', '$routeParams', function($scope, UF, $location, $routeParams) {
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
}])
