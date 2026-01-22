import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import { GraduationCap, Briefcase, Code2, ArrowRight } from "lucide-react";

const Home = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div
      className="min-h-screen relative"
      style={{
        background:
          "linear-gradient(135deg, #800020 0%, #014751 50%, #cd7f32 100%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        style={{ position: "relative", zIndex: 20 }}
      >
        {/* grid pt hero*/}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-12rem)] fade-in">
          {/* text stanfa */}
          <div
            className="space-y-8"
            style={{ color: "#f5f1e8", position: "relative", zIndex: 30 }}
          >
            <div className="ornamental-frame">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-elegant font-bold leading-[1.15] mb-6 luxury-text">
                {t.home.title}
              </h1>
              <div className="divider-luxury"></div>
              <p className="text-lg md:text-xl font-serif leading-relaxed text-navy/90 font-medium">
                Student în anul 4 UPT ETCti
              </p>
              <div className="pt-6">
                <Link
                  to="/despre"
                  className="btn-primary inline-flex items-center space-x-2 group"
                >
                  <span>{t.home.learnMore}</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* coloana dreapta */}
          <div className="relative">
            <div className="ornamental-frame p-6">
              <div className="relative aspect-square rounded-lg overflow-hidden border-2 border-bronze/50">
                <img
                  src="/src/galerie/pozaptproiectTMM.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    if (e.target.src.includes("src/pozaptproiectTMM.jpg")) {
                      e.target.style.display = "none";
                      const parent = e.target.parentElement;
                      parent.innerHTML =
                        '<div class="w-full h-full flex items-center justify-center"><span class="text-gold font-elegant font-bold text-6xl tracking-widest">AF</span></div>';
                    } else {
                      e.target.src = "/src/galerie/pozaptproiectTMM.jpg";
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* grid cealalta sectiune de mai jos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 fade-in">
          <div className="card text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-bronze to-transparent"></div>
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald to-emerald-dark rounded-lg flex items-center justify-center border-2 border-bronze/50 shadow-luxury">
                <GraduationCap className="w-8 h-8 text-gold" />
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-elegant font-semibold mb-4 text-burgundy">
              {language === "ro" ? "Educație" : "Education"}
            </h3>
            <p className="text-base md:text-lg text-navy/80 font-serif leading-relaxed">
              {language === "ro" ? "Student ETC anul 4" : "ETC Year 4 Student"}
            </p>
          </div>

          <div className="card text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-bronze to-transparent"></div>
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-burgundy to-burgundy-dark rounded-lg flex items-center justify-center border-2 border-bronze/50 shadow-luxury">
                <Briefcase className="w-8 h-8 text-gold" />
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-elegant font-semibold mb-4 text-burgundy">
              {language === "ro" ? "Experiență" : "Experience"}
            </h3>
            <p className="text-base md:text-lg text-navy/80 font-serif leading-relaxed">
              {language === "ro" ? "HELLA FORVIA 2025" : "HELLA FORVIA 2025"}
            </p>
          </div>

          <div className="card text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-bronze to-transparent"></div>
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald to-emerald-dark rounded-lg flex items-center justify-center border-2 border-bronze/50 shadow-luxury">
                <Code2 className="w-8 h-8 text-gold" />
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-elegant font-semibold mb-4 text-burgundy">
              {language === "ro" ? "Tehnologii" : "Technologies"}
            </h3>
            <p className="text-base md:text-lg text-navy/80 font-serif leading-relaxed">
              {language === "ro"
                ? "Python, React, Web Development"
                : "Python, React, Web Development"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
