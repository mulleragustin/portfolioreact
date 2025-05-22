import React from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projectsData';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="bg-dark-200 section-padding">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="heading mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of my most significant work that demonstrates my skills and experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card overflow-hidden flex flex-col h-full"
            >
              <div className="relative overflow-hidden rounded-md mb-4 bg-dark-300 h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <h3 className="text-xl font-semibold text-primary-400 mb-2">{project.title}</h3>
              
              <div className="mb-3 flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-2 py-1 bg-dark-300 text-xs rounded-full text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
              
              <div className="flex space-x-3 mt-auto">
                {project.liveLink && (
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary !py-1.5 !px-4 flex items-center text-sm"
                  >
                    <ExternalLink size={16} className="mr-1" /> Live Demo
                  </a>
                )}
                
                {project.githubLink && (
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-outline !py-1.5 !px-4 flex items-center text-sm"
                  >
                    <Github size={16} className="mr-1" /> Code
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;