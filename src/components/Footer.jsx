import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import { Instagram, Facebook, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/2k.fabi?igsh=cTZ1OXhtaTg5ZzF4&utm_source=qr",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/share/185nD2ivgK/?mibextid=wwXIfr",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/fabian-silviu-airimi%C8%9Boaie-b1900833b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
    { name: "GitHub", icon: Github, url: "https://www.github.com/fabrizzio27" },
  ];

  return (
    <footer className="relative bg-navy text-cream mt-auto border-t-4 border-bronze">
      {/* pt border de sus*/}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-bronze to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* pt linkuri insta etc etc */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-base md:text-lg font-elegant font-semibold mb-6 text-gold tracking-wider uppercase border-b-2 border-bronze/30 pb-2 w-full leading-[1.3]">
              {language === "ro" ? "Social Media" : "Social Media"}
            </h3>
            <div className="flex space-x-6">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-12 h-12 flex items-center justify-center border-2 border-bronze/50 rounded-sm bg-navy-light hover:bg-bronze/20 transition-all duration-300 hover:border-bronze hover:shadow-luxury"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5 text-bronze group-hover:text-gold transition-colors duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-br from-bronze/0 via-gold/0 to-bronze/0 group-hover:from-bronze/10 group-hover:via-gold/10 group-hover:to-bronze/10 transition-all duration-300"></div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* pt linkuri rapide de jos */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-base md:text-lg font-elegant font-semibold mb-6 text-gold tracking-wider uppercase border-b-2 border-bronze/30 pb-2 w-full leading-[1.3]">
              {language === "ro" ? "Linkuri rapide" : "Quick Links"}
            </h3>
            <div className="flex flex-col space-y-3">
              <Link
                to="/"
                className="text-base text-cream hover:text-gold transition-colors duration-300 font-serif border-l-2 border-transparent hover:border-bronze pl-2 leading-relaxed"
              >
                {t.nav.home}
              </Link>
              <Link
                to="/despre"
                className="text-base text-cream hover:text-gold transition-colors duration-300 font-serif border-l-2 border-transparent hover:border-bronze pl-2 leading-relaxed"
              >
                {t.nav.about}
              </Link>
              <Link
                to="/contact"
                className="text-base text-cream hover:text-gold transition-colors duration-300 font-serif border-l-2 border-transparent hover:border-bronze pl-2 leading-relaxed"
              >
                {t.nav.contact}
              </Link>
            </div>
          </div>

          {/* copyrightzzzz */}
          <div className="flex flex-col items-center md:items-end justify-center">
            <div className="ornamental-frame max-w-xs w-full">
              <p className="text-sm md:text-base text-black/100 font-serif text-center leading-relaxed">
                {t.footer.rights}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* pt dungi decorative */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-bronze to-transparent"></div>
    </footer>
  );
};

export default Footer;
