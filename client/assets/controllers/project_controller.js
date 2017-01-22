app.controller('project_controller', ['$scope', 'user_factory', '$location', function($scope, UF, $location){
  UF.checkOneUser(function(user){
    if(user != null){
      $scope.curUser = user;
    }else{
      $scope.curUser = null;
    }
  })
  $scope.CreateNewProject = function(userid){
    console.log('project controller: create new project function running!')
    console.log('userid', userid);
    console.log('form', $scope.newProject);
  }
}])
