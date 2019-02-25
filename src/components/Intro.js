import React, { Component } from 'react';
import Navbar from './Navbar'

class Intro extends Component {

  render() {
    return (

    <>
      <section>


      <div className="container">
        <div className="row">
          <div className="ml-auto border border-white m-5">
            <div className="col-xs-10">

              <Navbar />

            </div>
          </div>
        </div>
      </div>

        <div className="container">
          <div className="row">
            <div className="col-12 col-xs-4 mt-10">
              <div className="m-6 box mx-auto bg-white">
                <h2 className="portfolio text-left ml-4">Port .</h2>
                <h2 className="portfolio text-left">folio</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12">
                <h2 className="intro-text text-right text-white border border-warning pr-2">Hello</h2>
            </div>
          </div>
        </div>

      </section>

      </>
    );
  }
}

export default Intro;
