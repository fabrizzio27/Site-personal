import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";

const Hobbies = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const hobbies = [
    {
      id: 1,
      title: t.hobbies.gym.title,
      description: t.hobbies.gym.description,
      image: "/galerie/gym.webp",
    },
    {
      id: 2,
      title: t.hobbies.football.title,
      description: t.hobbies.football.description,
      image: "/galerie/messi.webp",
    },
  ];

  return (
    <div
      className="page-background min-h-screen relative py-20"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1080&fit=crop')`,
      }}
    >
      {/* pt overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-emerald/60 to-navy/70"></div>
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
              {t.hobbies.title}
            </h1>
            <div className="divider-luxury"></div>
          </div>
        </div>

        {/* grid de la hobbyuri */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {hobbies.map((hobby, index) => (
            <div
              key={hobby.id}
              className="ornamental-frame overflow-hidden fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative aspect-video rounded-lg overflow-hidden mb-6 border-2 border-bronze/50">
                <img
                  src={hobby.image}
                  alt={hobby.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    const parent = e.target.parentElement;
                    parent.innerHTML =
                      '<div class="w-full h-full flex items-center justify-center"><div class="w-16 h-16 text-gold">⚜</div></div>';
                  }}
                />
              </div>

              <h2 className="text-xl md:text-2xl font-elegant font-bold text-burgundy mb-4 leading-[1.25]">
                {hobby.title}
              </h2>
              <div className="divider-luxury"></div>
              <p className="text-base md:text-lg text-navy/80 font-serif leading-relaxed">
                {hobby.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
