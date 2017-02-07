app.controller('otherUserProfileController', ['$scope', 'user_factory', '$location', '$routeParams', function($scope, UF, $location, $routeParams) {
  var self = this;
  UF.checkOneUser(function(user) {
    if (user) {
      self.curUser = user;
      self.thisUser = {};
    } else {
      $location.path('/register');
    }
  });
  UF.getUserProfile($routeParams.id, getUserData);

  function getUserData(user) {
    self.thisUser = user;
  }
}])
