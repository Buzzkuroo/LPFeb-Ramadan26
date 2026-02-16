import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const TVCSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
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
      </div>
    </section>
  );
};

export default TVCSection;
