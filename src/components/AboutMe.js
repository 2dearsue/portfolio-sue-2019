import React, { Component } from 'react';
import Navbar from './Navbar';
import IntroText from './IntroText';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export default class AboutMe extends Component {

  render() {
    return (

    <>
      <section>

      <div className="container d-flex justify-content-end mb-5">
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
          <div className="col-12 col-sm-12 mt-2">
              <h2 className="header text-right text-white border border-warning pr-3 mt-lg-5">I am</h2>
          </div>
        </div>
      </div>

        <div className="container d-flex flex-column justify-content-center mt-5 pt-lg-5 pt-xl-5">
          <div className="row mx-auto">
            <div className="">
              <div className="box bg-white mb-3">
                <IntroText />
              </div>
            </div>
          </div>
        </div>

        <div className="container arrows">
          <div className="row">
            <div className="ml-auto mr-auto">
              <div className="d-inline-flex">
                <NavLink to="/home" className="nav-link">
                  <FaArrowLeft
                    className="arrow white"
                  />
                </NavLink>
                <NavLink to="/skills" className="nav-link">
                  <FaArrowRight
                    className="arrow white"
                  />
                </NavLink>
              </div>
            </div>
          </div>
        </div>

      </section>
      </>
    );
  }
}
