import React, { Component } from 'react';
import './App.css';
import ReleaseCard from './components/ReleaseCard/ReleaseCard';

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
            this.state.rlist.map((release) => {
              return(
                <ReleaseCard 
                  key={release.release_id} 
                  rnumber={release.release_no} 
                  rtype={release.release_type}
                  status={release.status}
                  branch={release.branch}
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
