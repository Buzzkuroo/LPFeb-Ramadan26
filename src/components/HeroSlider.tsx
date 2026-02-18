import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

// Constants for slider configuration to avoid magic numbers
const SLIDER_CONFIG = {
  AUTOPLAY_INTERVAL: 3500,
  TRANSITION_DURATION: 700,
};

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  cta: string;
  link?: string;
}

const slides: Slide[] = [
  {
    image: hero1,
    title: "Marhaban yaa Ramadan",
    subtitle: "Nikmati Promo Spesial Ramadan dari Telkomsel",
    cta: "Lihat Selengkapnya",
    link: "https://www.telkomsel.com/?utm_source=instagram&utm_medium=social&utm_campaign=areklokal_ramadan&utm_content=landingpage"
  },
  {
    image: hero2,
    title: "Ramadan Penuh Kebersamaan",
    subtitle: "Nikmati Promo IndiHome Ramadan Terbaru",
    cta: "Jelajahi Sekarang",
    link: "https://www.telkomsel.com/indihome/promoindihomeRAFI?utm_source=instagram&utm_medium=social&utm_campaign=areklokal_ramadan&utm_content=landingpage"
  },
  {
    image: hero3,
    title: "Promo Telkomsel Ramadan",
    subtitle: "Paket internet terbaik untuk Ramadan Anda",
    cta: "Dapatkan Sekarang",
    link: "https://www.telkomsel.com/internet/paket-internet-ramadan?utm_source=instagram&utm_medium=social&utm_campaign=areklokal_ramadan&utm_content=landingpage"
  },
];

/**
 * HeroSlider Component
 * Displays a rotating carousel of hero images with text overlays.
 * Supports auto-play and manual navigation via buttons and indicators.
 */
const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  /**
   * Navigates to a specific slide index with transition handling.
   * prevents rapid clicking during transitions.
   */
  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), SLIDER_CONFIG.TRANSITION_DURATION);
    },
    [isTransitioning]
  );

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  // Set up auto-play interval
  useEffect(() => {
    const timer = setInterval(next, SLIDER_CONFIG.AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative w-full h-[80vh] md:h-screen overflow-hidden" aria-label="Hero Slider">
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: current === i ? 1 : 0, zIndex: current === i ? 1 : 0 }}
          aria-hidden={current !== i}
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
              className={`text-center px-6 transition-all duration-700 ${current === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <h1 className="font-heebo text-3xl md:text-6xl lg:text-5xl font-bold text-primary-foreground tracking-tight mb-4 max-w-[280px] md:max-w-none mx-auto leading-tight">
                {slide.title}
              </h1>
              <p className="font-garamond text-lg md:text-xl text-primary-foreground/80 mb-8 tracking-wide max-w-xl mx-auto">
                {slide.subtitle}
              </p>
              {slide.link ? (
                <a
                  href={slide.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-primary-foreground px-8 py-3 rounded-sm font-semibold tracking-widest uppercase text-sm hover:opacity-90 transition-opacity inline-block"
                  aria-label={`Action for ${slide.title}`}
                >
                  {slide.cta}
                </a>
              ) : (
                <button
                  className="bg-primary text-primary-foreground px-8 py-3 rounded-sm font-semibold tracking-widest uppercase text-sm hover:opacity-90 transition-opacity"
                  aria-label={`Action for ${slide.title}`}
                >
                  {slide.cta}
                </button>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-8 h-1 rounded-full transition-all duration-300 ${current === i ? "bg-primary w-12" : "bg-primary-foreground/40"
              }`}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={current === i ? "true" : "false"}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
