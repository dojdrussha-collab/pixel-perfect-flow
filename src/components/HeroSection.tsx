import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const stats = [
  { number: "50+", label: "Проектов" },
  { number: "3", label: "Года опыта" },
  { number: "98%", label: "Довольных клиентов" },
];

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-24 pb-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl"
        >
          <div className="text-xs text-muted-foreground uppercase tracking-widest mb-8">
            Tilda & WordPress Developer
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground">
            Веб-дизайн как{" "}
            <span className="text-primary">бизнес-инструмент</span>
          </h1>

          <p className="text-lg text-muted-foreground mb-4 leading-relaxed max-w-2xl">
            Проектирую системы продаж, а не просто картинки.
          </p>

          <p className="text-muted-foreground mb-10 leading-relaxed max-w-xl">
            Конверсионные интерфейсы на Tilda и WordPress, где каждый блок 
            работает на бизнес-цели. Аналитика, UX-логика и чистая реализация.
          </p>

          <motion.a
            href="https://t.me/GenerationEon"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary inline-flex items-center gap-2"
          >
            Обсудить проект
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="mt-24 grid grid-cols-3 glass-card max-w-lg"
        >
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
