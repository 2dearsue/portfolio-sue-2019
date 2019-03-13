import React, { Component } from 'react';
import { FaHtml5, FaCss3, FaSass, FaJs, FaReact, FaSlack, FaGit } from 'react-icons/fa';

export default class SkillIcons extends Component {

  render() {
    return (

      <>
        <div className="container">

                <div className="card-deck mx-auto pt-5">

                  <div className="card border-0 card-transparent p-3">
                    <div className="card-block">

                      <h4 className="card-title skills-text text-center pb-1 border-bottom border-secondary">Basics</h4>
                      <div className="card-deck text-center">

                        <div className="card border-0">
                          <div className="card-block">
                            <div className="card-image">
                              <FaHtml5 className="arrow" />
                              <p className="sub-text">Html5</p>
                            </div>
                          </div>
                        </div>

                        <div className="card border-0">
                          <div className="card-block">
                            <div className="card-image">
                              <FaCss3 className="arrow" />
                              <p className="sub-text">CSS</p>
                            </div>
                          </div>
                        </div>

                        <div className="card border-0">
                          <div className="card-block">
                            <div className="card-image">
                              <FaJs className="arrow" />
                              <p className="sub-text">Javascript</p>
                            </div>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>

                  <div className="card border-0 card-transparent p-3">
                    <div className="card-block">
                      <h4 className="card-title skills-text text-center pb-1 border-bottom border-secondary">Frameworks</h4>

                      <div className="card-deck text-center">

                        <div className="card border-0">
                          <div className="card-block">
                            <div className="card-image">
                              <FaReact className="arrow" />
                              <p className="sub-text">React</p>
                            </div>
                          </div>
                        </div>

                        <div className="card border-0">
                          <div className="card-block">
                            <div className="card-image">
                              <FaSass className="arrow" />
                              <p className="sub-text">Sass</p>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                </div>

                <div className="card border-0 p-3 w-50 mx-auto">
                  <div className="card-block">
                    <h4 className="card-title skills-text text-center pb-1 border-bottom border-secondary">Tools</h4>

                    <div className="card-deck text-center">

                      <div className="card border-0">
                        <div className="card-block">
                          <div className="card-image">
                            <FaGit className="arrow" />
                            <p className="sub-text">Git</p>
                          </div>
                        </div>
                      </div>

                      <div className="card border-0">
                        <div className="card-block">
                          <div className="card-image">
                            <FaSlack className="arrow" />
                            <p className="sub-text">Slack</p>
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
