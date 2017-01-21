const mongoose = require('mongoose'),
      User = mongoose.model('User');
      Project = mongoose.model('Project');

module.exports = (function() {
  const userOneInstance = {
    firstName: "Anthony",
    lastName: "Cho",
    email: "t1@mail.com",
    password: "secret",
    admin: true
  }
  userOneInstance.save(function(err, userOne) {
    if (err) {throw err}
    console.log("user one created");
  })
  const userTwoInstance = {
    firstName: "Sahngah",
    lastName: "Lee",
    email: "t2@mail.com",
    password: "secret",
    admin: true
  }

  const coolProjectInstance = {
    title: "coolProject",
    description: "This is an example project for testing purposes"
  }
})();
