import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const projects = [
    {
      id: 1,
      name: "AI Code Reviewer",
      description:
        language === "ro"
          ? "Aplicație pentru review automatizat al codului folosind AI"
          : "Application for automated code review using AI",
      technologies: ["React", "Python", "Tailwind CSS", "Ollama"],
      url: "https://github.com/fabrizzio27",
    },
    {
      id: 2,
      name: "Car Rental App",
      description:
        language === "ro"
          ? "Aplicație web pentru închiriere de mașini cu funcționalități complete"
          : "Web application for car rental with complete features",
      technologies: ["React", "Python", "Django", "CSS"],
      url: "https://github.com/fabrizzio27",
    },
  ];

  return (
    <div
      className="page-background min-h-screen relative py-20"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&h=1080&fit=crop')`,
      }}
    >
      {/* overlayyy */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald/70 via-navy/60 to-burgundy/70"></div>
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
        {/* hedear */}
        <div className="text-center mb-16 fade-in">
          <div className="ornamental-frame inline-block px-8 py-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-elegant font-bold text-cream luxury-text mb-6 leading-[1.15]">
              {t.projects.title}
            </h1>
            <div className="divider-luxury"></div>
            <p className="text-base md:text-lg text-gold font-serif font-semibold mt-6 leading-relaxed">
              {t.projects.description}
            </p>
            <a
              href={t.projects.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 mt-6 text-gold hover:text-gold-light font-serif font-semibold transition-colors duration-300"
            >
              <Github className="w-5 h-5" />
              <span>{t.projects.githubLink}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* grid pt proiecte */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="ornamental-frame overflow-hidden fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <h3 className="text-lg md:text-xl font-elegant font-bold text-burgundy mb-3 leading-[1.3]">
                  {project.name}
                </h3>
                <p className="text-base md:text-lg text-navy/80 font-serif leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-bronze/20 text-burgundy-dark font-serif text-sm md:text-base rounded-sm border border-bronze/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center space-x-2 w-full group"
                >
                  <Github className="w-5 h-5" />
                  <span>{t.projects.viewGitHub}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
