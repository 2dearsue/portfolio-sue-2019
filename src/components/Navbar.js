import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
     showNavbar: false
        };
      this.addActiveClass=this.addActiveClass.bind(this);
      this.showNavbar=this.showNavbar.bind(this);
    }

  addActiveClass() {
      this.refs.btn.classList.toggle('is-active');

      if (this.state.showNavbar === true) {
        this.setState({showNavbar: false})
      } else {
        this.setState({showNavbar: true});
      }
        // document.getElementById("hamburger").classList.toggle("is-active");
  }

  showNavbar() {

  }

  render() {
    return (
      <section>
        <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-end">

          <div className="col-xs-2">
            <button
                ref="btn"
                className="btn hamburger hamburger--squeeze"
                id="hamburger"
                type="button"
                onClick={this.addActiveClass}
                >
              <span className="hamburger-box">
                <span className="hamburger-inner bg-white"></span>
              </span>
            </button>
          </div>

            {(this.state.showNavbar &&
              <div className="navbar-collapse"
                  id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <NavLink to="/aboutMe" className="nav-link">
                  <span className="nav-link text-white text-right" id="2">About Me</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/skills" className="nav-link">
                  <span className="nav-link text-white text-right">Skills</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/download" className="nav-link">
                  <span className="nav-link text-white text-right">Download CV</span>
                  </NavLink>
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
