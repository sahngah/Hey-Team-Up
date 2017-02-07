app.controller('projectsByCategoryController', ['$scope', '$routeParams', 'user_factory', '$location', 'project_factory', function($scope, $routeParams, UF, $location, PF){
  const self = this;
  UF.checkOneUser(function(user){
    if(user){
      self.curUser = user;
    }else{
      self.curUser = null;
      //$location.path('/register');
    }
  })
  PF.getProjectsByCategory($routeParams.category, function(projects){
    console.log('controller get projects by category', projects);
  });
    //PF.getOneProject($routeParams.projectID, getProject);
  this.CreateNewProject = function(){
    console.log('project controller: create new project function running!');
    console.log('****controller', self.newProject);
    PF.CreateNewProject(self.newProject);
  }
}])
