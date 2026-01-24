import { motion } from "framer-motion";
import { ArrowRight, Target, Send } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/5 rounded-full" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-secondary/5 rounded-full" 
        />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-10 lg:p-16 text-center max-w-4xl mx-auto relative overflow-hidden"
        >
          {/* Decorative Corners */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary/30 rounded-tl-2xl" />
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-secondary/30 rounded-br-2xl" />

          <motion.div 
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-8"
          >
            <Target className="w-10 h-10 text-primary" />
          </motion.div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Замыкаю цикл: <span className="gradient-text">Сайт + Трафик</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Сайт не работает в вакууме. Чтобы дизайн начал окупаться сразу после релиза, 
            я беру на себя настройку рекламных кампаний.
          </p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-6 mb-10 max-w-xl mx-auto border border-primary/20"
          >
            <p className="text-foreground/90 leading-relaxed">
              <strong className="text-primary">Настройка РСЯ</strong> (Рекламная Сеть Яндекса) — обеспечу приток целевой аудитории 
              на готовый продукт. Вы получаете связку <span className="text-primary font-medium">«Конверсия + Поток»</span>, а не просто ссылку в браузере.
            </p>
          </motion.div>

          <div className="space-y-4">
            <p className="text-lg text-foreground/80 font-display">
              Референс есть? Давайте превратим его в рабочий инструмент.
            </p>
            <motion.a
              href="https://t.me/GenerationEon"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 0 60px hsl(var(--primary) / 0.5)" }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary text-lg font-display inline-flex items-center gap-3"
            >
              <Send className="w-5 h-5" />
              Начать сотрудничество
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
