import React, { Component } from 'react';
import { FaHtml5, FaArrowRight, FaCss3, FaSass, FaJs, FaReact, FaSlack, FaGit } from 'react-icons/fa';
import { Route } from 'react-router-dom';

class Skills extends Component {

  render() {
    return (

    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="skills-header text-right text-white border border-warning pr-2">Skills</h2>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="box-skills ml-auto pt-5 m-4 bg-white">
            <div className="col-xs-10">
              <div className="container d-flex-column">
              <h2 className="skills-text text-center">...Regulars</h2>
                <div className="d-flex justify-content-around">
                  <div className="d-flex align-items-center">

                    <div>
                      <FaHtml5 className="arrow ml-3" />
                      <p className="sub-text ml-3">Html5</p>
                    </div>

                    <div>
                      <FaCss3 className="arrow ml-3"/>
                      <p className="sub-text ml-3">CSS</p>
                    </div>

                    <div>
                      <FaJs className="arrow ml-3"/>
                      <p className="sub-text ml-2">Javascript</p>
                    </div>

                    </div>
                  </div>
                </div>

              <h2 className="skills-text text-center pt-3">...Frameworks etc.</h2>
                  <div className="d-flex justify-content-around">
                    <div className="d-flex">

                      <div>
                        <FaReact className="arrow ml-2"/>
                        <p className="sub-text ml-2">React</p>
                      </div>

                      <div>
                        <FaSass className="arrow ml-3"/>
                        <p className="sub-text ml-3">Sass</p>
                      </div>

                    </div>
                  </div>

                <h2 className="skills-text text-center pt-3">...Tools</h2>
                    <div className="d-flex justify-content-around">
                      <div className="d-flex align-items-end">

                        <div>
                          <FaGit className="arrow ml-2"/>
                          <p className="sub-text ml-3">Git</p>
                        </div>

                        <div>
                          <FaSlack className="arrow ml-2"/>
                          <p className="sub-text ml-2">Slack</p>
                        </div>
                      </div>
                    </div>

                    <div className="container">
                      <div className="row">
                        <div className="col-12">
                          <div>
                            <FaArrowRight className="arrow mt-5 ml-5 white"/>
                          </div>
                        </div>
                      </div>
                    </div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
}

export class SkillsPage extends React.Component {

  render() {
    return (
      <>
        <Route exact path="/skills" render={ () => <Skills /> } />
      </>
    )
  }
}
