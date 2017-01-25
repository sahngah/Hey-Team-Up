app.factory('user_factory', function($http, $location){
  var factory = {};
  factory.createNewUser = function(newUser, callback){
    console.log('user factory: createNewUser function running!')
    $http.post('/users', newUser).then(function(res){
      if(res.data.newUser){
        console.log(res.data.newUser);
        callback(res.data.newUser);
      }else{
        alert('We were unable to register due to an error. Please try again!');
        $location.path('/register');
      }
    })
    }
  factory.login = function(oldUser, callback){
    console.log('user factory: login function funning!');
    $http.post('/users/login', oldUser).then(function(res){
      console.log(res.data.errors);
      if(res.data.user){
        console.log(res.data.user);
        callback(res.data.user);
      }else{
        alert('Invalid username/password. Please try again!')
        $location.path('/register');
      }
    })
  }
  factory.checkOneUser = function(callback){
    console.log('user factory: checking if user logged in');
    $http.get('/users/checkSession').then(function(res){
      callback(res.data);
    })
  }
  factory.getUserProjects = function(userId, callback) {
    $http.get(`/users/user/${userId}`).then(function(res) {
      callback(res.data.projects);
    })
  }
  return factory;
})
