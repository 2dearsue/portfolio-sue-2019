import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Intro from './Intro';
import Navbar from './Navbar';
import AboutMe from './AboutMe';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <div className="jumbotron bg-transparent my-2">
            <Route path="/" exact component={Intro} />
            <Route path="/navbar" component={Navbar}/>
            <Route path="/aboutMe" component={AboutMe}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
