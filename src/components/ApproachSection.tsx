import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Аналитика", desc: "Погружение в нишу, аудит конкурентов и определение целей" },
  { num: "02", title: "Стратегия", desc: "Разработка контент-плана и выбор платформ" },
  { num: "03", title: "Реализация", desc: "Производство контента и настройка автоматизации" },
  { num: "04", title: "Масштабирование", desc: "Анализ метрик, оптимизация и рост" },
];

const ApproachSection = () => {
  return (
    <section id="approach" className="py-28 relative">
      <div className="glow-line top-0 left-[15%] right-[15%] absolute" />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-badge mb-6 mx-auto">
            <span>Подход</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            От концепции до измеримых KPI
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-sm">
            Каждое решение — с фокусом на ROI вашего бизнеса
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="glass-card p-6 group"
            >
              <div className="text-xs font-bold text-muted-foreground mb-4 tracking-widest">{step.num}</div>
              <h3 className="font-display text-sm font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
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
