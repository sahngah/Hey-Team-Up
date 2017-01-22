const mongoose = require('mongoose'),
      Project = mongoose.model('Project'),
      User = mongoose.model('User');

module.exports = (function() {
  return {
    index: function(req, res) {
      Project.find({}, function(err, projects) {
        if (err) {throw err}
        res.json(projects);
      })
    },
    create: function(req, res) {
      console.log('create project request received');
      let projectInstance = new Project(req.project);
      projectInstance.save(function(err, newProject) {
        if (err) {throw err}
        res.json({
          "message": "new project added to db",
          "newProject": newProject
        });
      });
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
    }
  }
})();
