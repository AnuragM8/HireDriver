import React from "react";
import Navbar from "@/components/layout/Navbar";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
