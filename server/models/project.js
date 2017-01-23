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

mongoose.model('Project', projectSchema);
