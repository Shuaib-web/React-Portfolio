export default function Project() {
    return (<section className="sub-section-extra" id="projects">
    <h2>Projects</h2>
    <div class="project-container">
    <div id="project-card-1" className="project-card">
        <img className="project-image" src="./images/project-1.jpeg" alt="Project One Image"/>
                <h3>Project One</h3>
                <p className="subtext">Here you can find my first project that was completed a few weeks after I started my bootcamp</p>
                <hr/>
                <p class="subtext"><a class="project-link" >View here</a></p>
    </div>
    <div id="project-card-2" class="project-card">
        <img class="project-image" src="./images/project-2.jpeg" alt="Project Two Image"/>
                <h3>Project Two</h3>
                <p class="subtext">Here you can find my second project that was completed a few months after I started my bootcamp.</p>
                <hr/>
                <p class="subtext"><a class="project-link">View here</a></p>
    </div>
    <div id="project-card-3" class="project-card">
        <img class="project-image" src="./images/project-3.jpeg" alt="Project Three Image"/>
                <h3>Project Three</h3>
                <p class="subtext">Here you can find my third project that was completed towards the end of my bootcamp.</p>
                <hr/>
                <p class="subtext"><a class="project-link">View here</a></p>
    </div>
    </div>
</section>
    );
}