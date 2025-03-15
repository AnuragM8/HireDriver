import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import Footer from "@/components/layout/Footer";

const HomePage = () => {
  const navigate = useNavigate();

  const handleCtaClick = () => {
    navigate("/contact");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection onCtaClick={handleCtaClick} />
      <div className="pt-10">
        <AboutSection />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
