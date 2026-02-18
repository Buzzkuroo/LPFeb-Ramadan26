/**
 * FooterCTA Component
 * A simple footer displaying the copyright information.
 * Clean and minimal design to close the page.
 */
const FooterCTA = () => {
  return (
    <footer className="bg-secondary py-8 px-6 border-t border-secondary-foreground/10">
      <div className="container max-w-6xl mx-auto text-center">
        <p className="text-secondary-foreground/60 text-sm tracking-wide">
          &copy; 2026 Arek Lokal. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterCTA;
