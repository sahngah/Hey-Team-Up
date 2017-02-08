app.controller('project_controller', ['$scope', '$routeParams', 'user_factory', '$location', 'project_factory', function($scope, $routeParams, UF, $location, PF){
  const self = this;
  UF.checkOneUser(function(user){
    if(user != null){
      self.curUser = user;
      console.log(self.curUser);
    }else{
      self.curUser = null;
      $location.path('/register');
    }
  })
  PF.getOneProject($routeParams.projectID, getProject);

  self.joinProject = function() {
      console.log('join project requested');
      PF.joinProject($routeParams.projectID, function(project) {
        self.project = project;
      });
  }
  this.joinProject = function() {
    console.log("joining project")
    PF.joinProject($routeParams.projectID, getProject)
  }
  this.leaveProject = function() {
    console.log("Leaving project");
    PF.leaveProject($routeParams.projectID, getProject);
  }
  function getProject(project) {
    self.project = project;
  }
}])
