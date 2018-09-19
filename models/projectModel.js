const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProjectModelSchema = new Schema(
  {
    project_name: {type: String, required: true},
    status: Boolean,
    contributors: [{type: Schema.Types.ObjectId, ref: 'User'}],
    created_at: {type: Date, required: true, default: Date.now}
  }
)

module.exports = mongoose.model('Project', ProjectModelSchema);
