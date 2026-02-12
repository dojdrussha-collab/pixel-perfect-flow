import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Услуги", href: "#services" },
  { label: "Подход", href: "#approach" },
  { label: "Контакт", href: "#contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-50 py-4"
    >
      <div className="section-container">
        <div className="glass-card px-6 py-3.5 flex items-center justify-between">
          <a href="/" className="font-display font-bold text-lg text-foreground tracking-tight">
            Content<span className="text-primary">Lab</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="https://t.me/Solarstonne"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hidden md:inline-flex items-center"
          >
            Связаться
          </a>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-9 h-9 rounded-xl bg-secondary flex items-center justify-center"
          >
            {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card mt-2 p-5 md:hidden"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm text-muted-foreground hover:text-foreground py-2.5 px-2 rounded-lg hover:bg-secondary/50 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://t.me/GenerationEon"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center mt-3"
              >
                Связаться
              </a>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
