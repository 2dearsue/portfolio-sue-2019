import React, { Component } from 'react';
import { FaArrowRight, FaArrowLeft} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export default class Arrows extends Component {
  render() {
    return (

      <>
        <div className="container arrows">
          <div className="row">
            <div className="ml-auto mr-auto">
              <div className="d-inline-flex">
                <NavLink to="/aboutMe" className="nav-link">
                  <FaArrowLeft
                    className="arrow white"
                  />
                </NavLink>
                <NavLink to="/home" className="nav-link">
                  <FaArrowRight
                    className="arrow white"
                  />
                </NavLink>
              </div>
            </div>
          </div>
        </div>

      </>
    );
  }
}
