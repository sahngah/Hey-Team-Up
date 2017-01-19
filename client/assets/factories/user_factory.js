app.factory('user_factory', function($http){
  var factory = {};
  factory.createNewUser = function(newUser, callback){
    console.log('user factory: createNewUser function running!')
    $http.post('/users', newUser)
    }
  }
  return factory;
})
