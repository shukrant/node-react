const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ReleaseModelSchema = new Schema(
  {
      note: { type: String, required: true},
      project_id: {type: Schema.Types.ObjectId, ref: 'Project'},
      release_status: {
        type: String,
        enum: ['PENDING', 'REJECTED', 'APPROVED', 'RELEASED']
      },
      release_priority: {
        type: String,
        enum: ['Minor', 'Major', 'Critical']
      },
      branch_name: String,
      approved_by: String,
      approved_on: {type: Date, required: true, default: Date.now},
      released_by: String,
      released_on: Date,
      dismissed_by: String,
      dismissed_on: Date,
      ci_jobs:
          {
              tags: [String],
              release_no: String,
              build_status: Boolean
          },
      created_at: { type: Date, required: true, default: Date.now }
  }
);

module.exports = mongoose.model('Release', ReleaseModelSchema);
