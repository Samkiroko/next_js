import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
 usernamr: {
  type: String,
  required: [true, 'Please provide a username'],
  unique: true
  },
 }
});

const User = mongoose.models.users|| mongoose.model('User', userSchema);

export default User;