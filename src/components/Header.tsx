import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 py-4"
    >
      <div className="section-container">
        <div className="glass-card px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="font-display font-bold text-primary-foreground text-sm">W</span>
            </div>
            <span className="font-display font-semibold text-lg text-foreground hidden sm:block">
              WebDesign
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#process" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Подход
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Форматы
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Контакт
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a 
              href="https://t.me/GenerationEon"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              Обсудить проект
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 rounded-lg bg-muted flex items-center justify-center"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-foreground" />
            ) : (
              <Menu className="w-5 h-5 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card mt-2 p-6 md:hidden"
          >
            <nav className="flex flex-col gap-4">
              <a 
                href="#process" 
                className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Подход
              </a>
              <a 
                href="#pricing" 
                className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Форматы
              </a>
              <a 
                href="#contact" 
                className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Контакт
              </a>
              <a 
                href="https://t.me/GenerationEon"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full mt-2 block text-center"
              >
                Обсудить проект
              </a>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
