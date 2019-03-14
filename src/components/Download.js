import React, { Component } from 'react';
import { FaArrowCircleDown } from 'react-icons/fa';

export default class Download extends Component {
  render() {
    return (
      <>
        <section className="section-download pt-5">
          <div className="card pt-5 border-0 card-primary bg-transparent">
            <div className="container flex">
              <FaArrowCircleDown className="arrow-down animated infinite pulse delay-2s"></FaArrowCircleDown>
              <h3 className="header-download animated fadeIn delay-1s">Here you will find <span>Sue's Portfolio</span> soon!</h3>
            </div>
          </div>
        </section>
      </>
    )
  }
}
