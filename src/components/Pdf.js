
import React, { Component } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export default class Pdf extends Component {
  render() {
    return (
      <>
        <section className="jumbotron mt-5 my-2">
          <a href="/portfolio-revamp/public/documents/resume.pdf">Resume</a>
        </section>

        <div className="container arrows mt-5">
          <div className="row">
            <div className="ml-auto mr-auto">
              <div className="d-inline-flex">
                <NavLink to="/download" className="nav-link">
                  <FaArrowLeft
                    className="arrow white"
                  />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
