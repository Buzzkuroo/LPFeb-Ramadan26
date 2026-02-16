import { ArrowRight } from "lucide-react";
import promo1 from "@/assets/promo-1.jpg";
import promo2 from "@/assets/promo-2.jpg";
import promo3 from "@/assets/promo-3.jpg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const promos = [
  { image: promo1, title: "Paket Internet Orbit Ramadan", desc: "Internet rumah tanpa ribet selama Ramadan" },
  { image: promo2, title: "Deals Spesial Smartphone", desc: "Smartphone terbaik dengan harga spesial" },
  { image: promo3, title: "Kuota Streaming Berlimpah", desc: "Nonton konten Ramadan sepuasnya" },
];

const PromoSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 px-6 bg-background">
      <div
        ref={ref}
        className={`container max-w-6xl mx-auto ${isVisible ? "scroll-visible" : "scroll-hidden"}`}
      >
        <h2 className="font-heebo text-3xl md:text-4xl font-bold text-secondary tracking-tight text-center mb-4">
          Promo Ramadan Terbaru
        </h2>
        <p className="font-garamond italic text-muted-foreground text-center mb-14 tracking-wide text-lg">
          Penawaran terbaik untuk bulan suci
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {promos.map((p, i) => (
            <div
              key={i}
              className={`group flex flex-col glass-strong rounded-xl overflow-hidden border border-white/30 hover:shadow-xl transition-all duration-300 stagger-${i + 1}`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h3 className="font-heebo text-lg font-semibold text-secondary mb-2 tracking-tight">{p.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{p.desc}</p>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-secondary font-semibold text-sm tracking-wide hover:gap-3 transition-all"
                >
                  Selengkapnya <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
