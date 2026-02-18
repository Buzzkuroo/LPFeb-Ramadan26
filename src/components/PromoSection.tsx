import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import promo1 from "@/assets/promo-1.jpg";
import promo2 from "@/assets/promo-2.jpg";
import promo3 from "@/assets/promo-3.jpg";
import promo4 from "@/assets/promo-4.jpg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const promos = [
  {
    image: promo1,
    title: "Promo Ramadan IndiHome",
    desc: "Nikmati berbagai Promo Ramadan IndiHome dengan harga spesial, mulai dari paket internet, movie, hingga game.",
    link: "https://www.telkomsel.com/indihome/promoindihomeRAFI?utm_source=instagram&utm_medium=social&utm_campaign=areklokal_ramadan&utm_content=landingpage"
  },
  {
    image: promo2,
    title: "Paket Seru Ngabuburit Simpati",
    desc: "Jalanin Ramadan sepenuhnya bareng #PastiSIMPATISeserunya lewat paket Seru Ngabuburit SIMPATI.",
    link: "https://my.telkomsel.com/login/web?utm_source=instagram&utm_medium=social&utm_campaign=areklokal_ramadan_paketngabuburit&utm_content=landingpage"
  },
  {
    image: promo3,
    title: "Ngabuburit Makin Seru",
    desc: "Mabar Lancar, Anti Lag! Nunggu azan magrib sambil main game dengan internet stabil dengan speed upload–download 1:1? Bisa!",
    link: "https://www.telkomsel.com/indihome/internetgame?utm_source=instagram&utm_medium=social&utm_campaign=areklokal_ramadan&utm_content=landingpage"
  },
  {
    image: promo4,
    title: "Paket Seru Sahur Simpati",
    desc: "Bikin momen sahurmu makin seru bareng #PastiSIMPATISeserunya dan #NontonPastiSIMPATI buat streaming film favorit sampai waktu imsak tiba.",
    link: "https://my.telkomsel.com/login/web?utm_source=instagram&utm_medium=social&utm_campaign=areklokal_ramadan_paketsahur&utm_content=landingpage"
  },
];

const PromoSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { ref, isVisible } = useScrollAnimation();

  const scroll = (dir: number) => {
    // Scroll sejauh lebar satu kartu ditambah gap
    scrollRef.current?.scrollBy({ left: dir * 300, behavior: "smooth" });
  };

  return (
    <section className="py-20 px-6 bg-background relative overflow-hidden">
      <div
        ref={ref}
        className={`container max-w-6xl mx-auto ${isVisible ? "scroll-visible" : "scroll-hidden"}`}
      >
        <h2 className="font-heebo text-3xl md:text-4xl font-bold text-secondary tracking-tight text-center mb-4">
          Promo Ramadan Telkomsel Terbaru
        </h2>
        <p className="font-garamond text-muted-foreground text-center mb-14 tracking-wide text-sm sm:text-lg">
          Nikmati Berbagai Pilihan Promo dari Telkomsel
        </p>

        {/* Container Utama dengan Efek Fade */}
        <div className="relative group mx-[-24px] px-[24px]">

          {/* Efek Fade Kiri (Mobile Only) */}
          <div className="absolute left-0 top-0 bottom-8 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none md:hidden" />

          {/* Efek Fade Kanan (Mobile Only) */}
          <div className="absolute right-0 top-0 bottom-8 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none md:hidden" />

          {/* Tombol Navigasi Kiri */}
          <button
            onClick={() => scroll(-1)}
            className="absolute left-0 top-[40%] -translate-y-1/2 z-20 p-2 glass-strong rounded-full shadow-xl md:hidden border border-white/20"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} className="text-[#FF0025]" />
          </button>

          {/* Horizontal Scroll Wrapper */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-2 md:max-w-5xl md:mx-auto md:overflow-visible md:pb-0"
          >
            {promos.map((p, i) => (
              <div
                key={i}
                className={`group flex-shrink-0 w-[85%] md:w-full snap-center flex flex-col glass-strong rounded-2xl p-4 border-2 border-[#FF0025]/40 shadow-sm hover:shadow-2xl hover:border-[#FF0025]/80 hover:-translate-y-2 transition-all duration-500 stagger-${i + 1}`}
              >
                <div className="aspect-square overflow-hidden rounded-xl">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>

                <div className="pt-6 pb-2 px-2 flex flex-col flex-grow text-left">
                  <div className="flex-grow">
                    <h3 className="font-heebo text-lg font-bold text-secondary mb-2 tracking-tight">
                      {p.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                  <a
                    href={p.link}
                    className="inline-flex items-center gap-2 text-[#FF0025] font-bold text-sm tracking-widest uppercase hover:gap-4 transition-all"
                  >
                    Selengkapnya <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Tombol Navigasi Kanan */}
          <button
            onClick={() => scroll(1)}
            className="absolute right-0 top-[40%] -translate-y-1/2 z-10 p-2 glass-strong rounded-full shadow-xl md:hidden border border-white/20"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} className="text-[#FF0025]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;