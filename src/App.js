import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import bio from './components/pages/bio';
import projects from './components/pages/projects';
import 'bootstrap/dist/css/bootstrap.min.css';
// import works from './projects.json';
import NavBar from './components/Nav';

class App extends Component {
  state = {
    projects
  };

  render(){
    return (
      <Router basename={ProcessingInstruction.env.PUBLIC_URL}>
        <NavBar />
        <Switch>
          <Route exact path='/' component={bio}/>
          <Route exact path='/portfolio' render={(props)=><projects {...props} projects={this.state.projects}/>}/>
        </Switch>
      </Router>
    )
  }
}

export default App;