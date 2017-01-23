app.factory('project_factory', function($http, $location){
  var factory = {};
  factory.CreateNewProject = function(newProject){
    console.log('project factory: create new project function running!');
    $http.post('/projects', newProject)
  }
  return factory;
})
