import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

interface NavbarProps {
  onScrollTo?: (section: string) => void;
}

const Navbar = ({ onScrollTo = () => {} }: NavbarProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Service & Prices", path: "/services" },
    { name: "Contact", path: "/contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (path: string) => {
    setIsMobileMenuOpen(false);
    navigate(path);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white",
        isScrolled ? "shadow-md py-2" : "py-4",
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <button onClick={() => handleNavClick("/")} className="text-2xl font-bold text-primary">
            Surya Driver Services
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.path}
              onClick={() => handleNavClick(link.path)}
              className={cn(
                "text-gray-700 hover:text-primary font-medium transition-colors duration-200 border-b-2 border-transparent pb-1",
                location.pathname === link.path && "text-primary border-primary font-semibold border-b-2"
              )}
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Animated Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 bg-black bg-opacity-30 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            {/* Sliding Sidebar */}
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.25 }}
              className="fixed right-0 top-0 h-full w-4/5 max-w-xs bg-white shadow-xl rounded-l-2xl flex flex-col py-8 px-6 space-y-4 border-l border-gray-100 z-50 md:hidden"
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-gray-700 hover:text-primary transition-colors text-xl focus:outline-none"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
              {/* Brand/Logo */}
              <div className="flex items-center gap-2 mb-6">
                <button
                  onClick={() => handleNavClick("/")}
                  className="flex items-center gap-2 text-2xl font-bold text-primary focus:outline-none"
                  style={{fontFamily: 'inherit'}}
                >
                  <span className="inline-block">Surya Driver Services</span>
                </button>
              </div>
              <nav className="flex flex-col gap-1 mt-2">
                {navLinks.map((link) => (
                  <button
                    key={link.path}
                    onClick={() => handleNavClick(link.path)}
                    className={cn(
                      "w-full text-left text-base px-2 py-3 rounded-md font-medium transition-colors duration-200",
                      location.pathname === link.path
                        ? "text-primary font-semibold bg-primary/10"
                        : "text-gray-700 hover:text-primary hover:bg-primary/5"
                    )}
                    style={{fontFamily: 'inherit'}}
                  >
                    {link.name}
                  </button>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
