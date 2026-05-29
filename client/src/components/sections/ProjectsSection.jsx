const projects=[
    {
title:"AI Gender & Age Recognition",
desc:"Real-time prediction using FairFace, PyTorch and OpenCV."
},

{
title:"Traffic Flow Simulation",
desc:"Multi-lane traffic simulation with PyGame visualization."
},

{
title:"Obstacle Avoiding Car",
desc:"Arduino robot using ultrasonic sensor and servo motor."
},

{
title:"Pharmacy Management",
desc:"Inventory and admin dashboard using full-stack technologies."
},

{
title:"Product Catalog App",
desc:"Responsive product catalog with backend integration."
},

{
title:"Portfolio Website",
desc:"Modern portfolio using React, FastAPI and Tailwind."
}
]

const ProjectsSection =() => {
    return (
        <section id="projects">
            <h1 className="section-title">Projects </h1>
            <p className="section-sub">Things I've built</p>

            <div className="projects-grid">
                {
                    projects.map((project, index) =>(
                        <div 
                        key={index}
                        className="project-card glow "
                        > 
                        <h1 className="project-title">{project.title}</h1>
                        <p className="project-text">{project.desc}</p>

                        <div className="project-btns">
                            <button className="btn-primary glow">Live Demo</button>
                            <button className="btn-outline glow">GitHub</button>
                        </div>
                        </div>    
                    ))
                }
            </div>

        </section>
    )
}

export default ProjectsSection;