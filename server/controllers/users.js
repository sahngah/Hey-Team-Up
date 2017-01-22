const mongoose = require('mongoose'),
      User = mongoose.model('User'),
      Project = mongoose.model('Project');

module.exports = (function() {
  return {
    index: function(req, res) {
      User.find({}, function(err, users) {
        if (err) {
          res.json(err);
        }
        res.json(users);
      });
    },
    create: function(req, res) {
      console.log('register request received');
      var userInstance = new User(req.body);
      userInstance.save(function(err, newUser) {
        if (err) {
          console.log("Error:", err);
          res.json(err);
        } else {
          req.session.user = newUser;
          req.session.save();
          res.json({
            'message': "new user successfully created",
            'newUser': newUser
          });
        }
      });
    },
    getOneUser: function(req, res) {
      console.log('user profile request');
      User.findOne({_id: req.params.id})
      .populate({
        path: 'projects',
        model: 'Project'
      })
      .exec(function(err, user) {
        if (err) {
          console.log(err);
          res.json({
            "message": "user not found"
          });
        }
        console.log('sending user data');
        res.json(user);
      });
    },
    login: function(req, res) {
      console.log('login request received');
      User.findOne({email: req.body.email}, function(err, user) {
        if (err) {
          res.json(err);
        } else if (!user) {
          res.json({errors: "Invalid email and/or username"});
        } else {
          if (user.validatePassword(req.body.password)) {
            req.session.user = user;
            req.session.save();
            res.json({
              'message': "successfully logged in",
              'user': user
            });
          } else {
            res.json({
              errors: "Invalid email and/or username"
            });
          }
        }
      })
    },
    checkSession: function(req, res) {
      console.log("checking for user in session");
      if (req.session.user) {
        res.json(req.session.user)
      } else {
        res.json(null);
      }
    },
    logout: function(req, res) {
      req.session.destroy();
      res.redirect('/');
    },
    delete: function(req, res) {
      User.remove({_id: req.params.id}, function(err) {
        if (err) {throw err}
        res.json({
          message: `succcessfully deleted user with id ${req.params.id}`
        })
      })
    },
    update: function(req, res) {
      User.update({_id: req.params.id}, req.body.userUpdates, function(err, updatedUser) {
        if (err) {throw err}
        res.json({
          'message': "Successfully updated user",
          "updatedUser": updatedUser
        })
      })
    }
  }
})();
