const mongoose = require('mongoose'),
      Message = mongoose.model('Message'),
      Project = mongoose.model('Project'),
      User = mongoose.model('User');

module.exports = (function() {
  return {
    index: function(req, res) {
      Message.find({}, function(err, messages) {
        if (err) {res.json(err)}
        res.json(messages);
      })
    },
    create: function(req, res) {
      if (req.session.user) {
        Project.findOne({_id: req.params.projectID}, function(err, project) {
          User.findOne({_id: req.session.user._id}, function(err, user) {
            let messageInstance = new Message(req.body);
            messageInstance.author = user._id;
            messageInstance.project = project._id;
            messageInstance.save(function(err, newMessage) {
              if (err) {throw err}
              user.messages.push(newMessage);
              user.save(function(err) {
                if (err) {throw err}
                project.messages.push(newMessage);
                project.save(function(err) {
                  if (err) {throw err}
                  console.log('message created');
                  res.json({
                    'message': "successfully created message",
                    'message': newMessage
                  })
                });
              })
            })
          })
        })
      } else {
        res.json({
          "error": "user is not logged in"
        })
      }
    }
  }
})();
