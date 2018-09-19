import React, { Component } from 'react';
import './App.css';
import Landing from './containers/Landing/Landing';
import ProjectSection from './components/ProjectSection/ProjectSection';
import ReleaseForm from './components/ReleaseForm/ReleaseForm';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" name="login" />
          <Route exact path="/landing" name="landing" component={Landing} />
          <Route path="/project/:id" name="ProjectSection" component={ProjectSection} />
          <Route path="/releaseForm" name="releaseForm" render={ () => <ReleaseForm pid='p1' actorEmail='v@j.com'/> } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
