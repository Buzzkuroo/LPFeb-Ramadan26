import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  {
    image: hero1,
    title: "Ramadan Penuh Berkah",
    subtitle: "Nikmati promo spesial Ramadan dari Telkomsel",
    cta: "Lihat Promo",
  },
  {
    image: hero2,
    title: "Berbagi Kebaikan",
    subtitle: "Sambut Ramadan bersama keluarga tercinta",
    cta: "Jelajahi Sekarang",
  },
  {
    image: hero3,
    title: "Malam Penuh Cahaya",
    subtitle: "Paket internet terbaik untuk Ramadan Anda",
    cta: "Dapatkan Sekarang",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 700);
    },
    [isTransitioning]
  );

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative w-full h-[60vh] md:h-[85vh] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: current === i ? 1 : 0, zIndex: current === i ? 1 : 0 }}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/30 to-transparent" />
          <div className="absolute inset-0 flex items-end pb-16 md:pb-24 justify-center">
            <div
              className={`text-center px-6 transition-all duration-700 ${
                current === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h1 className="font-heebo text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground tracking-tight mb-4">
                {slide.title}
              </h1>
              <p className="font-garamond italic text-lg md:text-xl text-primary-foreground/80 mb-8 tracking-wide max-w-xl mx-auto">
                {slide.subtitle}
              </p>
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-sm font-semibold tracking-widest uppercase text-sm hover:opacity-90 transition-opacity">
                {slide.cta}
              </button>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={32} />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-8 h-1 rounded-full transition-all duration-300 ${
              current === i ? "bg-primary w-12" : "bg-primary-foreground/40"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
