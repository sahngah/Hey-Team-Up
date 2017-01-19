const mongoose = require('mongoose'),
      User = mongoose.model('User');

module.exports = (function() {
  return {
    index: function(req, res) {
      User.find({}, function(err, users) {
        if (err) {
          res.json(err);
        }
        res.json(users);
      });
    }
  }
})();
