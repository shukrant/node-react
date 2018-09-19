const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserModelSchema = new Schema(
  {
    email: {type: String, required: true, unique: true},
    role: {
      type: String,
      enum: ['EMPLOYEE', 'APPROVER', 'ADMIN'],
      default: 'EMPLOYEE'
    },
    created_at: { type: Date, required: true, default: Date.now }
  }
);


module.exports = mongoose.model('User', UserModelSchema);
