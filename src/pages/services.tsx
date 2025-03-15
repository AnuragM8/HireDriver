import React from "react";
import Navbar from "@/components/layout/Navbar";
import ServicesSection from "@/components/sections/ServicesSection";
import Footer from "@/components/layout/Footer";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20">
        <ServicesSection />
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
