const express = require('express');
const app = express();
const port = process.env.PORT || 5001;
const mongoose = require('mongoose');
var User = require('./models/userModel');
var Project = require('./models/projectModel');


/* dummy data for timeline cards*/
data=[
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
  ];

  /* call from project section */
  app.get('/projectdetails/:id', (req, res) => {
    res.json(...data.filter(project=> project.project_id===req.params.id));
  });

  /* get all Users data from db */
  app.get('/users', (req, res) => {
    User.find((err, users) => {
    	if (err)
        res.send(err)
      else
    	  res.json(users); // return all users in JSON format
    });
  });

  /* get all project along with releases */
  app.get('/teams', (req, res) => {
    Team.find((err, teams) => {
    	if (err)
        res.send(err)
      else
    	  res.json(teams); // return all teams in JSON format
    });
  });

  /* get all project along with releases */
   app.get('/projects', (req, res) => {
    Project.find((err, projects) => {
    	if (err)
        res.send(err)
      else
    	  res.json(projects); // return all projects in JSON format
    });
  });

  /* mongo db connection */
  var mongoDB = 'mongodb://localhost/login-oauth';
  mongoose.connect(mongoDB,{ useNewUrlParser: true });
  mongoose.Promise = global.Promise;
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log("DB connected");
  });




app.listen(port, () => console.log(`Listening on port ${port}`));