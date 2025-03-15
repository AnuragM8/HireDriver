import React from "react";
import { motion } from "framer-motion";
import PricingCalculator from "../services/PricingCalculator";
import { Button } from "../ui/button";
import { ArrowRight, Briefcase, Car, MapPin, Shield, Star } from "lucide-react";

interface ServicesProps {
  title?: string;
  subtitle?: string;
}

const ServicesSection = ({
  title = "Our Services & Charges",
  subtitle = "Choose from our range of premium driver services tailored to your needs",
}: ServicesProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const services = [
    {
      id: 1,
      title: "Standard Driver Service",
      description:
        "Professional drivers for your daily commute and local travel needs",
      image: "./ser1.jpeg", // Changed to relative path
      features: [
        "Experienced and verified drivers",
        "Punctual and reliable service",
        "Flexible booking options",
        "24/7 customer support",
      ],
      icon: <Car className="h-6 w-6 text-primary" />,
      pricing: [
        { label: "Minimum - For 4 Hours", price: "₹500" },
        { label: "For Every Extra Hour", price: "₹100" },
        { label: "For 8 Hours", price: "₹900" },
        { label: "For 12 Hours", price: "₹1300" },
      ],
    },
    {
      id: 2,
      title: "Out of Station Service",
      description:
        "Reliable drivers for your intercity travel and long journeys",
      image: "./ser2.jpeg", // Changed to relative path
      features: [
        "Highway experienced drivers",
        "Multi-day booking options",
        "Food allowance included",
        "24/7 emergency assistance",
      ],
      icon: <MapPin className="h-6 w-6 text-primary" />,
      pricing: [
        { label: "Out of Station/City - 12 Hours", price: "₹1400 + Food" },
      ],
    },
    {
      id: 3,
      title: "Full-Time Driver Service",
      description:
        "Hire professional drivers on a full-time basis for daily travel needs.",
      image: "./ser3.jpeg", // Changed to relative path
      features: [
        "Monthly salaried drivers",
        "Background verified professionals",
        "Flexible contract options",
        "Replacement support available",
      ],
      icon: <Briefcase className="h-6 w-6 text-primary" />,
      pricing: [
        { label: "Full-Time Driver - Monthly", price: "₹18,000 - ₹25,000" },
      ],
    },
    {
      id: 4,
      title: "Corporate Driver Solutions",
      description:
        "Dedicated drivers for businesses and corporate requirements",
      image: "./ser4.jpeg", // Changed to relative path
      features: [
        "Dedicated corporate accounts",
        "Multiple vehicle support",
        "Customized billing options",
        "Priority booking system",
      ],
      icon: <Shield className="h-6 w-6 text-primary" />,
      pricing: [{ label: "Contact for custom corporate packages", price: "" }],
    },
  ];

  return (
    <section id="services" className="py-8 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Services Display - Left Side */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:w-1/2 grid grid-cols-1 gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row"
              >
                <div className="md:w-2/5 h-48 md:h-auto relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <h3 className="text-xl font-bold text-white">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <div className="md:w-3/5 p-6 flex flex-col justify-between">
                  <div>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary mr-2">✓</span>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-2">
                    {service.pricing.map((price, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span>{price.label}</span>
                        <span className="font-semibold">{price.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Pricing Calculator - Right Side */}
          <motion.div
            id="pricing-calculator"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 sticky top-24 self-start"
          >
            <PricingCalculator />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
