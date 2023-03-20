import React from "react";

import Project1 from "../images/Weather-Dashboard.png";
import Project2 from "../images/Text-Editor.png";
import Project3 from "../images/Note-Taker.png";


export default function project() {
return ( <div className="container">
<div className="card">
<img src={Project1} alt="Weather Dashboard"></img>
<h2>
  <strong>Weather Dashboard</strong>
</h2>
<div className="buttons">
  <button className="code">
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/Shuaib-web/Weather-app"
    >
      Code
    </a>
  </button>
  <button className="site">
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://shuaib-web.github.io/Weather-app/"
    >
      Site
    </a>
  </button>
</div>
</div>
<div className="card">
<img src={Project2} alt="Text Editor"></img>
<h2>
  <strong>Text Editor</strong>
</h2>
<div className="buttons">
  <button className="code">
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/Shuaib-web/Text-Editor"
    >
      Code
    </a>
  </button>
  <button className="site">
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://shuib-text-editor.herokuapp.com/"
    >
      Site
    </a>
  </button>
</div>
</div>
<div className="card">
<img src={Project3} alt="Note Taker"></img>
<h2>
  <strong>Note Taker</strong>
</h2>
<div className="buttons">
  <button className="code">
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/Shuaib-web/Note-Taker"
    >
      Code
    </a>
  </button>
  <button className="site">
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://shuib-note-taker.herokuapp.com/"
    >
      Site
    </a>
  </button>
</div>
</div>
</div>
    );
}