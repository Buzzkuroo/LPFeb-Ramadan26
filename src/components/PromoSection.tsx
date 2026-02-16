import { ArrowRight } from "lucide-react";
import promo1 from "@/assets/promo-1.jpg";
import promo2 from "@/assets/promo-2.jpg";
import promo3 from "@/assets/promo-3.jpg";

const promos = [
  { image: promo1, title: "Paket Internet Orbit Ramadan", desc: "Internet rumah tanpa ribet selama Ramadan" },
  { image: promo2, title: "Deals Spesial Smartphone", desc: "Smartphone terbaik dengan harga spesial" },
  { image: promo3, title: "Kuota Streaming Berlimpah", desc: "Nonton konten Ramadan sepuasnya" },
];

const PromoSection = () => (
  <section className="py-20 px-6 bg-background">
    <div className="container max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-secondary tracking-tight text-center mb-4">
        Promo Ramadan Terbaru
      </h2>
      <p className="text-muted-foreground text-center mb-14 tracking-wide">
        Penawaran terbaik untuk bulan suci
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {promos.map((p, i) => (
          <div
            key={i}
            className="group bg-card rounded-sm overflow-hidden border border-border hover:shadow-lg transition-shadow duration-300"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-secondary mb-2 tracking-tight">{p.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{p.desc}</p>
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

export default PromoSection;
