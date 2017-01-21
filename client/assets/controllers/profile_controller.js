app.controller('profile_controller', ['$scope', 'user_factory', '$location', function($location, UF, $location){
  UF.checkOneUser(function(user){
    if(user != null){
      $scope.curUser = user;
    }
    $location.path('/');
  })
}])
