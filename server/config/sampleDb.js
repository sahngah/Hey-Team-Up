const mongoose = require('mongoose'),
  User = mongoose.model('User'),
  Project = mongoose.model('Project');

module.exports = (function() {
  User.findOne({email: 'ac@mail.com'}, function(err, user) {
      if (!user) {
        const userOneInstance = new User({
          firstName: "Anthony",
          lastName: "Cho",
          email: "ac@mail.com",
          password: "password",
          admin: true
        });
        userOneInstance.save(function(err, userOne) {
          if (err) {throw err}
          console.log('sample user one added to db');
        })
      } else {
        console.log("sample user already one in db");
      }
  });
  User.findOne({email: 'sl@mail.com'}, function (err, user) {
    if (!user) {
      const userTwoInstance = new User({
        firstName: "Sahngah",
        lastName: "Lee",
        email: "sl@mail.com",
        password: "password",
        admin: true
      });
      userTwoInstance.save(function(err, userTwo) {
        if (err) {throw err}
        console.log("user two created");

      });
    } else {
      console.log('sample user two already in db');
    }
  });
  Project.findOne({title: "sample project"}, function(err, project) {
    if (!project) {
      User.findOne({email: "sl@mail.com"}, function(err, user) {
        if (!user || err) {
          console.log('something went wrong');
          console.log(err)
        } else {
          const projectInstance = new Project({
            title: "sample project",
            description: "This is an example project for testing purposes",
            category: "javascript"
          });
          projectInstance.creator = user._id;
          projectInstance.members.push(user);
          projectInstance.save(function(err, newProject) {
            if (err) throw err;
            user.projectsCreated.push(newProject);
            user.projects.push(newProject);
            user.save(function(err) {
              if (err) throw err;
              console.log('successfully added sample project');
            })
          });
        }
      })
    }
  });
})();
