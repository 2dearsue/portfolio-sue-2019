import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/main.scss';
import Intro from './Intro';

class App extends Component {

  render() {
    return (
      <section>
        <Intro />
      </section>
    );
  }
}

export default App;
