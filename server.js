const express = require('express');

const app = express();
const port = process.env.PORT || 5001;

app.get('/api/releaseList', (req, res) => {
  res.json([
    {
      project_id: 'p1',
      project_name: 'Project1',
      releases: [
        {
          release_id: 1,
          release_no: 'v2.0.0',
          release_type: 'MAJOR',
          created_on: '',
          modified_on: '',
          created_by: '',
          modified_by: '',
          description: '',
          status: 'PENDING',
          branch: 'xyz',
          approved_by: '',
          approved_on: '',
          released_by: '',
          released_on: '',
          dismissed_by: '',
          dismissed_on: '',
      
        },
        {
          release_id: 2,
          release_no: 'v3.3.0',
          release_type: 'MINOR',
          created_on: '',
          modified_on: '',
          created_by: '',
          modified_by: '',
          description: '',
          status: 'APPROVED',
          branch: 'qwerty',
          approved_by: '',
          approved_on: '',
          released_by: '',
          released_on: '',
          dismissed_by: '',
          dismissed_on: '',
        },
        {
          release_id: 3,
          release_no: 'v3.2.2',
          release_type: 'PATCH',
          created_on: '',
          modified_on: '',
          created_by: '',
          modified_by: '',
          description: '',
          status: 'REJECTED',
          branch: 'ytrewq',
          approved_by: '',
          approved_on: '',
          released_by: '',
          released_on: '',
          dismissed_by: '',
          dismissed_on: '',
        },
        {
          release_id: 4,
          release_no: 'v3.2.1',
          release_type: 'MINOR',
          created_on: '',
          modified_on: '',
          created_by: '',
          modified_by: '',
          description: '',
          status: 'RELEASED',
          branch: 'poiuy',
          approved_by: '',
          approved_on: '',
          released_by: '',
          released_on: '',
          dismissed_by: '',
          dismissed_on: '',
        }
      ]
    },
    {
      project_id: 'p2',
      project_name: 'Project2',
      releases: [
        {
          release_id: 1,
          release_no: 'v2.0.0',
          release_type: 'MAJOR',
          created_on: '',
          modified_on: '',
          created_by: '',
          modified_by: '',
          description: '',
          status: 'PENDING',
          branch: 'xyz',
          approved_by: '',
          approved_on: '',
          released_by: '',
          released_on: '',
          dismissed_by: '',
          dismissed_on: '',
        }
      ]
    }
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));