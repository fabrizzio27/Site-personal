import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import {
  GraduationCap,
  Briefcase,
  Code2,
  Calendar,
  Building2,
} from "lucide-react";

const About = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div
      className="page-background min-h-screen relative py-20"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop')`,
      }}
    >
      {/* ovarlei */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald/70 via-navy/60 to-emerald/70"></div>
      <div
        className="absolute inset-0 opacity-20"
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
              {t.about.title}
            </h1>
            <div className="divider-luxury"></div>
          </div>
        </div>

        {/* gridu pt continut principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* coloana stanga pt info */}
          <div className="space-y-8">
            <div className="card fade-in">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald to-emerald-dark rounded-lg flex items-center justify-center border-2 border-bronze/50 shadow-luxury">
                    <GraduationCap className="w-8 h-8 text-gold" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h2 className="text-xl md:text-2xl font-elegant font-bold text-burgundy mb-4 leading-[1.25]">
                    {t.about.student}
                  </h2>
                  <div className="flex items-center space-x-2 text-emerald-dark mb-3">
                    <Calendar className="w-5 h-5" />
                    <p className="text-base md:text-lg font-serif font-semibold">
                      {t.about.years}
                    </p>
                  </div>
                  <p className="text-base md:text-lg text-navy/80 font-serif leading-relaxed">
                    {t.about.passion}
                  </p>
                </div>
              </div>
            </div>

            <div className="card fade-in">
              <div className="flex items-start space-x-4 mb-6">
                <Briefcase className="w-6 h-6 text-bronze" />
                <h3 className="text-lg md:text-xl font-elegant font-semibold text-burgundy">
                  {t.about.experience}
                </h3>
              </div>
              <div className="ornamental-frame bg-gradient-to-br from-burgundy/10 via-emerald/10 to-burgundy/10 border-2 border-bronze/50">
                <div className="flex items-center space-x-3 mb-4">
                  <Building2 className="w-6 h-6 text-bronze" />
                  <h4 className="text-lg md:text-xl font-elegant font-bold text-burgundy-dark">
                    {t.about.hella.title}
                  </h4>
                </div>
                <div className="flex items-center space-x-2 text-emerald-dark mb-3">
                  <Calendar className="w-5 h-5" />
                  <p className="font-serif font-semibold text-base md:text-lg">
                    {t.about.hella.period}
                  </p>
                </div>
                <p className="text-burgundy-dark font-serif font-semibold mb-3 text-base md:text-lg">
                  {t.about.hella.role}
                </p>
                <div className="flex items-start space-x-2">
                  <Code2 className="w-5 h-5 text-bronze mt-1 flex-shrink-0" />
                  <p className="text-base md:text-lg text-navy/80 font-serif leading-relaxed">
                    {t.about.hella.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* coloana dreapta imagine*/}
          <div className="relative fade-in">
            <div className="ornamental-frame h-full p-6">
              <div className="aspect-square rounded-lg overflow-hidden border-2 border-bronze/50 relative">
                <img
                  src="/galerie/hella.jpg"
                  alt="HELLA FORVIA Experience"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    const parent = e.target.parentElement;
                    parent.innerHTML =
                      '<div class="w-full h-full flex items-center justify-center"><span class="text-gold font-elegant font-bold text-6xl tracking-widest">AF</span></div>';
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* sectiune pt video de pe yt */}
        <div className="mt-16 fade-in">
          <div className="ornamental-frame">
            <h2 className="text-2xl md:text-3xl font-elegant font-bold text-center text-burgundy mb-8">
              :*
            </h2>
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg border-4 border-bronze/50 shadow-luxury-lg">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/-8dyp89uWxA"
                title="Nas"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
