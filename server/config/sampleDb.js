const mongoose = require('mongoose'),
  User = mongoose.model('User'),
  Project = mongoose.model('Project');

module.exports = (function() {
  User.findOne({
    email: 'ac@mail.com'
  }, function(err, user) {
    if (!user) {
      const userOneInstance = new User({
        firstName: "Anthony",
        lastName: "Cho",
        email: "ac@mail.com",
        password: "secret",
        admin: true
      });
      userOneInstance.save(function(err, userOne) {
        if (err) {
          throw err
        }
        console.log("user one created");
      })
      const userTwoInstance = new User({
        firstName: "Sahngah",
        lastName: "Lee",
        email: "sl@mail.com",
        password: "secret",
        admin: true
      });
      userTwoInstance.save(function(err, userTwo) {
        if (err) {
          throw err
        }
        console.log("user two created");
        const projectInstance = new Project({
          title: "coolProject",
          description: "This is an example project for testing purposes"

        });
        projectInstance.creator = userTwo._id;
        userTwo.projects.push(projectInstance);
        projectInstance.members.push(userTwo)
        projectInstance.save(function(err, newProject) {
          if (err) {
            throw err
          }
          console.log("successfully created project");
        })
      })
    } else {
      console.log('sample db already added');
    }
  })

})();
