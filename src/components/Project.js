import React from "react";

import Project1 from "../images/project-1.jpeg";
import Project2 from "../images/project-2.jpeg";
import Project3 from "../images/project-3.jpeg";


export default function project() {
    return (<section className="sub-section-extra" id="projects">
    <h2>Projects</h2>
    <div className="project-container">
    <div id="project-card-1" className="project-card">
        <img className="project-image" src={Project1} alt="Project One Image"/>
                <h3>Project One</h3>
                <p className="subtext">Here you can find my first project that was completed a few weeks after I started my bootcamp</p>
                <hr/>
                <p className="subtext"><a className="project-link" >View here</a></p>
    </div>
    <div id="project-card-2" className="project-card">
        <img className="project-image" src={Project2} alt="Project Two Image"/>
                <h3>Project Two</h3>
                <p className="subtext">Here you can find my second project that was completed a few months after I started my bootcamp.</p>
                <hr/>
                <p className="subtext"><a className="project-link">View here</a></p>
    </div>
    <div id="project-card-3" className="project-card">
        <img className="project-image" src={Project3} alt="Project Three Image"/>
                <h3>Project Three</h3>
                <p className="subtext">Here you can find my third project that was completed towards the end of my bootcamp.</p>
                <hr/>
                <p className="subtext"><a className="project-link">View here</a></p>
    </div>
    </div>
</section>
    );
}