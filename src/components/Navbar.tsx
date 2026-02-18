/**
 * Navbar Component
 * Displays the main navigation bar with "Arek Lokal" and "Telkomsel" branding.
 * Uses a glass-morphism effect and stays fixed at the top of the viewport.
 */
const Navbar = () => {
  const logoPath = "/src/assets/logo_telkomsel.png";
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong border-b border-white/20">
      <div className="container max-w-6xl mx-auto flex items-center justify-between h-14 px-6 md:px-8 transition-all duration-300">
        <div className="font-sans font-bold text-xl tracking-tight text-secondary hover:opacity-80 transition-opacity cursor-pointer">
          Arek Lokal
        </div>
        <div className="flex items-center h-full">
          <img
            src={logoPath}
            alt="Telkomsel Logo"
            className="h-5 w-auto object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
