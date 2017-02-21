app.controller('projectsByKeywordController', ['$scope', '$routeParams', 'user_factory', '$location', 'project_factory', function($scope, $routeParams, UF, $location, PF){
  const self = this;
  UF.checkOneUser(function(user){
    if(user){
      self.curUser = user;
    }else{
      self.curUser = null;
      //$location.path('/register');
    }
  })
  PF.getProjectsByKeyword($routeParams.keyword, function(projects){
    console.log('controller get projects by category function');
    $scope.projectsByKeyword = projects;
  });
}])
