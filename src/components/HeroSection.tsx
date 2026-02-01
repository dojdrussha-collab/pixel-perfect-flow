import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";

const HeroSection = () => {
  const scrollToProcess = () => {
    document.getElementById("process")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full border border-border text-sm text-muted-foreground mb-8"
          >
            Tilda & WordPress Developer
          </motion.div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground">
            Веб-дизайн как{" "}
            <span className="text-primary">бизнес-инструмент</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-4 font-medium">
            Проектирую системы продаж, а не просто картинки.
          </p>

          <p className="text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
            Разработка на Tilda и WordPress. Конверсионные интерфейсы, 
            где каждый блок и текст наполнен айдентикой и смыслом.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="https://t.me/GenerationEon"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary text-base font-medium inline-flex items-center gap-2"
            >
              Обсудить проект
              <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.button
              onClick={scrollToProcess}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-outline text-base font-medium inline-flex items-center gap-2"
            >
              Узнать подробнее
              <ArrowDown className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
