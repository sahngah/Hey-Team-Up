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
    },
    create: function(req, res) {
      console.log('register request received');
      var userInstance = new User (req.body); //requires req.body to have the user object that matches user schema
      userInstance.save(function(err, newUser) {
        if (err) {
          console.log(err, "err");
          res.json(err);
        }
        res.json({
          'message': "new user created",
          'newUser': newUser
        });
      });
    },
    getOneUser: function(req, res) {
      console.log('user profile request');
      User.findOne()
    },
    login: function(req, res) {
      console.log('login request erceived');
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
              '_id': user._id,
              'message': "successfully logged in"
            });
          } else {
            res.json({
              errors: "Invalid email and/or username"
            });
          }
        }
      })
    },
    logout: function(req, res) {
      req.session.destroy();
      res.redirect('/');
    }
  }
})();
