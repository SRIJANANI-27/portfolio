import React from 'react'
import { motion } from "framer-motion" 
import aboutImg from "../assets/about.jpg"
import { ABOUT_TEXT } from '../constants'
function About() {
  return (
    <div className="border-b border-gray-300 pb-24">
        <h2 className="my-20 text-center text-4xl text-stone-800">About Me</h2>
        <div className="flex flex-wrap">
        <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:0.5}}
        className="w-full lg:w-1/2">
            <div className="flex items-center justify-center">
            <img
  className="rounded-2xl w-full md:w-4/6 h-auto md:object-cover md:h-48 lg:h-96 " // Changed md:h-60 to md:h-48
  src={aboutImg}
  alt="About Image"
/>
       </div>
        </motion.div>
        <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:100}}
        transition={{duration:0.5}}
        className="w-full lg:w-1/2">
            <div className="flex justify-center lg:justify-start flex-col">
                <p className="text-stone-700 my-2 max-w-xl py-6 text-justify">{ABOUT_TEXT}</p>
                
            </div>
            <a href="https://drive.google.com/file/d/1B8FX8_av-epRFZowF-CFSQ_6UZpmLMg2/view?usp=drive_link" target='_blank'><div className="w-32 text-start border-slate-900 border-2 rounded-3xl p-1 text-slate-900 hover:bg-slate-800 hover:text-white transition-all duration-75 cursor-pointer">
                    <p className="text-center font-semibold">View Resume</p>
                </div></a>
        </motion.div>
        </div>
        
    </div>
  )
}

export default About