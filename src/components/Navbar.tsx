import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = ["Promo", "Giveaway", "Explore", "TVC", "Program"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong border-b border-white/20">
      <div className="container max-w-6xl mx-auto flex items-center justify-between h-16 px-6">
        <a href="#" className="font-heebo text-secondary font-bold text-xl tracking-tight">
          TELKOMSEL
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-muted-foreground text-sm font-medium tracking-wide hover:text-secondary transition-colors"
            >
              {l}
            </a>
          ))}
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-secondary"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden glass-strong border-b border-white/20 px-6 pb-4">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block py-3 text-muted-foreground text-sm font-medium tracking-wide hover:text-secondary transition-colors"
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
