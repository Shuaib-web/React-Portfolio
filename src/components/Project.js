import React from "react";

import NoteTaker from "../images/Note-Taker.png";
import TextEditor from "../images/Text-Editor.png";

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
                <div className="imgsec" data-aos="zoom-in">
                  <a href="">
                  <img src={NoteTaker} className="img-fluid" alt="Express.js: Note Taker" />
                  <h6>Express.js: Note Taker</h6>
                  </a>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="imgsec" data-aos="zoom-in">
                  <a href="https://ms-note-taker.herokuapp.com/">
                  <img src={TextEditor} className="img-fluid" alt="Express.js: Note Taker" />
                  <h6>Express.js: Text Editor</h6>
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