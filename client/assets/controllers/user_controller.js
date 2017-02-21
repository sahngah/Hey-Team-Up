app.controller('user_controller', ['$scope', 'user_factory', '$location', 'project_factory', '$route', function($scope, UF, $location, PF, $route){
  console.log('user controller running!')
  PF.findAllProjects(function(projects){
    $scope.projects = projects;
    console.log("ughuhugh", $scope.projects);
  })
  $scope.createNewUser = function(){
    console.log('user controller: createNewUser function running!')
    UF.createNewUser($scope.newUser, function(newUser){
      $scope.curUser = newUser;
    })
    $location.path('/myprofile');
  }
  $scope.login = function(){
    console.log('user controller: login function running!');
    UF.login($scope.oldUser, function(oldUser){
      $scope.curUser = oldUser;
      console.log('userrrrr', $scope.curUser);
    })
    $location.path('/myprofile');
  }
  $scope.deleteProject = function(projectID){
    console.log(projectID);
    PF.deleteProject(projectID);
    $route.reload();
  }
  $scope.findByCategory = function(){
    if($scope.byCategory == null){
      alert('Category Field Is Required!');
    }else{
      $location.path('/project/category/' + $scope.byCategory.category);
    }
  }
  $scope.findByKeyword = function(){
    console.log($scope.byKeyword);
    if($scope.byKeyword == null){
      alert('Keyword Field Is Required!');
    }else{
      $location.path('/project/keyword/' + $scope.byKeyword.keyword);
    }
  }
}])
