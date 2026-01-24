import { motion } from "framer-motion";
import { Zap, Gem, Check, ArrowRight } from "lucide-react";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-[600px] h-[600px] border border-secondary/10 rounded-full" 
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-0 w-[400px] h-[400px] border border-primary/10 rounded-full" 
        />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full border border-secondary/30 text-secondary text-sm font-medium mb-6"
          >
            Форматы
          </motion.span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Два сценария <span className="gradient-text">запуска</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* MVP Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8 }}
            className="glass-card p-8 lg:p-10 group relative overflow-hidden flex flex-col h-full"
          >
            {/* Animated Corner */}
            <motion.div
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
            />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-6">
                <motion.div 
                  whileHover={{ rotate: 180, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                >
                  <Zap className="w-7 h-7 text-primary" />
                </motion.div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground">Быстрая сборка</h3>
                  <span className="text-primary font-medium">MVP</span>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                <strong className="text-foreground">Задача:</strong> Быстрый тест ниши или запуск продукта. 
                Сборка на базе стандартных блоков с глубокой кастомизацией стилей.
              </p>

              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-muted-foreground">Лендинги и промо-страницы</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-muted-foreground">Срок: 3–5 дней</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-muted-foreground">Технически идеальный сайт, готовый к приему трафика</span>
                </li>
              </ul>

              <motion.a
                href="https://t.me/GenerationEon"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-outline w-full font-display inline-flex items-center justify-center gap-2 mt-auto"
              >
                Выбрать MVP
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>

          {/* Full UX/UI Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8 }}
            className="glass-card p-8 lg:p-10 group relative overflow-hidden flex flex-col h-full"
          >
            {/* Premium Badge */}
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-secondary/20 border border-secondary/30">
              <span className="text-xs font-medium text-secondary">Популярный</span>
            </div>
            
            {/* Animated Corner */}
            <motion.div
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute top-0 right-0 w-40 h-40 bg-secondary/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"
            />

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-6">
                <motion.div 
                  whileHover={{ rotate: 180, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center group-hover:bg-secondary/30 transition-colors"
                >
                  <Gem className="w-7 h-7 text-secondary" />
                </motion.div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground">Концептуальная разработка</h3>
                  <span className="text-secondary font-medium">Full UX/UI</span>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                <strong className="text-foreground">Задача:</strong> Имидж, отстройка от конкурентов, сложные e-commerce проекты. 
                Разработка с нуля (Zero Block / Custom).
              </p>

              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-secondary" />
                  </div>
                  <span className="text-muted-foreground">Интернет-магазины, корпоративные порталы</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-secondary" />
                  </div>
                  <span className="text-muted-foreground">Глубокая проработка UX</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-secondary" />
                  </div>
                  <span className="text-muted-foreground">Визуальный актив бизнеса</span>
                </li>
              </ul>

              <motion.a
                href="https://t.me/GenerationEon"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, boxShadow: "0 0 40px hsl(var(--secondary) / 0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full font-display inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-medium text-secondary-foreground transition-all duration-300 mt-auto"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--secondary)) 0%, hsl(var(--primary)) 100%)",
                  boxShadow: "0 0 30px hsl(var(--secondary) / 0.4)",
                }}
              >
                Выбрать Full UX/UI
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
