import { HERO_CONTENT } from '../constants/index.js';
import profile from '../assets/sri.jpg';
import { motion } from "framer-motion";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
});

const Me = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35 mt-20">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:px-8">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1 
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-14 text-5xl font-thin tracking-thin sm:text-5xl lg:mt-1 lg:text-7xl">
                            Srijanani
                        </motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl md:text-4xl tracking-tight text-transparent mb-7">
                            Front-End Developer
                        </motion.span>
                        <motion.p 
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className='my-2 max-w-xl font-thin md:px-24 lg:px-0 text-neutral-900 mb-5 text-left'>
                            I am a frontend developer specializing in the MERN stack, with strong expertise in React.js,  and responsive UI design. I leverage Figma to create intuitive and user-friendly interfaces. My skills extend to backend technologies like Node.js and database management with MongoDB. I thrive on building scalable web applications and am always eager to adopt new technologies to solve complex challenges.
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-6">
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.2, delay: 1.3 }}
                        className="flex justify-center flex-wrap">
                        <img 
                            className='shadow hover:shadow-gray-700 transition-transform rounded-3xl max-w-full h-96 w-96 object-cover'  
                            src={profile} 
                            alt="profile" 
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Me;
