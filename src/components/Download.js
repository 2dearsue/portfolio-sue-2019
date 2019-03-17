import React, { Component } from 'react';
import Navbar from './Navbar';
import { FaArrowCircleDown } from 'react-icons/fa';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import pdf from '../files/CV_SusanneSchuett_Frontend.pdf';

export default class Download extends Component {
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

        <section className="section-download pt-5">
          <div className="card pt-2 border-0 card-primary bg-transparent">
            <div className="container flex">
              <FaArrowCircleDown className="arrow-down animated infinite pulse delay-2s pt-2 pb-5"></FaArrowCircleDown>
              <a href={pdf}>
                <h3 className="header-download animated fadeIn delay-1s">Here you can download my <span>CV</span> </h3>
              </a>
            </div>
          </div>
        </section>

        <div className="container arrows mt-3">
          <div className="row">
            <div className="ml-auto mr-auto">
              <div className="d-inline-flex">
              <NavLink to="/skills" className="nav-link">
                <FaArrowLeft
                  className="arrow mt-4 white"
                />
              </NavLink>
              <NavLink to="/home" className="nav-link">
                <FaArrowRight
                  className="arrow mt-4 white"
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

// <Link
//     class="download"
//     to="route"
//     onClick={(event) => { event.preventDefault(); window.open(<Pdf />) }}>
//       <h3 className="header-download animated fadeIn delay-1s">Here you will find my <span>CV</span> soon!</h3>
// </Link>
