const skills =[
    "React",
"Python",
"FastAPI",
"JavaScript",
"Firebase",
"Machine Learning",
"SQL",
"Git"
]

const SkillsSection =() => {
    return (

        <section id="skills">
            <h1 className="section-title">Skills</h1>
            <p className="section-sub">Technologies I work with</p>

            <div className="skills-grid">
                {
                    skills.map((skill, index) => (
                        <div key= {index} className=" skill-card glow">

                            <h2> {skill}</h2>
                        </div>
                    ))
                }

            </div>
            
         </section>

    )

}

export default SkillsSection;