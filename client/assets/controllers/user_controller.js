app.controller('user_controller', ['$scope', 'user_factory', '$location', function($scope, UF, $location){
  console.log('user controller running!')
  $scope.createNewUser = function(){
    console.log('user controller: createNewUser function running!')
    UF.createNewUser($scope.newUser, function(newUser){
      $scope.curUser = newUser;
    })
    $location.path('/');
  }
  $scope.login = function(){
    console.log('user controller: login function running!');
    UF.login($scope.oldUser, function(oldUser){
      $scope.curUser = oldUser;
      console.log('userrrrr', $scope.curUser);
    })
    $location.path('/myprofile');
  }
}])
