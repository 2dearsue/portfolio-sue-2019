import React, { Component } from 'react';

class AboutMe extends Component {

  render() {
    return (

    <>
      <section>

      <div className="container">
        <div className="row">
          <div className="col-12">
              <h2 className="intro-text text-left text-white border border-warning pl-2">I am
                <span className="logo text-left"> </span>
              </h2>
              <p className="about-text offset-3 text-dark">Hochmotivierte multimediale Gestalterin mit großer Leidenschaft für Musik, Film & Fotografie. Trotz großer Liebe zu vergangenen Zeiten (Musik & Design), hält sie ihr nostalgischer Hang nicht davon ab, Richtung Zukunft zu gehen und ihren kreativen Schüben auch im world wide web Ausdruck zu verleihen. Stresserprobt arbeitet sie allein und eigenverantwortlich, freut sich aber auch immer sehr über das Schaffen im Team. </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="box-about ml-auto bg-white">
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="border border white">
              <i className="fas fa-arrow-right arrow">go</i>
            </div>
          </div>
        </div>
      </div>

      </section>
      </>
    );
  }
}

export default AboutMe;
