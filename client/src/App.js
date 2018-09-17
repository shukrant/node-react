import React, { Component } from 'react';
import './App.css';
import ProjectSection from './components/ProjectSection/ProjectSection';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      rlist: []
    }
  };

  componentDidMount() {
    this.callApi()
      .then(rlist => {this.setState({ rlist })})
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const rel = await fetch('/api/releaseList');
    const body = await rel.json();
    if (rel.status !== 200) throw Error(body.message);
    return body;
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/home" name="Home" component={Landing} />
          <Route exact path="/" name="Login Page" component={Login} />
          <Route exact path="/add" name="Add" component={Add} />
          <Route exact path="/update" name="Update" component={Update} />
          <Route exact path="/notification" name="Notification" component={Notification} />
          <Route exact path="/deviceid/:id" name="DeviceId" component={DeviceId} />
        </Switch>
      </BrowserRouter>


      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Release Management System</h1>
        </header>
        <div className="projects">
          {
            this.state.rlist.map((project) => {
              return(
                <ProjectSection 
                  key={project.project_id}
                  name={project.project_name}
                  rlist={project.releases}
                />
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
