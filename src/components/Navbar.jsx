import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import { Menu, X, Globe } from "lucide-react";

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const t = translations[language];

  const navLinks = [
    { path: "/", label: t.nav.home },
    { path: "/despre", label: t.nav.about },
    { path: "/educatie", label: t.nav.education },
    { path: "/proiecte", label: t.nav.projects },
    { path: "/hobbyuri", label: t.nav.hobbies },
    { path: "/galerie", label: t.nav.gallery },
    { path: "/contact", label: t.nav.contact },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b-2 border-bronze shadow-luxury">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* logo si nume din navbar */}
          <Link
            to="/"
            className="flex items-center space-x-4 hover:opacity-80 transition-opacity duration-300"
          >
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-br from-burgundy via-burgundy-dark to-emerald-dark rounded-lg flex items-center justify-center border-2 border-bronze shadow-luxury">
                <span className="text-gold font-elegant font-bold text-xl tracking-wider">
                  AF
                </span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-bronze rounded-full opacity-60"></div>
            </div>
            <span className="font-elegant font-bold text-navy text-xl md:text-2xl tracking-wide">
              Airimitoaie Fabian
            </span>
          </Link>

          {/* partea pt navigare pe desktop */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-5 py-2.5 font-serif font-semibold text-lg tracking-wide transition-all duration-300 rounded-sm ${
                  isActive(link.path)
                    ? "text-burgundy bg-cream border-2 border-burgundy shadow-luxury"
                    : "text-navy hover:text-burgundy hover:bg-cream/50 border-2 border-transparent"
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-bronze to-transparent"></div>
                )}
              </Link>
            ))}
          </div>

          {/* buton limbi */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="relative px-4 py-2 border-2 border-bronze rounded-sm bg-cream hover:bg-burgundy hover:text-cream text-navy font-serif font-semibold transition-all duration-300 shadow-md hover:shadow-luxury flex items-center space-x-2"
              title={
                language === "ro"
                  ? "Switch to English"
                  : "Schimba limba in romana"
              }
            >
              <Globe className="w-4 h-4" />
              <span>{language === "ro" ? "EN" : "RO"}</span>
            </button>

            {/* blabla */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-sm text-navy hover:text-burgundy hover:bg-cream border-2 border-transparent hover:border-bronze transition-all duration-300"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* pt navigare pe mobil */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-6 border-t border-bronze/30 mt-2 pt-4 fade-in">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-sm text-lg font-serif font-semibold transition-all duration-300 border-l-4 ${
                    isActive(link.path)
                      ? "bg-burgundy/10 text-burgundy border-burgundy shadow-md"
                      : "text-navy hover:bg-cream border-transparent hover:border-bronze"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
