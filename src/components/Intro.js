import React, { Component } from 'react';
import Navbar from './Navbar';

export default class Intro extends Component {

  render() {
    return (

    <>
      <section>

        <Navbar />

        <div className="container d-flex flex-column justify-content-end mt-4">
          <div className="row mx-auto">
            <div className="">
                <h2 className="portfolio text-left ml-4">Port .</h2>
                <h2 className="portfolio text-left">folio</h2>

              <div className="box-intro bg-white"></div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12">
                <h2 className="header text-right text-white border border-warning pr-3">Hello</h2>
            </div>
          </div>
        </div>

      </section>

      </>
    );
  }
}
