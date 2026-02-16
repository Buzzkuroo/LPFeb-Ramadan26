import { Wifi, Smartphone } from "lucide-react";
import exploreHousehold from "@/assets/explore-household.jpg";
import exploreMobile from "@/assets/explore-mobile.jpg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const categories = [
  {
    image: exploreHousehold,
    icon: Wifi,
    title: "Produk Rumah",
    subtitle: "Orbit & IndiHome",
    desc: "Internet rumah terbaik untuk keluarga selama Ramadan",
  },
  {
    image: exploreMobile,
    icon: Smartphone,
    title: "Produk Mobile",
    subtitle: "Paket & Smartphone",
    desc: "Paket data dan smartphone dengan harga spesial Ramadan",
  },
];

const ExploreSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 px-6 bg-background">
      <div
        ref={ref}
        className={`container max-w-6xl mx-auto ${isVisible ? "scroll-visible" : "scroll-hidden"}`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-secondary tracking-tight text-center mb-4">
          Explore Ramadan
        </h2>
        <p className="text-muted-foreground text-center mb-14 tracking-wide">
          Temukan produk terbaik untuk kebutuhan Anda
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, i) => (
            <div
              key={i}
              className={`group relative h-80 md:h-96 rounded-xl overflow-hidden cursor-pointer stagger-${i + 1}`}
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 glass-dark rounded-b-xl">
                <cat.icon className="text-primary-foreground mb-3" size={28} />
                <p className="text-primary-foreground/70 text-sm font-medium tracking-widest uppercase mb-1">
                  {cat.subtitle}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground tracking-tight mb-2">
                  {cat.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm">{cat.desc}</p>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary transition-colors duration-300 rounded-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
