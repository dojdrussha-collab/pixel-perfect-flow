import { motion } from "framer-motion";
import { ArrowRight, Target } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-10 lg:p-16 text-center max-w-4xl mx-auto"
        >
          <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center mx-auto mb-8">
            <Target className="w-10 h-10 text-primary" />
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Замыкаю цикл: <span className="gradient-text">Сайт + Трафик</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Сайт не работает в вакууме. Чтобы дизайн начал окупаться сразу после релиза, 
            я беру на себя настройку рекламных кампаний.
          </p>

          <div className="glass-card p-6 mb-10 max-w-xl mx-auto">
            <p className="text-foreground/90 leading-relaxed">
              <strong className="text-primary">Настройка РСЯ</strong> (Рекламная Сеть Яндекса) — обеспечу приток целевой аудитории 
              на готовый продукт. Вы получаете связку <span className="text-primary font-medium">«Конверсия + Поток»</span>, а не просто ссылку в браузере.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-lg text-foreground/80 font-display">
              Референс есть? Давайте превратим его в рабочий инструмент.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary text-lg font-display inline-flex items-center gap-3"
            >
              Начать сотрудничество
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
