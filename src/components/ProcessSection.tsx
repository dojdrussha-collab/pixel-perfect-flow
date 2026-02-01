import { motion } from "framer-motion";

const processes = [
  {
    step: "01",
    title: "Аналитика",
    description: "Погружение в нишу и проектирование CJM",
  },
  {
    step: "02",
    title: "UX-проектирование",
    description: "Структура, логика и пользовательские сценарии",
  },
  {
    step: "03",
    title: "UI и верстка",
    description: "Реализация на Tilda или WordPress",
  },
  {
    step: "04",
    title: "Адаптация",
    description: "Мобильная версия с нативным UX",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-20 border-t border-border">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-xs text-muted-foreground uppercase tracking-widest mb-3 block">
            Методология
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            Этапы работы
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {processes.map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-5 group cursor-default"
              >
                <div className="text-primary font-display font-bold text-sm mb-3">
                  {process.step}
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {process.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {process.description}
                </p>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
