import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase as BriefcaseBusiness, Calendar, Code, ReceiptText, DollarSign, Users } from 'lucide-react';
import { experienceData, ExperienceItem } from '../data/experienceData';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="bg-dark-200 section-padding">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="heading mb-4">Work Experience</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey in software development, with a focus on creating impactful solutions.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-700"></div>

          {experienceData.map((item: ExperienceItem, index: number) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface TimelineItemProps {
  item: ExperienceItem;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item, index }) => {
  const isEven = index % 2 === 0;
  
  // Map icon name to Lucide icon component
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BriefcaseBusiness':
        return <BriefcaseBusiness className="text-primary-400" size={24} />;
      case 'Code':
        return <Code className="text-primary-400" size={24} />;
      case 'ReceiptText':
        return <ReceiptText className="text-primary-400" size={24} />;
      case 'DollarSign':
        return <DollarSign className="text-primary-400" size={24} />;
      case 'Users':
        return <Users className="text-primary-400" size={24} />;
      default:
        return <Code className="text-primary-400" size={24} />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative mb-12 md:mb-24 ${isEven ? 'md:text-right' : ''}`}
    >
      <div className={`flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
        {/* Timeline dot */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center w-12 h-12 rounded-full bg-dark-100 border-4 border-primary-600 z-10">
          {getIcon(item.icon)}
        </div>

        {/* Content */}
        <div className={`md:w-1/2 ${isEven ? 'md:pr-16' : 'md:pl-16'}`}>
          <div className="card h-full">
            <div className="flex md:hidden items-center mb-4">
              {getIcon(item.icon)}
              <div className="ml-3 flex items-center text-sm text-gray-400">
                <Calendar size={14} className="mr-1" />
                <span>{item.period}</span>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-primary-400 mb-1">{item.title}</h3>
            <div className="text-gray-300 font-medium mb-2">{item.company}</div>
            <div className="hidden md:flex items-center text-sm text-gray-400 mb-4">
              <Calendar size={14} className="mr-1" />
              <span>{item.period}</span>
            </div>
            <p className="text-gray-400 mb-4">{item.description}</p>
            
            {item.achievements && (
              <div>
                <h4 className="text-gray-200 font-medium mb-2">Key Achievements:</h4>
                <ul className="text-gray-400 space-y-1">
                  {item.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary-400 mr-2">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;