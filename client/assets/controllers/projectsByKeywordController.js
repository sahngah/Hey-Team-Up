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
  PF.findAllProjects(function(projects){
    console.log('controller get projects by category function');
    $scope.projects = projects;
    $scope.projectsByKeyword = function(project){
      return ((project.title).includes($routeParams.keyword)
      || (project.description).includes($routeParams.keyword)
    )}
  });
}])
