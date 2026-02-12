import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, BarChart3 } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-28 pb-20 overflow-hidden">
      {/* Vertical glowing lines */}
      <div className="vertical-lines" />
      
      {/* Additional vertical lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 bottom-0 left-[40%] w-px" style={{ background: 'linear-gradient(180deg, transparent 0%, hsl(240 80% 60% / 0.12) 40%, transparent 80%)' }} />
        <div className="absolute top-0 bottom-0 right-[15%] w-px" style={{ background: 'linear-gradient(180deg, transparent 10%, hsl(260 80% 60% / 0.1) 50%, transparent 90%)' }} />
      </div>

      {/* Glow orbs */}
      <div className="hero-glow w-[700px] h-[700px] bg-primary -top-48 left-1/2 -translate-x-1/2 absolute opacity-20" />
      <div className="hero-glow w-[400px] h-[400px] bg-primary bottom-10 -left-32 absolute opacity-10" />
      <div className="hero-glow w-[300px] h-[300px] absolute opacity-10" style={{ background: 'hsl(260 80% 55%)', right: '-5%', top: '40%' }} />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="section-badge mb-8 mx-auto"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span>Контент · Автоматизация · Масштабирование</span>
          </motion.div>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08] mb-6 text-foreground">
            Превращаю контент в{" "}
            <span className="gradient-text">бизнес-актив</span>
            {" "}🚀
          </h1>

          <p className="text-base md:text-lg text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
            Создаю контент, который продаёт. Автоматизирую процессы, которые масштабируют ваш бизнес.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="https://t.me/Solarstonne"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary inline-flex items-center gap-2"
            >
              Обсудить проект
              <ArrowRight className="w-4 h-4" />
            </motion.a>

            <motion.a
              href="#services"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-outline inline-flex items-center gap-2"
            >
              Узнать подробнее
            </motion.a>
          </div>
        </motion.div>

        {/* Floating cards - AirLume style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto"
        >
          {/* Card 1 */}
          <div className="glass-card p-5 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, hsl(240 80% 55% / 0.3), hsl(260 80% 55% / 0.1))' }}>
                <BarChart3 className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xs text-muted-foreground">Рост охватов</span>
            </div>
            <div className="font-display text-3xl font-bold text-foreground">10x</div>
            <div className="text-xs text-muted-foreground mt-1">Средний рост за 3 месяца</div>
            <div className="absolute -bottom-2 -right-2 w-20 h-20 rounded-full opacity-10" style={{ background: 'hsl(240 80% 60%)' , filter: 'blur(20px)' }} />
          </div>

          {/* Card 2 */}
          <div className="glass-card p-5 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, hsl(190 90% 45% / 0.3), hsl(190 80% 55% / 0.1))' }}>
                <Zap className="w-5 h-5" style={{ color: 'hsl(190 90% 60%)' }} />
              </div>
              <span className="text-xs text-muted-foreground">Автоматизация</span>
            </div>
            <div className="font-display text-3xl font-bold text-foreground">24/7</div>
            <div className="text-xs text-muted-foreground mt-1">Без вашего участия</div>
            <div className="absolute -bottom-2 -right-2 w-20 h-20 rounded-full opacity-10" style={{ background: 'hsl(190 90% 55%)' , filter: 'blur(20px)' }} />
          </div>

          {/* Card 3 */}
          <div className="glass-card p-5 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, hsl(280 80% 55% / 0.3), hsl(280 80% 55% / 0.1))' }}>
                <Sparkles className="w-5 h-5" style={{ color: 'hsl(280 80% 65%)' }} />
              </div>
              <span className="text-xs text-muted-foreground">Проектов</span>
            </div>
            <div className="font-display text-3xl font-bold text-foreground">50+</div>
            <div className="text-xs text-muted-foreground mt-1">Успешных запусков</div>
            <div className="absolute -bottom-2 -right-2 w-20 h-20 rounded-full opacity-10" style={{ background: 'hsl(280 80% 55%)' , filter: 'blur(20px)' }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
