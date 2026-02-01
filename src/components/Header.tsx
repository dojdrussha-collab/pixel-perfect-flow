import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 py-4"
    >
      <div className="section-container">
        <div className="glass-card px-5 py-3 flex items-center justify-between">
          <a href="/" className="font-display font-semibold text-foreground">
            WebDesign
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#process" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Подход
            </a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Форматы
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Контакт
            </a>
          </nav>

          <a 
            href="https://t.me/GenerationEon"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hidden md:block"
          >
            Обсудить
          </a>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-9 h-9 rounded-md bg-muted flex items-center justify-center"
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
            <nav className="flex flex-col gap-3">
              <a href="#process" onClick={() => setIsMenuOpen(false)} className="text-sm text-muted-foreground hover:text-foreground py-2">
                Подход
              </a>
              <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="text-sm text-muted-foreground hover:text-foreground py-2">
                Форматы
              </a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-sm text-muted-foreground hover:text-foreground py-2">
                Контакт
              </a>
              <a 
                href="https://t.me/GenerationEon"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center mt-2"
              >
                Обсудить
              </a>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
