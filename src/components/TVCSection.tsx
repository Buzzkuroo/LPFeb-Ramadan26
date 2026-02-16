import { Play } from "lucide-react";
import { useState } from "react";

const TVCSection = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="py-20 px-6 bg-muted">
      <div className="container max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary tracking-tight mb-4">
          TVC Ramadan
        </h2>
        <p className="text-muted-foreground mb-12 tracking-wide">
          Saksikan iklan Ramadan terbaru dari Telkomsel
        </p>
        <div className="relative aspect-video rounded-sm overflow-hidden bg-secondary">
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
              <div className="relative z-10 w-20 h-20 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
