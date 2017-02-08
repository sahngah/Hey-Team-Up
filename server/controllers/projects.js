const mongoose = require('mongoose'),
      Project = mongoose.model('Project'),
      User = mongoose.model('User');

module.exports = (function() {
  return {
    index: function(req, res) {
      Project.find({})
      .populate({
        path: 'creator members',
        model: 'User'
      })
      .exec(function(err, projects) {
        if (err) {throw err}
        res.json(projects);
      })
    },
    create: function(req, res) {
      console.log('create project request received');
      User.findOne({_id: req.session.user._id}, function(err, user) {
        let projectInstance = new Project(req.body);
        projectInstance.creator = user._id;
        projectInstance.members.push(user);
        projectInstance.save(function(err, newProject) {
          if (err) {throw err}
          user.projects.push(newProject);
          user.projectsCreated.push(newProject);
          user.save(function(err) {
            if(err) {throw err}
            res.json({
              "message": "new project added to db",
              "newProject": newProject
            });
          })
        });
      })
    },
    getOneProject: function(req, res) {
      console.log("project data requested");
      Project.findOne({_id: req.params.id})
      .populate({
        path: "creator members",
        model: "User"
      })
      .exec(function(err, project) {
        if (err) {throw err}
        res.json(project);
      })
    },
    deleteProject: function(req, res) {
      console.log("project delete request received");
      if (req.session.user) {
        Project.findOne({_id: req.params.id}, function(err, projectToBeDeleted) {
          if (err) {throw err}
          if (projectToBeDeleted.creator == req.session.user._id) {
            projectToBeDeleted.remove();
            console.log(`successfully deleted project with id ${req.params.id}`);
            res.json({
              "message": "Successfully deleted project"
            });
          }
        })
      } else {
        console.log("user does not have permission to delete project");
        res.json({
          "errors": "You do not have permission to delete this project"
        })
      }
    },
    update: function(req, res) {
      console.log("project update requested");
      Project.update({_id: req.params.id}, req.body.projectUpdates, function(err, updatedProject) {
        if (err) {throw err}
        res.json({
          "message": "successfully updated project",
          "updatedProject": updatedProject
        })
      })
    },
    // might not be ready
    joinProject: function(req, res) {
      if (!req.session.user) {
        res.json({
          "errors": "user not logged in"
        })
      } else {
        console.log("join project requested", req.params.id);
        Project.update({_id: req.params.id}, {$push: {members: req.session.user._id}}, function(err) {
          if (err) {throw err}
          console.log('added user to project members');
          User.update({_id: req.session.user._id}, {$push: {projects: req.params.id}}, function(err) {
            if (err) {throw err}
            console.log("added project to user profile");
            res.json({
              'message': "successfully joined project",
            })
          });
        });
      }
    }
  }
})();
