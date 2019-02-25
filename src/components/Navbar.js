import React, { Component } from 'react';

class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
     navbarclass: false
        };
      this.addActiveClass=this.addActiveClass.bind(this);
      this.showNavbar=this.showNavbar.bind(this);
    }

  addActiveClass() {
      const toggleHamburger = () => {
        document.getElementById("hamburger").classList.add("is-active");
      };
      toggleHamburger();
    }

  showNavbar() {
    this.setState({navbarclass: true})
  }

  render() {
    return (
      <section>
      <nav className="navbar navbar-expand-lg navbar-light">

        <div className="col-xs-2">
          <button
              className="btn hamburger hamburger--squeeze"
              id="hamburger"
              type="button"
              onClick={this.toggleHamburger}
              >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>

          {(this.state.showNavbar &&
            <div className="navbar-collapse hidden"
                id="navbarSupportedContent">
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
        )}
        </nav>
      </section>
    );
  }
}

export default Navbar;
