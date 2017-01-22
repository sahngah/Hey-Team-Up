const users = require('./../controllers/users.js'),
      projects = require('./../controllers/projects.js');

module.exports = function(app) {
  app.get('/users', users.index)
     .get('/users/:id', users.getOneUser)
     .get('users/logout', users.logout)
     .post('/users', users.create)
     .post('/users/login', users.login)
     .delete('users/:id', users.delete)
     .get('/projects', projects.index)
     .get('/projects/:id', projects.getOneProject)
     .post('/projects', projects.create)
     .delete('/projects/:id', projects.deleteProject) // need backend validations!
}
