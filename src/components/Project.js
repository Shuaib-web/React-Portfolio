import React from "react";

import NoteTaker from "../images/Note-Taker.png";
import TextEditor from "../images/Text-Editor.png";
import Teamprofile from "../images/Teamprofile.png";
import WeatherDashboard from "../images/Weather-Dashboard.png";

import "../project.css";

const Portfolio = () => {
  return (
    <div id="portfolio" data-aos="fade-in">
      <div className="container">
        <div className="row">
          <div className="col-sm-11 offset-sm-1">
            <div className="row">
              <div className="col-sm-12">
                <h2>Portfolio</h2>
                <br />
              </div>
        
              <div className="col-sm-4">
                <div className="imgimagessec" data-aos="zoom-in">
                  <a href="">
                  <img src={NoteTaker} className="img-fluid" alt="Express.js: Note Taker" />
                  <h6>Express.js: Note Taker</h6>
                  </a>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="images" data-aos="zoom-in">
                  <a href="https://shuib-text-editor.herokuapp.com/">
                  <img src={TextEditor} className="img-fluid" alt="Text Editor" />
                  <h6>Express.js: Text Editor</h6>
                  </a>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="images" data-aos="zoom-in">
                  <a href="https://github.com/Shuaib-web/Team-Profile-Generator">
                  <img src={Teamprofile} className="img-fluid" alt="Team Profile Generator" />
                  <h6>Express.js: Team Profile Generator</h6>
                  </a>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="imgsec" data-aos="zoom-in">
                  <a href="https://github.com/Shuaib-web/Weather-app">
                  <img src={WeatherDashboard} className="img-fluid" alt="Weather app" />
                  <h6>Weather Dashboard</h6>
                  </a>
                </div>
              </div>       
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;