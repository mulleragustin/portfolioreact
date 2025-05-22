import React from 'react';
import { Link } from 'react-scroll';
import { ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-300 py-8">
      <div className="container mx-auto container-padding">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Agustin Muller. All rights reserved.
            </p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="flex items-center text-gray-400 hover:text-primary-400 transition-colors cursor-pointer"
            >
              <span className="mr-1">Back to top</span>
              <ChevronUp size={16} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;