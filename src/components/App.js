import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Intro from './Intro';
import AboutMe from './AboutMe';
import SkillsPage from './Skills';
import Download from './Download';
import { Redirect, Switch } from 'react-router-dom';

export default class App extends Component {

  constructor(props) {
    super(props);
      this.state = {isRedirectSet : false};
  }

  componentDidMount() {
    setTimeout(() => this.setState({isRedirectSet:true}), 5000);
  }

  render() {
    return (
      <BrowserRouter>
        <>
        <Route exact path="/" render= {() => <Intro /> } />
        <Switch>
        <Route exact path="/home" render= {() => <Intro /> } />
          <Route path="/aboutMe" render= {() => <AboutMe /> } />
          <Route path="/skills" render= {() => <SkillsPage /> } />
          <Route path="/download" render= {() => <Download /> } />
          {this.state.isRedirectSet && <Redirect to="/aboutMe" />}
        </Switch>
        </>
      </BrowserRouter>
    );
  }
}
