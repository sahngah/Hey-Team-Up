app.controller('profile_controller', ['$scope', 'user_factory', '$location', function($scope, UF, $location){
  UF.checkOneUser(function(user){
    if(user != null){
      $scope.curUser = user;
    }else{
      $location.path('/');
    }
  })
}])
