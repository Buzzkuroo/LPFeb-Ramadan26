import { Gift } from "lucide-react";
import giveaway from "@/assets/giveaway.jpg";

const GiveawaySection = () => (
  <section className="py-20 px-6 bg-muted">
    <div className="container max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Gift size={16} />
            Giveaway Ramadan
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-secondary tracking-tight mb-6 leading-tight">
            Menangkan Hadiah Spesial Ramadan
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Ikuti giveaway Ramadan Telkomsel dan dapatkan kesempatan memenangkan hadiah menarik.
            Smartphone terbaru, paket internet gratis, dan berbagai hadiah lainnya menanti Anda.
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-sm font-semibold tracking-widest uppercase text-sm hover:opacity-90 transition-opacity">
            Ikuti Sekarang
          </button>
        </div>
        <div className="order-1 md:order-2">
          <div className="relative">
            <img
              src={giveaway}
              alt="Hadiah giveaway Ramadan"
              className="w-full max-w-md mx-auto rounded-sm shadow-2xl"
              loading="lazy"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-full flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-xs text-center leading-tight tracking-wide">
                GRATIS!
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default GiveawaySection;
