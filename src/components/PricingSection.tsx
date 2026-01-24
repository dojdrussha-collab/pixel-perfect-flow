import { motion } from "framer-motion";
import { Zap, Gem, Check } from "lucide-react";

const PricingSection = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Два сценария <span className="gradient-text">запуска</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* MVP Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 lg:p-10 card-hover group"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Zap className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground">Быстрая сборка</h3>
                <span className="text-primary font-medium">MVP</span>
              </div>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              <strong className="text-foreground">Задача:</strong> Быстрый тест ниши или запуск продукта. 
              Сборка на базе стандартных блоков с глубокой кастомизацией стилей.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Лендинги и промо-страницы</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Срок: 3–5 дней</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Технически идеальный сайт, готовый к приему трафика</span>
              </li>
            </ul>

            <button className="btn-outline w-full font-display">
              Выбрать MVP
            </button>
          </motion.div>

          {/* Full UX/UI Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 lg:p-10 card-hover group relative overflow-hidden"
          >
            {/* Premium Badge Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center group-hover:bg-secondary/30 transition-colors">
                  <Gem className="w-7 h-7 text-secondary" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground">Концептуальная разработка</h3>
                  <span className="text-secondary font-medium">Full UX/UI</span>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                <strong className="text-foreground">Задача:</strong> Имидж, отстройка от конкурентов, сложные e-commerce проекты. 
                Разработка с нуля (Zero Block / Custom). Уникальная сетка, сложная анимация, нестандартная навигация.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Интернет-магазины, корпоративные порталы, имиджевые лонгриды</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Глубокая проработка UX</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Визуальный актив бизнеса, повышающий ценность продукта</span>
                </li>
              </ul>

              <button className="btn-primary w-full font-display">
                Выбрать Full UX/UI
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
