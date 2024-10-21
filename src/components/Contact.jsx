import React from 'react';
import { motion } from 'framer-motion';
import { BsGithub } from 'react-icons/bs'; // GitHub Icon
import { FaLinkedin, FaEnvelope, FaRegAddressCard } from 'react-icons/fa'; // LinkedIn, Email, Naukri Icons

const iconVariants = (delay) => ({
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: delay * 0.2,
      type: "spring",
      stiffness: 100,
    },
  },
});

function Contact() {
  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold text-center text-stone-800 mb-6">Contact Me</h2>
      <div className="flex justify-center space-x-8">
        {/* GitHub */}
        <a href="https://github.com/SRIJANANI-27" target="_blank" rel="noopener noreferrer">
          <motion.div
            variants={iconVariants(1)}
            initial="initial"
            animate="animate"
            whileHover={{
              scale: 1.1,
              rotate: 10,
              translateY: -5,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
            }}
            className="rounded-full shadow-lg hover:shadow-xl cursor-pointer border-4 border-gray-300 w-16 h-16 flex items-center justify-center transition-all duration-300 ease-out"
          >
            <BsGithub className="text-3xl text-gray-800 transition-transform duration-300 ease-out" />
          </motion.div>
        </a>

        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/sri-janani-800360214/" target="_blank" rel="noopener noreferrer">
          <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            whileHover={{
              scale: 1.1,
              rotate: 10,
              translateY: -5,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
            }}
            className="rounded-full shadow-lg hover:shadow-xl cursor-pointer border-4 border-gray-300 w-16 h-16 flex items-center justify-center transition-all duration-300 ease-out"
          >
            <FaLinkedin className="text-3xl text-[#0077B5] transition-transform duration-300 ease-out" />
          </motion.div>
        </a>

        {/* Email */}
        <a href="mailto:srija.janani2003@gmail.com" target="_blank" rel="noopener noreferrer">
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            whileHover={{
              scale: 1.1,
              rotate: 10,
              translateY: -5,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
            }}
            className="rounded-full shadow-lg hover:shadow-xl cursor-pointer border-4 border-gray-300 w-16 h-16 flex items-center justify-center transition-all duration-300 ease-out"
          >
            <FaEnvelope className="text-3xl text-[#FFA500] transition-transform duration-300 ease-out" />
          </motion.div>
        </a>

        {/* Naukri */}
        <a href="https://www.naukri.com/mnjuser/profile?id=&altresid" target="_blank" rel="noopener noreferrer">
          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            whileHover={{
              scale: 1.1,
              rotate: 10,
              translateY: -5,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
            }}
            className="rounded-full shadow-lg hover:shadow-xl cursor-pointer border-4 border-gray-300 w-16 h-16 flex items-center justify-center transition-all duration-300 ease-out"
          >
            <FaRegAddressCard className="text-3xl text-[#28a745] transition-transform duration-300 ease-out" />
          </motion.div>
        </a>
      </div>
    </div>
  );
}

export default Contact;
