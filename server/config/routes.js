const users = require('./../controllers/users.js'),
      projects = require('./../controllers/projects.js');

module.exports = function(app) {
  app.get('/users', users.index)
     .get('/users/:id', users.getOneUser)
     .get('users/logout', users.logout)
     .post('/users', users.create)
     .post('/users/login', users.login)
     .patch('/users/:id', users.update) //need validations
     .delete('users/:id', users.delete)
     .get('/projects', projects.index)
     .get('/projects/:id', projects.getOneProject)
     .post('/projects', projects.create)
     .patch('/projects/:id', projects.update) //need validations
     .delete('/projects/:id', projects.deleteProject) // needs validations!
}
