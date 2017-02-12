app.factory('project_factory', function($http, $location){
  var factory = {};
  factory.CreateNewProject = function(newProject){
    console.log('project factory: create new project function running!');
    console.log('******factory', newProject);
    $http.post('/projects', newProject).then(function(res){
      console.log(res.data.newProject);
      $location.path('/myprofile');
    })
  }
  factory.findAllProjects = function(callback){
    console.log('project factory: find all project function running!');
    $http.get('/projects').then(function(res){
      callback(res.data);
    })
  }
  factory.deleteProject = function(projectID){
    console.log('project factory: project delete function running');
    $http.delete('/projects/' + projectID)
  }
  factory.getOneProject = function(projectID, callback) {
    $http.get(`/projects/${projectID}`).then(function(res) {
      callback(res.data);
    })
  }
  factory.joinProject = function(projectID, callback) {
    $http.patch(`/projects/join/${projectID}`).then(function(res) {
      console.log(res);
      factory.getOneProject(projectID, callback);
    });
  }
  factory.leaveProject = function(projectID, callback) {
    $http.patch(`/projects/leave/${projectID}`).then(function(res) {
      console.log(res);
      factory.getOneProject(projectID, callback);
    })
  }
  factory.getProjectsByCategory = function(category, callback){
    console.log('factory: get projects by category function', category);
    $http.get('/projects/category/' + category).then(function(res){
      callback(res.data);
    })
  }
  return factory;
})
