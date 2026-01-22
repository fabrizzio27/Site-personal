import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import { MapPin, Calendar, GraduationCap } from "lucide-react";

const Education = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const educationItems = [
    {
      id: 1,
      title: t.education.cnet.title,
      period: t.education.cnet.period,
      description: t.education.cnet.description,
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.1234567890!2d23.275556!3d45.033333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDAyJzAwLjAiTiAyM8KwMTYnMzIuMCJF!5e0!3m2!1sen!2sro!4v1234567890",
      image: "/galerie/cnet.jpg",
      websiteUrl: "https://www.ecat.ro/",
    },
    {
      id: 2,
      title: t.education.upt.title,
      period: t.education.upt.period,
      description: t.education.upt.description,
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.1234567890!2d21.228331!3d45.748871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4745678901234567%3A0x1234567890abcdef!2sPolitehnica%20University%20Timisoara!5e0!3m2!1sen!2sro!4v1234567890",
      image: "/galerie/upt.png",
      websiteUrl: "https://www.etc.upt.ro",
    },
    {
      id: 3,
      title: t.education.sda.title,
      period: t.education.sda.period,
      description: t.education.sda.description,
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.1234567890!2d21.228331!3d45.748871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDQ0JzU2LjAiTiAyMcKwMTMnNDIuMCJF!5e0!3m2!1sen!2sro!4v1234567890",
      image: "/galerie/sda.png",
      websiteUrl: "https://sdacademy.ro/",
    },
  ];

  return (
    <div
      className="page-background min-h-screen relative py-20"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1920&h=1080&fit=crop')`,
      }}
    >
      {/* overlayyyy */}
      <div className="absolute inset-0 bg-gradient-to-b from-mahogany/70 via-navy/60 to-mahogany/70"></div>
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
              {t.education.title}
            </h1>
            <div className="divider-luxury"></div>
          </div>
        </div>

        {/* grid pt timeline*/}
        <div className="space-y-16">
          {educationItems.map((item, index) => (
            <div
              key={item.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 fade-in ${
                index % 2 === 0 ? "lg:grid-flow-row" : "lg:grid-flow-row-dense"
              }`}
            >
              {/* card cu imagine si ingo */}
              <a
                href={item.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`ornamental-frame block hover:shadow-luxury-lg transition-all duration-300 ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}
              >
                <div className="relative aspect-video rounded-lg overflow-hidden mb-6 border-2 border-bronze/50">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                      const parent = e.target.parentElement;
                      parent.innerHTML =
                        '<div class="w-full h-full flex items-center justify-center"><div class="w-16 h-16 text-gold text-6xl">⚜</div></div>';
                    }}
                  />
                </div>

                <div className="space-y-4">
                  <div>
                    <h2 className="text-xl md:text-2xl font-elegant font-bold text-burgundy mb-3 hover:text-burgundy-dark transition-colors duration-300 leading-[1.25]">
                      {item.title}
                    </h2>
                    <div className="flex items-center space-x-2 text-emerald-dark mb-2">
                      <Calendar className="w-5 h-5" />
                      <p className="text-base md:text-lg font-serif font-semibold">
                        {item.period}
                      </p>
                    </div>
                  </div>
                  <div className="divider-luxury"></div>
                  <p className="text-base md:text-lg text-navy/80 font-serif leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </a>

              {/* harti pt liceu si faculta*/}
              {item.id !== 3 && (
                <div
                  className={`${
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  <div className="ornamental-frame h-full p-0 overflow-hidden">
                    <div className="relative aspect-video w-full">
                      <div className="absolute inset-0 bg-gradient-to-br from-bronze/10 to-emerald/10"></div>
                      <iframe
                        className="w-full h-full relative z-10"
                        src={item.mapUrl}
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`Map for ${item.title}`}
                      ></iframe>
                      <div className="absolute bottom-4 left-4 z-20">
                        <div className="bg-navy/80 backdrop-blur-sm px-4 py-2 rounded-sm border border-bronze/50">
                          <div className="flex items-center space-x-2 text-cream">
                            <MapPin className="w-5 h-5 text-gold" />
                            <span className="font-serif font-semibold">
                              {item.title}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
