const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      bcrypt = require('bcrypt');

var userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required']
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required']
  },
  email: {
    type: String,
    required: [true, 'email is required'],
    unique: [true,'email already in use']
    // validate:[{
    //   validator: function(email) {
    //     // email regex
    //     return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/.test(email);
    //   },
    //   message: '{VALUE} is not a valid email'
    // }]
  },
  password: {
    type: String,
    required: [true, 'password is required'],
    minlength: 3
  },
  projects: [{
    type: Schema.Types.ObjectId,
    ref: 'Project'
  }],
  projectsCreated: [{
    type: Schema.Types.ObjectId,
    ref: 'Project'
  }],
  admin: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

userSchema.methods.hashPassword = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
}

userSchema.methods.validatePassword = function(input) {
  return bcrypt.compareSync(input, this.password);
}

userSchema.pre('save', function(next) {
  var user = this;
  if (!user.isModified('password')) {
    return next();
  } else {
    this.password = this.hashPassword(this.password);
    next();
  }
})

mongoose.model('User', userSchema);
