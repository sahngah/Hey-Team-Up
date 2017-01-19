app.controller('user_controller', ['$scope', 'user_factory', function($scope, UF){
  console.log('user controller running!')
  $scope.createNewUser = function(){
    console.log('user controller: createNewUser function running!')
    UF.createNewUser($scope.newUser, function(newUser){
      $scope.curUser = newUser;
    })
  }
}])
