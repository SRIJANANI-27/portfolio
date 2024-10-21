import React from 'react'
import { motion } from "framer-motion" 
import { ACHEIEVEMENTS } from '../constants'
import { MdLocationPin } from 'react-icons/md'

function Achievements() {
  return (
    <div className="border-b border-gray-300 pb-4"> 
        <motion.h2 
         whileInView={{opacity:1,y:0}}
         initial={{opacity:0,y:-100}}
         transition={{duration:0.5}}
        className="my-20 text-center text-4xl text-stone-700">Achievements</motion.h2>
        <div>
            {ACHEIEVEMENTS.map((achieve,index)=>(
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0,x:-100}}
                    transition={{duration:1}}
                    className="w-full lg:w-1/4">
                        <p className="mb-2 text-sm text-stone-600">{achieve.year}</p>
                    </motion.div>
                    <motion.div
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0,x:100}}
                    transition={{duration:1}}
                    className="w-full max-w-xl lg:w-3/4">
                    <h6 className="mb-2 font-semibold text-blue-900">
                        {achieve.title}
                    </h6>
                    <p className="mb-1 text-stone-700 text-justify">{achieve.description}</p>
                    <div className="flex">
                    
                     <div key={index} className="mr-2 mt-4 rounded bg-slate-200 px-2 py-1 text-sm font-medium text-red-900 flex flex-row">
                        <MdLocationPin className='mr-1'/> 
                        {achieve.location}
                        </div>
                   
                    </div>
                    
                    </motion.div>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Achievements