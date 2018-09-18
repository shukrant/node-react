import React, { Component } from 'react';
import './App.css';
import Landing from './containers/Landing/Landing';
import ProjectSection from './components/ProjectSection/ProjectSection';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" name="landing" component={Landing} />
          <Route path="/project/:id" name="ProjectSection" component={ProjectSection} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
