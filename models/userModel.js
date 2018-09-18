const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserModelSchema = new Schema(
  {
    email: {type: String, required: true},
    role: {
      type: String,
      enum: ['EMPLOYEE', 'APPROVER', 'ADMIN'],
      default: 'EMPLOYEE'
    },
    created_at: { type: Date, required: true, default: Date.now },
    updated_at: { type: Date,  default: Date.now, default: null }
  }
);


module.exports = mongoose.model('User', UserModelSchema);