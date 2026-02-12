import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-28 relative">
      <div className="glow-line top-0 left-[15%] right-[15%] absolute" />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-12 lg:p-16 text-center"
        >
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-extrabold text-foreground mb-4">
            Готовы превратить контент в <span className="gradient-text">источник прибыли</span>?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto text-sm">
            Обсудим вашу задачу и подберём оптимальный формат сотрудничества
          </p>

          <motion.a
            href="https://t.me/Solarstonne"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary inline-flex items-center gap-2"
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
