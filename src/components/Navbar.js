import React, { Component } from 'react';

class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
     active: false,
     navbarclass: 'hidden'
        };
      this.addActiveClass=this.addActiveClass.bind(this);
      this.showNavbar=this.showNavbar.bind(this);
    }

  addActiveClass() {
      const currentState = this.state.active;
      this.setState({ active: !currentState});
    };

  showNavbar() {
    this.setState({navbarclass:'show'})
  }

  render() {
    return (
      <section>
      <nav className="navbar navbar-expand-lg navbar-light">
        <h3 className="logo" id="scrollto1">sue</h3>

        <div className="col-xs-2">
          <button
              className="col-4 btn hamburger hamburger--squeeze pull-right"
              type="button"
              onClick={this.toggleClass}
              >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>

          <div className="navbar-collapse hidden"
                id="navbarSupportedContent"
                navbarclass={this.navbarclass}>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active border-2">
                <span className="nav-link text-white text-center border-white border" id="2">About Me</span>
              </li>
              <li className="nav-item">
                <span className="nav-link text-white text-center" id="3">Skills</span>
              </li>
              <li className="nav-item dropdown">
                <span className="nav-link text-white text-center" id="4">Download CV</span>
              </li>
            </ul>
          </div>
        </nav>
      </section>
    );
  }
}

export default Navbar;
