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
    }
  }
})();
