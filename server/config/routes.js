const users = require('./../controllers/users.js'),
      projects = require('./../controllers/projects.js'),
      messages = require('./../controllers/messages.js');

module.exports = function(app) {
  app.get('/users', users.index)
     .get('/users/logout', users.logout)
     .get('/users/checkSession', users.checkSession)
     .get('/users/user/:id', users.getOneUser)
     .post('/users', users.create)
     .post('/users/login', users.login)
     .patch('/users/:id', users.update) //need validations
     .delete('/users/:id', users.delete)
     .get('/projects', projects.index)
     .get('/projects/:id', projects.getOneProject)
     .get('/projects/category/:category', projects.ProjectsByCategory)
    //  .get('/projects/keyword/:keyword', projects.ProjectsByKeyword)
     .post('/projects', projects.create)
     .patch('/projects/join/:id', projects.joinProject)
     .patch('/projects/leave/:id', projects.leaveProject)
     .delete('/projects/:id', projects.deleteProject) // needs validations!
     .get('/messages', messages.index);
}
