import { Play } from "lucide-react";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const TVCSection = () => {
  const [playing, setPlaying] = useState(false);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* YouTube Background Video - autoplay, loop, muted */}
      <div className="absolute inset-0 z-0">
        <iframe
          className="w-full h-full scale-150 pointer-events-none"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
          title="TVC Background"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
        <div className="absolute inset-0 bg-secondary/70" />
      </div>

      <div
        ref={ref}
        className={`container max-w-4xl mx-auto text-center relative z-10 ${isVisible ? "scroll-visible" : "scroll-hidden"}`}
      >
        <h2 className="font-heebo text-3xl md:text-5xl font-bold text-primary-foreground tracking-tight mb-12">
          #MelayaniSepenuhHati
        </h2>
        <div className="relative aspect-video rounded-xl overflow-hidden glass-dark shadow-2xl">
          {playing ? (
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="TVC Ramadan Telkomsel"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          ) : (
            <button
              onClick={() => setPlaying(true)}
              className="absolute inset-0 flex items-center justify-center group"
            >
              <div className="absolute inset-0 bg-secondary/60" />
              <div className="relative z-10 w-20 h-20 rounded-full glass flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Play className="text-primary-foreground ml-1" size={32} fill="currentColor" />
              </div>
              <span className="absolute bottom-8 text-primary-foreground/70 text-sm tracking-widest uppercase z-10">
                Tonton Video
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default TVCSection;
