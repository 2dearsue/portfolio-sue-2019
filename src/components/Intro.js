import React, { Component } from 'react';

class Intro extends Component {

  render() {
    return (

    <>
      <section>

      <div className="container">
        <div className="row">
          <div className="my-2 box-2 mx-auto border border-white">

          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="my-2 box-2 ml-auto border border-white">
            <div class="col-xs-10">
              <h3 class="logo text-left">sue</h3>
            </div>
          </div>
        </div>
      </div>

        <div className="container">
          <div className="row">
            <div className="col-12 col-xs-4 mt-10">
              <div className=" m-6 box mx-auto bg-white">
                <h2 className="portfolio text-left ml-4">Port .</h2>
                <h2 className="portfolio text-left">folio</h2>
                <h2 className="intro-text text-right text-white border border-light">Hello</h2>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section>

      <div className="container">
        <div className="row">
          <div className="mt-10 box-2 ml-auto">
            <div class="col-xs-10">

            </div>
          </div>
        </div>
      </div>

        <div className="container">
          <div className="row">
            <div className="col-12 col-xs-4 mt-10">
              <div className="box-3 ml-auto bg-white">
                <h2 className="text-left portfolio lowercase">I am
                  <span class="logo text-left">sue</span>
                </h2>

              </div>
            </div>
          </div>
        </div>

      </section>
      </>
    );
  }
}

export default Intro;
