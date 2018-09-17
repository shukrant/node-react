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
