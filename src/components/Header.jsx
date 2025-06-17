import React, { useState, useEffect } from 'react';
import { Link } from "react-router";
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#042538] shadow-lg' : 'bg-[#042538]/90 backdrop-blur-sm'
    }`}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="text-2xl md:text-3xl font-bold">
            <Link to="/" className="text-white hover:text-blue-200 transition-colors duration-200">
              HireNest
            </Link>
          </div>

          {/* Hamburger menu for mobile */}
          <button
            className="md:hidden p-2 text-white hover:text-blue-200 transition-colors duration-200 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-6">
              <Link to="/" className="text-white hover:text-blue-200 text-lg font-medium transition-colors duration-200">
                Home
              </Link>
              <Link to="/about" className="text-white hover:text-blue-200 text-lg font-medium transition-colors duration-200">
                About Us
              </Link>
              <Link to="/career" className="text-white hover:text-blue-200 text-lg font-medium transition-colors duration-200">
                Career
              </Link>
              <Link to="/contact" className="text-white hover:text-blue-200 text-lg font-medium transition-colors duration-200">
                Contact Us
              </Link>
            </nav>
            <div className="flex items-center space-x-4 ml-6">
              <Link
                to="/login"
                className="text-white hover:text-blue-200 text-lg font-medium px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-blue-500 hover:bg-blue-600 text-white text-lg font-medium px-6 py-2 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Signup
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Navigation Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#042538] border-t border-white/10 animate-slideDown px-4 pb-4">
          <nav className="flex flex-col space-y-2 mt-2">
            <Link
              to="/"
              className="text-white hover:text-blue-200 text-lg font-medium px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-200"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-blue-200 text-lg font-medium px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-200"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/career"
              className="text-white hover:text-blue-200 text-lg font-medium px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-200"
              onClick={() => setMenuOpen(false)}
            >
              Career
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-blue-200 text-lg font-medium px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-200"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              to="/login"
              className="text-white hover:text-blue-200 text-lg font-medium px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-200"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-blue-500 hover:bg-blue-600 text-white text-lg font-medium px-3 py-2 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl text-center"
              onClick={() => setMenuOpen(false)}
            >
              Signup
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header; 