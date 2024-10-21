import React from "react";
import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { DiMongodb, DiJavascript } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiAngular, SiTypescript, SiHtml5, SiCss3, SiFigma } from "react-icons/si";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

function Technologies() {
  return (
    <div className="border-b border-gray-300 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl text-stone-700"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap justify-center items-center gap-4"
      >
        {/* HTML */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          whileHover={{
            scale: 1.1,
            rotate: 3,
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
          }}
          className="rounded-2xl shadow-lg hover:shadow-xl border-4 border-gray-300 p-4 flex flex-col items-center justify-center transition-all duration-300 ease-out"
        >
          <SiHtml5 className="text-5xl text-orange-500 transition-transform duration-300 ease-out" />
          <span className="text-sm text-red-600 mt-1">HTML 5</span>
        </motion.div>

        {/* CSS */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          whileHover={{
            scale: 1.1,
            rotate: 3,
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
          }}
          className="rounded-2xl shadow-lg hover:shadow-xl border-4 border-gray-300 p-4 flex flex-col items-center justify-center transition-all duration-300 ease-out"
        >
          <SiCss3 className="text-5xl text-blue-600 transition-transform duration-300 ease-out" />
          <span className="text-sm text-blue-500 mt-1">CSS 3</span>
        </motion.div>

        {/* Tailwind */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          whileHover={{
            scale: 1.1,
            rotate: 3,
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
          }}
          className="rounded-2xl shadow-lg hover:shadow-xl border-4 border-gray-300 p-4 flex flex-col items-center justify-center transition-all duration-300 ease-out"
        >
          <RiTailwindCssFill className="text-5xl text-cyan-600 transition-transform duration-300 ease-out" />
          <span className="text-sm text-cyan-600 mt-1">Tailwind CSS</span>
        </motion.div>

        {/* JavaScript */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          whileHover={{
            scale: 1.1,
            rotate: 3,
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
          }}
          className="rounded-2xl shadow-lg hover:shadow-xl border-4 border-gray-300 p-4 flex flex-col items-center justify-center transition-all duration-300 ease-out"
        >
          <DiJavascript className="text-5xl text-yellow-500 transition-transform duration-300 ease-out" />
          <span className="text-sm text-yellow-500 mt-1">JavaScript</span>
        </motion.div>

        {/* Angular */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          whileHover={{
            scale: 1.1,
            rotate: 3,
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
          }}
          className="rounded-2xl shadow-lg hover:shadow-xl border-4 border-gray-300 p-4 flex flex-col items-center justify-center transition-all duration-300 ease-out"
        >
          <SiAngular className="text-5xl text-red-600 transition-transform duration-300 ease-out" />
          <span className="text-sm text-red-600 mt-1">Angular</span>
        </motion.div>

        {/* TypeScript */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          whileHover={{
            scale: 1.1,
            rotate: 3,
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
          }}
          className="rounded-2xl shadow-lg hover:shadow-xl border-4 border-gray-300 p-4 flex flex-col items-center justify-center transition-all duration-300 ease-out"
        >
          <SiTypescript className="text-5xl text-blue-400 transition-transform duration-300 ease-out" />
          <span className="text-sm text-blue-400 mt-1">TypeScript</span>
        </motion.div>

        {/* React */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          whileHover={{
            scale: 1.1,
            rotate: 3,
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
          }}
          className="rounded-2xl shadow-lg hover:shadow-xl border-4 border-gray-300 p-4 flex flex-col items-center justify-center transition-all duration-300 ease-out"
        >
          <RiReactjsLine className="text-5xl text-cyan-500 transition-transform duration-300 ease-out" />
          <span className="text-sm text-cyan-400 mt-1">React.js</span>
        </motion.div>

        {/* MongoDB */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          whileHover={{
            scale: 1.1,
            rotate: 3,
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
          }}
          className="rounded-2xl shadow-lg hover:shadow-xl border-4 border-gray-300 p-4 flex flex-col items-center justify-center transition-all duration-300 ease-out"
        >
          <DiMongodb className="text-5xl text-green-400 transition-transform duration-300 ease-out" />
          <span className="text-sm text-green-400 mt-1">MongoDB</span>
        </motion.div>

        {/* Node.js */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          whileHover={{
            scale: 1.1,
            rotate: 3,
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
          }}
          className="rounded-2xl shadow-lg hover:shadow-xl border-4 border-gray-300 p-4 flex flex-col items-center justify-center transition-all duration-300 ease-out"
        >
          <FaNodeJs className="text-5xl text-green-500 transition-transform duration-300 ease-out" />
          <span className="text-sm text-green-500 mt-1">Node.js</span>
        </motion.div>

        {/* Express */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          whileHover={{
            scale: 1.1,
            rotate: 3,
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
          }}
          className="rounded-2xl shadow-lg hover:shadow-xl border-4 border-gray-300 p-4 flex flex-col items-center justify-center transition-all duration-300 ease-out"
        >
          <SiExpress className="text-5xl text-stone-700 transition-transform duration-300 ease-out" />
          <span className="text-sm text-stone-700 mt-1">Express.js</span>
        </motion.div>

        {/* Figma */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          whileHover={{
            scale: 1.1,
            rotate: 3,
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
          }}
          className="rounded-2xl shadow-lg hover:shadow-xl border-4 border-gray-300 p-4 flex flex-col items-center justify-center transition-all duration-300 ease-out"
        >
          <SiFigma className="text-5xl text-red-500 transition-transform duration-300 ease-out" />
          <span className="text-sm text-red-500 mt-1">Figma</span>
        </motion.div>

        {/* GitHub */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          whileHover={{
            scale: 1.1,
            rotate: 3,
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
          }}
          className="rounded-2xl shadow-lg hover:shadow-xl border-4 border-gray-300 p-4 flex flex-col items-center justify-center transition-all duration-300 ease-out"
        >
          <BsGithub className="text-5xl text-black transition-transform duration-300 ease-out" />
          <span className="text-sm text-black mt-1">GitHub</span>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Technologies;
