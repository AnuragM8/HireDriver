import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import ServiceAreaMap from "@/components/sections/MapSection";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

interface ContactSectionProps {
  title?: string;
  subtitle?: string;
  contactInfo?: {
    email?: string;
    phone?: string;
    address?: string;
  };
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
}

const ContactSection = ({
  title = "Contact Us",
  subtitle = "Have questions or need to book a service? Reach out to us using any of the methods below.",
  contactInfo = {
    email: "info@driverservice.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main Street, City, State 12345",
  },
  socialLinks = {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
}: ContactSectionProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    fetch("https://docs.google.com/forms/d/e/1FAIpQLSew1bB2cyLN8Vw8ywrpEVvwDl6u9lTQGlrIYTB9RXDNp-E6DA/formResponse", {
      method: "POST",
      body: formData,
      mode: "no-cors",
    })
      .then(() => {
        setIsSubmitted(true); // Disable button and update text
        setShowToast(true); // Show toast
        setTimeout(() => setShowToast(false), 4000); // Hide toast after 5 seconds
      })
      .catch((error) => {
        console.error("Form submission error:", error);
      });
  };

  return (
    <section id="contact" className="py-8 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-white p-6 rounded-lg shadow-lg space-y-6 flex flex-col">
            <h3 className="text-2xl font-semibold text-gray-900">Get in Touch</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <a 
                  href={`mailto:${contactInfo.email}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <a 
                  href={`tel:${contactInfo.phone}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactInfo.address)}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  {contactInfo.address}
                </a>
              </div>
            </div>
            <div className="flex-1 w-full h-full">
              <ServiceAreaMap />
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg w-full">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                <Input 
                  id="name" 
                  name="entry.1832943086" 
                  type="text"
                  placeholder="Your Name" 
                  className="mt-1" 
                />
              </div>

              <div>
                <label htmlFor="contact" className="text-sm font-medium text-gray-700">Contact Number</label>
                <Input 
                  id="contact" 
                  name="entry.1492885043" 
                  type="tel"
                  placeholder="Contact Number" 
                  className="mt-1" 
                  required 
                />
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                <Textarea 
                  id="message" 
                  name="entry.2013661223" 
                  placeholder="Your message" 
                  className="mt-1 min-h-[120px]" 
                />
              </div>

              <Button 
                type="submit" 
                className={`w-full py-3 text-lg transition-all duration-300 ${
                  isSubmitted 
                    ? "bg-green-500 text-white cursor-not-allowed transform scale-105" 
                    : "bg-primary hover:bg-opacity-90 text-white"
                }`}
                disabled={isSubmitted}
              >
                {isSubmitted ? "Successfully Sent" : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
      {showToast && (
        <div className="fixed top-20 right-4 bg-green-500 text-white py-2 px-4 rounded shadow-lg">
          We have received your request. We will reach out to you shortly.
        </div>
      )}
    </section>
  );
};

export default ContactSection;