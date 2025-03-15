import React from "react";
import { motion } from "framer-motion";
import * as lucideIcons from "lucide-react";

interface AboutSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  benefits?: Array<{
    icon: string;
    title: string;
    description?: string;
  }>;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  title = "About Our Driver Service",
  subtitle = "Professional & Reliable",
  description = "We are a premium driver service company committed to delivering exceptional transportation solutions for all your needs. With years of experience in the industry, our skilled drivers are proficient in handling any type of vehicle, ensuring safe, comfortable, and timely journeys. Whether you need airport transfers, corporate travel, or transportation for special events, we’ve got you covered.",
  benefits = [
    {
      icon: "Shield",
      title: "Safety First",
      description:
        "All our drivers are professionally trained and vetted for your security and peace of mind.",
    },
    {
      icon: "Clock",
      title: "Punctuality",
      description:
        "We understand the value of your time and guarantee on-time pickups and arrivals.",
    },
    {
      icon: "Star",
      title: "Premium Service",
      description:
        "Enjoy a luxurious experience with our well-maintained fleet and exceptional customer service.",
    },
    {
      icon: "MapPin",
      title: "Extensive Coverage",
      description:
        "We operate in multiple locations to serve your transportation needs wherever you go.",
    },
    {
      icon: "Zap",
      title: "Instant and 24/7",
      description:
        "Our services are available round the clock to cater to your needs anytime, anywhere.",
    },
    {
      icon: "DollarSign",
      title: "Affordable Rates",
      description:
        "We offer competitive pricing without compromising on quality and reliability.",
    },
  ],
}) => {
  // Dynamically map icons from lucide-react
  const iconComponents: Record<string, React.ElementType> = {};
  benefits.forEach((benefit) => {
    if (lucideIcons[benefit.icon]) {
      iconComponents[benefit.icon] = lucideIcons[benefit.icon] as React.ElementType;
    }
  });

  return (
    <section id="about" className="py-5 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-2">{title}</h2>
          <p className="text-xl text-primary mb-6">{subtitle}</p>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = iconComponents[benefit.icon] || null;

            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border border-gray-200"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  {IconComponent ? (
                    <IconComponent className="w-8 h-8 text-primary" />
                  ) : (
                    <div className="w-8 h-8 bg-primary/30 rounded-full"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
