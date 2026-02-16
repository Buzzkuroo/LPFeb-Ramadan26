import { Instagram, Twitter, Facebook, Youtube, Phone, Mail, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const FooterCTA = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <footer>
      {/* CTA Section */}
      <section className="py-20 px-6 bg-secondary/90 backdrop-blur-xl text-secondary-foreground text-center">
        <div
          ref={ref}
          className={`container max-w-3xl mx-auto ${isVisible ? "scroll-visible" : "scroll-hidden"}`}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Ramadan Lebih Bermakna Bersama Telkomsel
          </h2>
          <p className="text-secondary-foreground/70 mb-10 text-lg tracking-wide font-light">
            Jangan lewatkan promo dan penawaran spesial Ramadan
          </p>
          <button className="bg-primary text-primary-foreground px-10 py-4 rounded-sm font-semibold tracking-widest uppercase text-sm hover:opacity-90 transition-opacity">
            Jelajahi Semua Promo
          </button>
        </div>
      </section>

      {/* Footer */}
      <div className="bg-secondary py-12 px-6 border-t border-secondary-foreground/10">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-secondary-foreground font-bold text-lg tracking-tight mb-4">
                Telkomsel
              </h3>
              <p className="text-secondary-foreground/60 text-sm leading-relaxed">
                Memberikan yang terbaik untuk Indonesia melalui layanan telekomunikasi terdepan.
              </p>
            </div>
            <div>
              <h4 className="text-secondary-foreground font-semibold text-sm tracking-widest uppercase mb-4">
                Kontak
              </h4>
              <div className="space-y-3 text-secondary-foreground/60 text-sm">
                <div className="flex items-center gap-3">
                  <Phone size={14} /> <span>188 (dari Telkomsel)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={14} /> <span>cs@telkomsel.co.id</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={14} /> <span>Jakarta, Indonesia</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-secondary-foreground font-semibold text-sm tracking-widest uppercase mb-4">
                Ikuti Kami
              </h4>
              <div className="flex gap-4">
                {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-full glass flex items-center justify-center text-secondary-foreground/60 hover:text-primary hover:border-primary transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-secondary-foreground/10 text-center text-secondary-foreground/40 text-xs tracking-wide">
            © 2026 Telkomsel. All rights reserved. Ramadan Kareem.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterCTA;
