import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="heading mb-4">Get In Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Interested in working together? Feel free to reach out for collaborations or just a friendly hello.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="card h-full">
              <h3 className="text-xl font-semibold text-primary-400 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-dark-200 p-3 rounded-lg mr-4">
                    <Mail className="text-primary-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-200">Email</h4>
                    <a href="mailto:contact@example.com" className="text-gray-400 hover:text-primary-400 transition-colors">
                      contact@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-dark-200 p-3 rounded-lg mr-4">
                    <MapPin className="text-primary-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-200">Location</h4>
                    <p className="text-gray-400">Buenos Aires, Argentina</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium text-gray-200 mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  <a
                    herf="https://instagram.com/mulleragustin.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-dark-200 p-3 rounded-lg text-gray-400 hover:text-primary-400 hover:bg-dark-300 transition-all"
                  >
                    <Instagram size={20} />
                  </a>
                  <a 
                    href="https://github.com/mulleragustin/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-dark-200 p-3 rounded-lg text-gray-400 hover:text-primary-400 hover:bg-dark-300 transition-all"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="https://linkedin.com/in/mulleragustin/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-dark-200 p-3 rounded-lg text-gray-400 hover:text-primary-400 hover:bg-dark-300 transition-all"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
{/*           <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="card">
              <h3 className="text-xl font-semibold text-primary-400 mb-6">Send a Message</h3>
              
              {submitSuccess && (
                <div className="bg-green-900/30 border border-green-700 text-green-300 px-4 py-3 rounded-md mb-6">
                  Your message has been sent successfully! I'll get back to you soon.
                </div>
              )}
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-dark-300 border border-gray-700 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-dark-300 border border-gray-700 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 bg-dark-300 border border-gray-700 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent resize-none"
                  ></textarea>
                </div>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 btn-primary w-full flex items-center justify-center disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send size={16} className="mr-2" /> Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;