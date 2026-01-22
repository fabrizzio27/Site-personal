import React, { useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import $ from "jquery";

const Gallery = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const carouselRef = useRef(null);
  const galleryRef = useRef(null);

  // 6 imagini pentru galerie cu descrieri
  const images = [
    {
      id: 1,
      url: "/pozegaleriejquery/WhatsApp Image 2025-12-12 at 02.46.44_348e4e17.jpg",
      alt: "Boston",
      description: language === "ro" ? "Afara prin Boston" : "Out in Boston",
    },
    {
      id: 2,
      url: "/pozegaleriejquery/WhatsApp Image 2025-12-12 at 02.46.44_56acb0dd.jpg",
      alt: "Wall Street",
      description:
        language === "ro"
          ? "Adevaratul lup de pe Wall Street"
          : "The real wolf of Wall Street",
    },
    {
      id: 3,
      url: "/pozegaleriejquery/WhatsApp Image 2025-12-12 at 02.46.44_721a1f65.jpg",
      alt: "Revelion 2025",
      description:
        language === "ro"
          ? "Cu consoarta la revelion"
          : "With my lover at new year's eve",
    },
    {
      id: 4,
      url: "/pozegaleriejquery/WhatsApp Image 2025-12-12 at 02.46.44_77ade27d.jpg",
      alt: "Egipt",
      description: language === "ro" ? "A reinviat Ramses" : "Ramses is back",
    },
    {
      id: 5,
      url: "/pozegaleriejquery/WhatsApp Image 2025-12-12 at 02.46.44_f87d7f1c.jpg",
      alt: "New York",
      description:
        language === "ro"
          ? "Dam timpul exact in Times Square"
          : "Giving the exact time in Times Square",
    },
    {
      id: 6,
      url: "/pozegaleriejquery/WhatsApp Image 2025-12-12 at 02.46.44_f98cce46.jpg",
      alt: "Paste 2006",
      description:
        language === "ro"
          ? "Aveam 2 ani in poza asta"
          : "I was 2 years old in this picture",
    },
  ];

  useEffect(() => {
    //pt initializare carusel la jquery
    const $carousel = $(carouselRef.current);
    const $gallery = $(galleryRef.current);
    let currentIndex = 0;
    let isAnimating = false;

    // functie pt deschidere carusel
    const openCarousel = (index) => {
      currentIndex = index;
      $carousel.addClass("active");
      $("body").css("overflow", "hidden");

      // timeout ca sa se vada overlayu inainte de animatie
      setTimeout(() => {
        updateCarousel();
      }, 50);
    };

    // fct pt inchidere carusel
    const closeCarousel = () => {
      $carousel.removeClass("active");
      $("body").css("overflow", "");
    };

    //pt schimbare pozitie imagine din carusel
    const updateCarousel = () => {
      if (isAnimating) return;
      isAnimating = true;

      const $items = $carousel.find(".carousel-item");
      const totalItems = $items.length;
      const angle = 360 / totalItems;
      const radius = window.innerWidth < 768 ? 280 : 600;

      $items.each(function (index) {
        const $item = $(this);
        const rotation = (index - currentIndex) * angle;
        const radian = (rotation * Math.PI) / 180;

        // calcule pt pozitia 3d a caruselului
        const x = Math.sin(radian) * radius;
        const z = -Math.cos(radian) * radius;
        const distance = Math.abs(index - currentIndex);
        const normalizedDistance = Math.min(distance, totalItems - distance);

        // schimbare marime si opacitate pentru efect 3d cand se duc pozele in spate
        const opacity =
          normalizedDistance <= 3
            ? Math.max(0.4, 1 - normalizedDistance * 0.15)
            : 0.2;
        const scale =
          normalizedDistance === 0
            ? 1
            : Math.max(0.6, 1 - normalizedDistance * 0.1);

        // 3d cu jquery
        $item.css({
          transform: `translate3d(calc(-50% + ${x}px), -50%, ${z}px) rotateY(${rotation}deg) scale(${scale})`,
          opacity: opacity,
          zIndex: totalItems - normalizedDistance,
          pointerEvents: normalizedDistance === 0 ? "auto" : "none",
        });
      });

      setTimeout(() => {
        isAnimating = false;
      }, 700);
    };

    // ev listener pt imagini galerie
    $gallery.find(".gallery-item").on("click", function () {
      const index = $(this).index();
      openCarousel(index);
    });

    // ev listenere pt navigare cu query
    $carousel.find(".carousel-prev").on("click", function (e) {
      e.stopPropagation();
      if (isAnimating) return;
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateCarousel();
    });

    $carousel.find(".carousel-next").on("click", function (e) {
      e.stopPropagation();
      if (isAnimating) return;
      currentIndex = (currentIndex + 1) % images.length;
      updateCarousel();
    });

    // pt inchidere
    $carousel.find(".carousel-close").on("click", function (e) {
      e.stopPropagation();
      closeCarousel();
    });

    // inchidere pt cand dam cluck pe overlay
    $carousel.find(".carousel-overlay").on("click", function (e) {
      if (e.target === this) {
        closeCarousel();
      }
    });

    // ceva extra sa navigam cu tastele intre poze
    $(document).on("keydown.gallery", function (e) {
      if (!$carousel.hasClass("active")) return;

      if (e.key === "Escape") {
        closeCarousel();
      } else if (e.key === "ArrowLeft") {
        $carousel.find(".carousel-prev").trigger("click");
      } else if (e.key === "ArrowRight") {
        $carousel.find(".carousel-next").trigger("click");
      }
    });

    return () => {
      $(document).off("keydown.gallery");
      $gallery.find(".gallery-item").off("click");
      $carousel.find(".carousel-prev").off("click");
      $carousel.find(".carousel-next").off("click");
      $carousel.find(".carousel-close").off("click");
      $carousel.find(".carousel-overlay").off("click");
    };
  }, [images.length]);

  return (
    <div
      className="page-background min-h-screen relative py-20"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&h=1080&fit=crop')`,
      }}
    >
      {/* Overlay */}
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
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <div className="ornamental-frame inline-block px-8 py-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-elegant font-bold text-cream luxury-text mb-6 leading-[1.15]">
              {t.gallery.title}
            </h1>
            <div className="divider-luxury"></div>
            <p className="text-base md:text-lg text-cream/90 font-serif mt-6 leading-relaxed">
              {t.gallery.description}
            </p>
          </div>
        </div>

        {/* grid de imagini */}
        <div
          ref={galleryRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {images.map((image, index) => (
            <div
              key={image.id}
              className="gallery-item ornamental-frame overflow-hidden cursor-pointer group fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-cream font-serif text-sm">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* carusel 3D cerc */}
      <div
        ref={carouselRef}
        className="carousel-3d fixed inset-0 z-50 pointer-events-none opacity-0 transition-opacity duration-500"
      >
        <div className="carousel-overlay absolute inset-0 bg-black/90 backdrop-blur-sm"></div>

        <div className="carousel-container relative w-full h-full flex items-center justify-center">
          <div
            className="carousel-scene relative w-full h-full"
            style={{ perspective: "2500px", transformStyle: "preserve-3d" }}
          >
            {images.map((image, index) => (
              <div
                key={image.id}
                className="carousel-item absolute top-1/2 left-1/2 w-80 h-[500px] md:w-[450px] md:h-[600px] transition-all duration-[700ms] ease-in-out"
                style={{
                  transform:
                    "translate3d(-50%, -50%, 0) rotateY(0deg) scale(0.8)",
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                }}
              >
                <div className="ornamental-frame w-full h-full p-3 bg-cream/95 shadow-2xl flex flex-col">
                  <div className="flex-1 overflow-hidden mb-3">
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-contain rounded-sm"
                      loading="eager"
                    />
                  </div>
                  {/* descrierea de sub poze*/}
                  <div className="text-center px-2 pb-2">
                    <p className="text-navy font-serif text-sm md:text-base leading-relaxed font-medium">
                      {image.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Butoane navigare */}
          <button
            className="carousel-prev absolute left-1/2 top-1/2 -translate-x-[calc(50%+12rem)] -translate-y-1/2 z-10 p-4 bg-burgundy/80 hover:bg-burgundy text-cream rounded-full border-2 border-bronze shadow-luxury transition-all duration-300 hover:scale-110 pointer-events-auto"
            aria-label={t.gallery.prev}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            className="carousel-next absolute left-1/2 top-1/2 translate-x-[calc(50%+12rem)] -translate-y-1/2 z-10 p-4 bg-burgundy/80 hover:bg-burgundy text-cream rounded-full border-2 border-bronze shadow-luxury transition-all duration-300 hover:scale-110 pointer-events-auto"
            aria-label={t.gallery.next}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Buton inchidere */}
          <button
            className="carousel-close absolute bottom-8 right-8 z-10 p-4 bg-burgundy/80 hover:bg-burgundy text-cream rounded-full border-2 border-bronze shadow-luxury transition-all duration-300 hover:scale-110 pointer-events-auto"
            aria-label={t.gallery.close}
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* css pt carusel circular */}
      <style>{`
        .carousel-3d.active {
          opacity: 1;
          pointer-events: auto;
        }

        .carousel-3d .carousel-scene {
          transform-style: preserve-3d;
        }

        .carousel-3d .carousel-item {
          backface-visibility: hidden;
          will-change: transform, opacity;
        }

        @media (max-width: 768px) {
          .carousel-3d .carousel-item {
            width: 60vw !important;
            height: 75vh !important;
          }
          
          .carousel-3d .carousel-prev,
          .carousel-3d .carousel-next {
            width: 3rem;
            height: 3rem;
            padding: 0.75rem;
            top: auto;
            bottom: 2rem;
          }
          
          .carousel-3d .carousel-prev {
            left: 50%;
            transform: translate(calc(-50% - 3rem), 0);
          }
          
          .carousel-3d .carousel-next {
            left: 50%;
            transform: translate(calc(-50% + 3rem), 0);
          }
        }
      `}</style>
    </div>
  );
};

export default Gallery;
