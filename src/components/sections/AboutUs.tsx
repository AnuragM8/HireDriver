import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaRoute, FaShieldAlt, FaSmile, FaUserTie, FaCar, FaPlane, FaCalendarAlt, FaSuitcase, FaHome, FaTools, FaRoad } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const navigate = useNavigate();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const services = [
    { icon: <FaClock />, title: "24/7 Availability", description: "Available at all times for your needs" },
    { icon: <FaRoute />, title: "Daily Commuting", description: "Regular transport for work and appointments" },
    { icon: <FaPlane />, title: "Airport Transfers", description: "Smooth airport arrivals and departures" },
    { icon: <FaCalendarAlt />, title: "Event Transportation", description: "For corporate events and special occasions" },
    { icon: <FaUserTie />, title: "Chauffeur Services", description: "Professional drivers for daily needs" },
    { icon: <FaSuitcase />, title: "Business Travel", description: "Comfortable business travel experience" },
    { icon: <FaRoad />, title: "Long-Distance Travel", description: "Safe and timely long-distance trips" },
    { icon: <FaCar />, title: "Driver on Demand", description: "Immediate driver assistance" },
    { icon: <FaHome />, title: "Family Transport", description: "Safe family transportation services" },
    { icon: <FaTools />, title: "Vehicle Maintenance", description: "Basic vehicle care and upkeep" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      {/* Hero Section */}
      <motion.section 
        className="relative h-[70vh] bg-black text-white flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/2.jpg" 
            alt="Professional driver service" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
        </div>

        {/* Content */}
        <div className="relative z-20 text-center space-y-6 px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-lg mb-4">
              Surya Driver Services
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-blue-200 drop-shadow-lg font-light">
              "Your satisfaction is our priority"
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8"
          >
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="text-lg text-white">Professional Drivers</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="text-lg text-white">24/7 Service</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="text-lg text-white">Trusted Experience</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Introduction */}
      <motion.section 
        className="container mx-auto px-4 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-600 leading-relaxed">
            We understand that finding the right driver for your needs is essential to keeping your operations smooth and efficient. 
            Whether you need a driver for a short-term project or are looking for a long-term, reliable professional to join your team, 
            we have you covered with our flexible driver services.
          </p>
        </div>
      </motion.section>

      {/* Services */}
      <section className="container mx-auto px-4 py-16">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 text-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Our Services
        </motion.h2>

        {/* Temporary Drivers */}
        <motion.div 
          className="bg-card rounded-lg shadow-lg p-8 mb-12"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-primary">Temporary Drivers</h3>
          <p className="text-muted-foreground mb-6">
            When you need a driver on a short-term basis, we're here to help! Our temporary drivers are experienced professionals 
            ready to step in whenever and wherever you need them.
          </p>
          <ul className="grid md:grid-cols-2 gap-4">
            <li className="flex items-center space-x-2 text-muted-foreground">
              <FaShieldAlt className="text-primary" />
              <span>Flexible Contracts</span>
            </li>
            <li className="flex items-center space-x-2 text-muted-foreground">
              <FaClock className="text-primary" />
              <span>Quick & Easy Setup</span>
            </li>
            <li className="flex items-center space-x-2 text-muted-foreground">
              <FaUserTie className="text-primary" />
              <span>Fully Vetted Professionals</span>
            </li>
            <li className="flex items-center space-x-2 text-muted-foreground">
              <FaCar className="text-primary" />
              <span>Varied Fleet Options</span>
            </li>
          </ul>
        </motion.div>

        {/* Permanent Drivers */}
        <motion.div 
          className="bg-card rounded-lg shadow-lg p-8"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-primary">Permanent Drivers</h3>
          <p className="text-muted-foreground mb-6">
            For businesses that need a reliable driver for the long haul, our permanent driver service is the solution. 
            We understand the importance of consistency and professionalism in your operations.
          </p>
          <ul className="grid md:grid-cols-2 gap-4">
            <li className="flex items-center space-x-2 text-muted-foreground">
              <FaUserTie className="text-primary" />
              <span>Full-Time Commitment</span>
            </li>
            <li className="flex items-center space-x-2 text-muted-foreground">
              <FaShieldAlt className="text-primary" />
              <span>Comprehensive Hiring Process</span>
            </li>
            <li className="flex items-center space-x-2 text-muted-foreground">
              <FaSmile className="text-primary" />
              <span>Experienced & Trained Drivers</span>
            </li>
            <li className="flex items-center space-x-2 text-muted-foreground">
              <FaCar className="text-primary" />
              <span>Custom Fit for Your Fleet</span>
            </li>
          </ul>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            Why Choose Us
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['Safety First', 'Trustworthy', 'Affordable Rates', 'Customer Satisfaction', 'Flexible Hours', 'Expert Drivers'].map((item, index) => (
              <motion.div 
                key={item}
                className="bg-card p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-2 text-primary">{item}</h3>
                <p className="text-muted-foreground">We ensure the highest standards in every aspect of our service.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Driver Duties */}
      <section className="container mx-auto px-4 py-16">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 text-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          Our Drivers' Services
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-card p-6 rounded-lg shadow-md flex items-start space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2 + index * 0.1 }}
            >
              <div className="text-primary text-2xl">{service.icon}</div>
              <div>
                <h3 className="font-semibold mb-2 text-primary">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <motion.section 
        className="bg-primary text-primary-foreground py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Get Started Today!</h2>
          <p className="text-xl mb-8">
            Ready to hire a temporary or permanent driver? Contact us today to discuss your requirements.
          </p>
          <button 
            onClick={() => navigate('/contact')}
            className="bg-background text-primary hover:bg-accent px-8 py-3 rounded-full font-semibold transition-colors"
          >
            Contact Us
          </button>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutUs;
