const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const messageSchema = new mongoose.Schema({
  content: {
    type: String,
    required: [true, "you must include a message"]
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  project: {
    type: Schema.Types.ObjectId,
    ref: 'Project'
  }
}, {
  timestamps: true
})

mongoose.model('Message', messageSchema);
