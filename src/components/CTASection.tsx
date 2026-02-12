import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-28 relative">
      <div className="glow-line top-0 left-[10%] right-[10%] absolute" />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-12 lg:p-16 text-center relative overflow-hidden"
        >
          {/* Glow effects */}
          <div className="hero-glow w-[400px] h-[400px] bg-primary -top-32 -right-32 absolute opacity-20" />
          <div className="hero-glow w-[300px] h-[300px] absolute opacity-10" style={{ background: 'hsl(260 80% 55%)', bottom: '-20%', left: '-10%' }} />

          <div className="relative z-10">
            <h2 className="font-display text-2xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-5">
              Готовы превратить контент в{" "}
              <span className="gradient-text">источник прибыли</span>?
            </h2>
            <p className="text-muted-foreground mb-10 max-w-lg mx-auto text-base">
              Обсудим вашу задачу и подберём оптимальный формат сотрудничества
            </p>

            <motion.a
              href="https://t.me/Solarstonne"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary inline-flex items-center gap-2 text-base px-9 py-4"
            >
              Написать в Telegram
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
