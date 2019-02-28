import React, { Component } from 'react';
import '../styles/main.scss';
import Intro from './Intro';
import AboutMe from './AboutMe';
import SkillsPage from './Skills';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

export default class App extends Component {

  constructor(props) {
    super(props);
      this.state = {isRedirectSet : false};
  }

  // componentDidMount() {
  //   setTimeout(() => this.setState({isRedirectSet:true}), 8000);
  // }

  render() {
    return (
      <BrowserRouter>
        <>
        <Route exact path="/" render= {() => <Intro /> } />
        <Switch>
          <Route path="/aboutMe" render= {() => <AboutMe /> } />
          {this.state.isRedirectSet && <Redirect to="/aboutMe" />}
          <Route path="/skills" render= {() => <SkillsPage /> } />
        </Switch>
        </>
      </BrowserRouter>
    );
  }
}
