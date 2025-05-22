import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-scroll";
import profilePic from "../assets/images/fotoperfil.png";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 container-padding"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="mb-8 relative">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-cyan-600 shadow-lg">
              <img
                src={profilePic}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-400/20 to-blue-400/20"></div>
          </div>

          <p className="text-primary-400 mb-4 font-medium">Hello, I'm a</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text-2">Agustin Muller <br/> Full Stack Developer</span>
          </h1>
          <h3 className="text-4xl md:text-1xl lg:text-3xl font-bold mb-6"> Partner TinyStudio</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Specializing in creating web applications, scraping, and IT solutions. If you can think it, you can elbow it.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-70}
              className="btn-primary"
            >
              View My Work
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className="btn-outline"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-0 right-0 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <Link
            to="experience"
            smooth={true}
            duration={500}
            offset={-70}
            className="animate-bounce cursor-pointer"
          >
            <ChevronDown className="text-primary-400" size={32} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
