import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-col lg:flex-row lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="w-full lg:w-2/4 flex justify-center mb-4 lg:mb-0"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  className="rounded-lg border border-gray-300 shadow-lg hover:shadow-2xl transition-shadow duration-300 w-full h-auto max-w-md"
                  src={project.image}
                  alt={project.title}
                  style={{ width: '400px', height: '220px' }} // Added inline style for size
                />
              </a>
            </motion.div>
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="w-full lg:w-2/4 flex flex-col text-left md:justify-center md:items-center lg:items-start md:text-center lg:text-left"
            >
             <h6 className="text-indigo-900 mb-3 text-2xl font-bold">{project.title}</h6>
              
              <p className="text-black-600 font-light mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="mr-2 mt-2 rounded bg-gray-200 px-3 py-1 text-sm font-medium text-purple-700 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
