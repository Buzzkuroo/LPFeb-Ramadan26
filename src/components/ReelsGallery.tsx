import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Instagram } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface ReelItem {
  id: string;
  title: string;
}

const REELS_DATA: ReelItem[] = [
  { id: "DUx73GFk46h", title: "Kultum by Arek Lokal" },
  { id: "DUvJWsBEz26", title: "Promo IndiHome Ramadan" },
  { id: "DUr_LjeEcQ1", title: "IndiHome Promo Ramadan" },
  { id: "DUnaka_k8ch", title: "Promo Tirto & Co." },
  { id: "DUsTdCXkyOa", title: "Teknisi IndiHome On Duty" },
];

const ReelsGallery = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { ref, isVisible } = useScrollAnimation();
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const interval = setInterval(() => {
      if (window.innerWidth < 768 && !isPaused) {
        const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        const currentScroll = scrollContainer.scrollLeft;
        const itemWidth = 320;

        let nextScroll = currentScroll + itemWidth;
        if (nextScroll >= maxScrollLeft) {
          nextScroll = 0;
        }

        scrollContainer.scrollTo({
          left: nextScroll,
          behavior: "smooth",
        });
      }
    }, 3000); // Sedikit diperlambat agar user sempat melihat konten

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleScroll = (direction: "left" | "right") => {
    const scrollAmount = direction === "left" ? -320 : 320;
    scrollRef.current?.scrollBy({ left: scrollAmount, behavior: "smooth" });

    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000);
  };

  return (
    <section className="py-20 px-6 bg-background overflow-hidden">
      <div
        ref={ref}
        className={`container max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        {/* Header Section - Tombol Navigasi dihapus dari sini */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="font-heebo text-3xl md:text-4xl font-bold text-secondary tracking-tight">
            Keseruan Ramadan di Arek Lokal
          </h2>
          <p className="text-muted-foreground tracking-wide mt-2">
            Tonton konten Instagram Reels terbaru langsung di sini
          </p>
        </div>

        {/* Wrapper Gallery dengan Navigasi Samping */}
        <div className="relative group px-4 md:px-0">

          {/* Tombol Navigasi Kiri */}
          <button
            onClick={() => handleScroll("left")}
            className="absolute left-[-20px] md:left-[-30px] top-1/2 -translate-y-1/2 z-30 p-3 glass-strong rounded-full shadow-xl border border-white/20 hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100 md:opacity-100"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} className="text-secondary" />
          </button>

          {/* Efek Fade Kiri */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none hidden md:block" />

          {/* Horizontal Scroll Gallery */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory relative z-0"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setTimeout(() => setIsPaused(false), 5000)}
          >
            {REELS_DATA.map((reel) => (
              <div key={reel.id} className="flex-shrink-0 w-[280px] md:w-[320px] snap-start">
                <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-black shadow-2xl border border-white/5">
                  <iframe
                    src={`https://www.instagram.com/reel/${reel.id}/embed/`}
                    className="absolute inset-0 w-full h-full"
                    frameBorder="0"
                    scrolling="no"
                    allowTransparency
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Efek Fade Kanan */}
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none hidden md:block" />

          {/* Tombol Navigasi Kanan */}
          <button
            onClick={() => handleScroll("right")}
            className="absolute right-[-20px] md:right-[-30px] top-1/2 -translate-y-1/2 z-30 p-3 glass-strong rounded-full shadow-xl border border-white/20 hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100 md:opacity-100"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} className="text-secondary" />
          </button>
        </div>

        {/* CTA Section */}
        <div className="mt-12 flex justify-center">
          <a
            href="https://www.instagram.com/ar3klokal/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] text-white px-8 py-3 rounded-full text-sm font-semibold tracking-wide hover:shadow-[0_10px_20px_rgba(220,39,67,0.4)] transition-all duration-300 hover:-translate-y-1"
          >
            <Instagram size={18} className="group-hover:rotate-12 transition-transform" />
            <span>FOLLOW IG @AR3KLOKAL</span>
            <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity blur-md" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReelsGallery;