import { motion } from "framer-motion";
import { ArrowRight, Target, Send } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-10 lg:p-16 text-center max-w-3xl mx-auto"
        >
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-8">
            <Target className="w-7 h-7 text-primary" />
          </div>

          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Замыкаю цикл: <span className="text-primary">Сайт + Трафик</span>
          </h2>

          <p className="text-muted-foreground max-w-lg mx-auto mb-8 leading-relaxed">
            Сайт не работает в вакууме. Чтобы дизайн начал окупаться сразу после релиза, 
            беру на себя настройку рекламных кампаний.
          </p>

          <div className="glass-card p-6 mb-10 max-w-lg mx-auto text-left">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <span className="text-primary font-medium">Настройка РСЯ</span> — обеспечу приток целевой аудитории 
              на готовый продукт. Связка «Конверсия + Поток», а не просто ссылка в браузере.
            </p>
          </div>

          <p className="text-foreground font-medium mb-6">
            Референс есть? Превратим его в рабочий инструмент.
          </p>

          <motion.a
            href="https://t.me/GenerationEon"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary text-base font-medium inline-flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
            Начать сотрудничество
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
