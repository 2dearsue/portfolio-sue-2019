import React, { Component } from 'react';
import { FaHtml5, FaArrowRight, FaCss3, FaSass, FaJs, FaReact, FaSlack, FaGit } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export default class SkillIcons extends Component {

  render() {
    return (

      <>

        <div className="container">
          <div className="row">
            <div className="mx-auto pt-3 m-4">
              <div className="col-xs-10">
                <div className="container d-flex-column">
                <h2 className="skills-text text-center mb-3">...Regulars</h2>
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

                <h2 className="skills-text text-center pt-3  mb-3">...Frameworks etc.</h2>
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

                  <h2 className="skills-text text-center pt-3 mb-3">...Tools</h2>
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

              </div>
            </div>
          </div>
        </div>

        </>
      );
    }
  }
