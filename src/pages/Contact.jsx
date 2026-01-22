import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div
      className="page-background min-h-screen relative py-20"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&h=1080&fit=crop')`,
      }}
    >
      {/* overlau */}
      <div className="absolute inset-0 bg-gradient-to-b from-burgundy/70 via-navy/60 to-emerald/70"></div>
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=1920&h=1080&fit=crop')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "overlay",
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* header */}
        <div className="text-center mb-16 fade-in">
          <div className="ornamental-frame inline-block px-8 py-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-elegant font-bold text-cream luxury-text mb-6 leading-[1.15]">
              {t.contact.title}
            </h1>
            <div className="divider-luxury"></div>
          </div>
        </div>

        {/* contactn info */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 fade-in">
            <div className="ornamental-frame">
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-burgundy to-burgundy-dark rounded-lg flex items-center justify-center border-2 border-bronze/50 shadow-luxury">
                    <Mail className="w-7 h-7 text-gold" />
                  </div>
                </div>
                <div className="flex-grow min-w-0">
                  <h3 className="text-base md:text-lg font-elegant font-semibold text-burgundy mb-3 leading-[1.3]">
                    {t.contact.email}
                  </h3>
                  <a
                    href="mailto:fabianairimitoaie@gmail.com"
                    className="text-emerald-dark hover:text-burgundy font-serif font-medium transition-colors duration-300 break-words text-sm md:text-base leading-relaxed"
                  >
                    fabianairimitoaie@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="ornamental-frame">
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald to-emerald-dark rounded-lg flex items-center justify-center border-2 border-bronze/50 shadow-luxury">
                    <Phone className="w-7 h-7 text-gold" />
                  </div>
                </div>
                <div className="flex-grow min-w-0">
                  <h3 className="text-base md:text-lg font-elegant font-semibold text-burgundy mb-3 leading-[1.3]">
                    {t.contact.phone}
                  </h3>
                  <p className="text-navy/80 font-serif text-sm md:text-base break-words leading-relaxed">
                    0790829084
                  </p>
                </div>
              </div>
            </div>

            <div className="ornamental-frame sm:col-span-2 lg:col-span-1">
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-bronze to-gold rounded-lg flex items-center justify-center border-2 border-burgundy/50 shadow-luxury">
                    <MapPin className="w-7 h-7 text-cream" />
                  </div>
                </div>
                <div className="flex-grow min-w-0">
                  <h3 className="text-base md:text-lg font-elegant font-semibold text-burgundy mb-3 leading-[1.3]">
                    {t.contact.location}
                  </h3>
                  <p className="text-navy/80 font-serif text-sm md:text-base break-words leading-relaxed">
                    Timisoara, Timis, Romania
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
