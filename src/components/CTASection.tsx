import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-20 border-t border-border">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6"
        >
          <div>
            <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2">
              Готовы обсудить проект?
            </h2>
            <p className="text-muted-foreground text-sm">
              Связка «Сайт + Трафик» — результат сразу после релиза
            </p>
          </div>

          <motion.a
            href="https://t.me/GenerationEon"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary inline-flex items-center gap-2 whitespace-nowrap"
          >
            Написать в Telegram
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
