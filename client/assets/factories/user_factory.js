app.factory('user_factory', function($http){
  var factory = {};
  factory.createNewUser = function(newUser, callback){
    console.log('user factory: createNewUser function running!')
    $http.post('/users', newUser).then(function(res){
      console.log(res.data.newUser);
      callback(res.data.newUser);
    })
    }
  factory.login = function(oldUser, callback){
    console.log('user factory: login function funning!');
    $http.post('/users/login', oldUser).then(function(res){
      console.log(res.data.user);
      callback(res.data.user);
    })
  }
  factory.checkOneUser = function(callback){
    console.log('user factory: checking one user funcion running!');
  }
  return factory;
})
