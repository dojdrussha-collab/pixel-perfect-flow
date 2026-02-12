import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-28 pb-20 overflow-hidden">
      {/* Subtle glow */}
      <div className="hero-glow w-[600px] h-[600px] bg-primary -top-40 left-1/2 -translate-x-1/2 absolute" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="section-badge mb-8 mx-auto">
            <span>Контент · Автоматизация · Масштабирование</span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 text-foreground">
            Превращаю контент в <span className="gradient-text">бизнес-актив</span>
          </h1>

          <p className="text-base text-muted-foreground mb-10 leading-relaxed max-w-xl mx-auto">
            Создаю контент, который продаёт. Автоматизирую процессы, которые масштабируют ваш бизнес.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <motion.a
              href="https://t.me/Solarstonne"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary inline-flex items-center gap-2"
            >
              Обсудить проект
              <ArrowRight className="w-4 h-4" />
            </motion.a>

            <motion.a
              href="#services"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-outline inline-flex items-center gap-2"
            >
              Узнать подробнее
            </motion.a>
          </div>
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-px max-w-3xl mx-auto glass-card overflow-hidden"
        >
          {[
            { value: "50+", label: "Проектов" },
            { value: "10", label: "Платформ" },
            { value: "10x", label: "Рост охватов" },
            { value: "24/7", label: "Автоматизация" },
          ].map((stat, i) => (
            <div key={i} className="p-6 text-center border-r border-border last:border-r-0">
              <div className="font-display text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1.5 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
