import {motion} from 'framer-motion';

const HeroSaction = () => {
    return (
        <section id='home'>
            <div className='hero-grid'>
                <motion.div
                initial ={{opacity:0, x:-50}}
                animate ={{opacity:1, x:0}}
                transition={{duration: 0.8}}
                >
                    <p className='text-cyan-400 mb-4'>Hello 👋 I'm</p>

                    <h1 className='hero-title'>Aakash Sah</h1>

                    <h2 className='hero-sub'>AI + Full Stack Developer</h2>

                    <p className='hero-text'>  Building AI-powered systems and modern web applications. </p>

                    <div className='flex gap-4'>
                        <button className='btn-outline glow'> Contact Me </button>   
                    </div>

                </motion.div>

                <motion.div
                initial={{opacity:0,x:50}}
                animate={{opacity:1,x:0}}
                transition={{duration:0.8}}
                className="flex justify-center"
                >
                     <div className="hero-img float">
                        <div className="hero-inner">🚀</div>
                     </div>
                    </motion.div> 


            </div>
        </section>
    )
}

export default HeroSaction;

