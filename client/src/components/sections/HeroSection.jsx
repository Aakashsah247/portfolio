import {motion} from 'framer-motion';

const HeroSaction = () => {
    return (
        <section className='hero'>
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
                        <button className='btn-outline'> Contact Me </button>   
                    </div>

                </motion.div>

                <motion.div
                initial={{opacity:0,x:50}}
                animate={{opacity:1,x:0}}
                transition={{duration:0.8}}
                className="flex justify-center"
                >
                     <div className="w-80 h-80 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 p-1">
                        <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-7xl">🚀</div>
                     </div>
                    </motion.div> 


            </div>
        </section>
    )
}

export default HeroSaction;
