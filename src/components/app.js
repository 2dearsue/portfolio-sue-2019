import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/main.scss';
import Navbar from './Navbar';

class App extends Component {

  render() {
    return (
      <section>
        <Navbar />
      </section>
    );
  }
}

export default App;
