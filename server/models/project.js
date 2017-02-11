const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

var projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'project title is required'],
    maxLength: [255, 'project title cannot exceed 255 chars']
  },
  description: {
    type: String,
    required: [true, 'project must have a description'],
  },
  category: {
    type: String,
    required: [true, "your project must have a category!"]
  },
  messages: [{
    type: Schema.Types.ObjectId,
    ref: "Message"
  }],
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  members: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
}, {
  timestamps: true
});

// removes references in users for deleted projects. Checks for all places where users have the project's id in projects and projectCreated
projectSchema.pre('remove', function(next) {
  console.log("removing project references from users");
  this.model("User").update({},
    {$pull: {projects: this._id, projectsCreated: this._id}},
    {multi: true},
    function(err) {
      if (err) throw err;
      console.log("project reference removal successful from all users");
    }
  );
  next();
});

mongoose.model('Project', projectSchema);
