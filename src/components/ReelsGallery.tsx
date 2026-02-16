import { useRef } from "react";
import { ChevronLeft, ChevronRight, Instagram } from "lucide-react";

const reels = [
  { id: 1, color: "from-primary to-accent", title: "Sahur Seru", handle: "@telkomsel" },
  { id: 2, color: "from-secondary to-primary", title: "Tips Ngabuburit", handle: "@telkomsel" },
  { id: 3, color: "from-accent to-primary", title: "Resep Buka Puasa", handle: "@telkomsel" },
  { id: 4, color: "from-primary to-secondary", title: "Ramadan Deals", handle: "@telkomsel" },
  { id: 5, color: "from-secondary to-accent", title: "Mudik Hemat", handle: "@telkomsel" },
  { id: 6, color: "from-accent to-secondary", title: "Promo Lebaran", handle: "@telkomsel" },
];

const ReelsGallery = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 300, behavior: "smooth" });
  };

  return (
    <section className="py-20 px-6 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary tracking-tight">
              Program Arek Lokal
            </h2>
            <p className="text-muted-foreground tracking-wide mt-2">
              Konten Instagram Reels terbaru
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scroll(-1)}
              className="p-2 border border-border rounded-full hover:bg-muted transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} className="text-secondary" />
            </button>
            <button
              onClick={() => scroll(1)}
              className="p-2 border border-border rounded-full hover:bg-muted transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} className="text-secondary" />
            </button>
          </div>
        </div>
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="flex-shrink-0 w-48 md:w-56 snap-start"
            >
              <div
                className={`aspect-[9/16] rounded-2xl bg-gradient-to-br ${reel.color} relative overflow-hidden group cursor-pointer`}
              >
                <div className="absolute inset-0 bg-secondary/20 group-hover:bg-secondary/10 transition-colors" />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <Instagram size={16} className="text-primary-foreground" />
                  <span className="text-primary-foreground text-xs font-medium">{reel.handle}</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-primary-foreground font-semibold text-sm">{reel.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReelsGallery;
