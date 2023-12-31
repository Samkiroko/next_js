import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  usernamr: {
    type: String,
    required: [true, 'Please provide a username'],
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'Please provide a email'],
    unique: true,
  },

  password: {
    type: String,
    required: [true, 'Please provide a password'],
  },
});

const User = mongoose.models.users || mongoose.model('User', userSchema);

export default User;
