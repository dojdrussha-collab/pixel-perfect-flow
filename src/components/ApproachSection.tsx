import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Аналитика", desc: "Погружение в нишу, аудит конкурентов и определение целей" },
  { num: "02", title: "Стратегия", desc: "Разработка контент-плана и выбор платформ" },
  { num: "03", title: "Реализация", desc: "Производство контента и настройка автоматизации" },
  { num: "04", title: "Масштабирование", desc: "Анализ метрик, оптимизация и рост" },
];

const ApproachSection = () => {
  return (
    <section id="approach" className="py-24 relative">
      <div className="glow-line top-0 left-[10%] right-[10%] absolute" />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs text-primary font-medium uppercase tracking-widest mb-4 block">
            Подход
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            От концепции до измеримых KPI
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Каждое решение — с фокусом на ROI вашего бизнеса
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 group"
            >
              <div className="text-3xl font-display font-bold text-primary/20 mb-4">
                {step.num}
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
