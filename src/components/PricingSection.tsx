import { motion } from "framer-motion";
import { Zap, Gem, Check, ArrowRight } from "lucide-react";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 lg:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium mb-3 block">
            Форматы
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Два сценария запуска
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          {/* MVP Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 flex flex-col h-full card-hover"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground">Быстрая сборка</h3>
                <span className="text-primary text-sm font-medium">MVP</span>
              </div>
            </div>

            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              <span className="text-foreground font-medium">Задача:</span> Быстрый тест ниши или запуск продукта. 
              Сборка на базе стандартных блоков с кастомизацией стилей.
            </p>

            <ul className="space-y-3 mb-8 flex-grow">
              {["Лендинги и промо-страницы", "Срок: 3–5 дней", "Готовый сайт для приема трафика"].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-muted-foreground text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <motion.a
              href="https://t.me/GenerationEon"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="btn-outline w-full font-medium inline-flex items-center justify-center gap-2 mt-auto"
            >
              Выбрать MVP
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>

          {/* Full UX/UI Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-8 flex flex-col h-full card-hover relative"
          >
            {/* Badge */}
            <div className="absolute top-4 right-4 px-3 py-1 rounded-md bg-primary/15 border border-primary/30">
              <span className="text-xs font-medium text-primary">Популярный</span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Gem className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground">Концептуальная разработка</h3>
                <span className="text-primary text-sm font-medium">Full UX/UI</span>
              </div>
            </div>

            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              <span className="text-foreground font-medium">Задача:</span> Имидж, отстройка от конкурентов, сложные e-commerce проекты. 
              Разработка с нуля (Zero Block / Custom).
            </p>

            <ul className="space-y-3 mb-8 flex-grow">
              {["Интернет-магазины, корпоративные порталы", "Глубокая проработка UX", "Визуальный актив бизнеса"].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-muted-foreground text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <motion.a
              href="https://t.me/GenerationEon"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="btn-primary w-full font-medium inline-flex items-center justify-center gap-2 mt-auto"
            >
              Выбрать Full UX/UI
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
