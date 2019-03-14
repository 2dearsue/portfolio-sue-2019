import React, { Component } from 'react';
import { FaArrowRight, FaArrowLeft} from 'react-icons/fa';
import { Route, NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import SkillIcons from './SkillIcons';

class Skills extends Component {

  render() {
    return (

      <>

      <div className="container d-flex justify-content-end">
        <div className="row">
          <div className="">
            <div className="col-xs-10">
              <Navbar />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 mt-5">
              <h2 className="header text-right text-white border border-warning pr-3">Skills</h2>
          </div>
        </div>
      </div>

        <div className="container d-flex flex-column justify-content-center mt-5 pt-lg-5 pt-xl-5">
          <div className="row mx-auto">
            <div className="">
              <div className="box bg-white mb-3">
                <SkillIcons />
              </div>
            </div>
          </div>
        </div>

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

export default class SkillsPage extends React.Component {

  render() {
    return (
      <>
        <Route exact path="/skills" render={ () => <Skills /> } />
      </>
    )
  }
}
