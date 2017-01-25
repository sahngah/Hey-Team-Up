app.controller('project_controller', ['$scope', '$routeParams', 'user_factory', '$location', 'project_factory', function($scope, $routeParams, UF, $location, PF){
  UF.checkOneUser(function(user){
    if(user != null){
      $scope.curUser = user;
    }else{
      $scope.curUser = null;
    }
  })
  $scope.CreateNewProject = function(){
    console.log('project controller: create new project function running!');
    console.log('****controller', $scope.newProject);
    PF.CreateNewProject($scope.newProject);
  }
}])
