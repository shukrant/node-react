const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProjectModelSchema = new Schema(
  {
    project_name: {type: String, required: true},
    created_on: {type: Date, required: true, default: Date.now},
    status: Boolean,
    team_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Team'},
    branch: [String],
    contributors:[{type: Object, ref: 'User'}],
    releases:
        [
            {
                release_id:Object,
                note: { type: String, required: true},
                release_status: {
                  type: String,
                  enum: ['PENDING', 'REJECTED', 'APPROVED', 'RELEASED']
                },
                release_no: String,
                release_priority: Boolean,
                branch: String,
                approved_by: String,
                approved_on: {type: Date, required: true, default: Date.now},
                released_by: String,
                released_on: Date,
                dismissed_by: String,
                dismissed_on: Date,
                ci_jobs:
                    {
                        tags: [],
                        release_no: String,
                        build_status: Boolean
                    },
                created_at: { type: Date, required: true, default: Date.now }
            }
    ]
  }
)

module.exports = mongoose.model('Project', ProjectModelSchema);