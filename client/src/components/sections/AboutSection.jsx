import { motion } from "framer-motion";

const AboutSection =() => {
    return(

        <section id="about">
            <div className="container">
                <h1 className="section-title"> About Me</h1>
                <p className="section-sub">Know more about me</p>
                <div className="about-grid">
                    <motion.div
                    initial={{opacity:0,x:-50}}
                    whileInView={{opacity:1,x:0}}
                    transition={{duration:0.8}}
                    > 
                    <div className="about-card glow">
                        <h2 className="text-2xl font-bold mb-5">AI + Full Stack Developer</h2>
                        <p className="about-text">
                            I'm Aakash Sah, a passionate developer who enjoys building
                            AI systems, modern websites, and scalable applications.

                            I love solving real-world problems using technology and
                            continuously learning new tools.

                        </p>
                    </div>
                    </motion.div>

                    <motion.div
                    initial={{opacity:0,x:50}}
                    whileInView={{opacity:1,x:0}}
                    transition={{duration:0.8}}
                    >
                        <div className="about-card glow">
                            <div className="space-y-4">
                                
                                <p>📍 Nepal</p>

                                <p>🎓 Computer Engineering Student</p>

                                <p>💻 AI + Full Stack Developer</p>

                                <p>🚀 Building real-world projects</p>
                            </div>
                        </div>

                    </motion.div>

                </div>
            </div>
        </section>
    )
}

export default AboutSection;
