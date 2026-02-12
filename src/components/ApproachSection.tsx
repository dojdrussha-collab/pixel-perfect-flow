import { motion } from "framer-motion";
import { Search, Lightbulb, Rocket, TrendingUp } from "lucide-react";

const steps = [
  { num: "01", icon: Search, title: "Аналитика", desc: "Погружение в нишу, аудит конкурентов и определение целей", color: "240 80% 62%" },
  { num: "02", icon: Lightbulb, title: "Стратегия", desc: "Разработка контент-плана и выбор платформ", color: "190 90% 55%" },
  { num: "03", icon: Rocket, title: "Реализация", desc: "Производство контента и настройка автоматизации", color: "280 80% 62%" },
  { num: "04", icon: TrendingUp, title: "Масштабирование", desc: "Анализ метрик, оптимизация и рост", color: "160 80% 50%" },
];

const ApproachSection = () => {
  return (
    <section id="approach" className="py-28 relative">
      <div className="glow-line top-0 left-[10%] right-[10%] absolute" />

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
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-5">
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 group text-center"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 mx-auto"
                style={{
                  background: `linear-gradient(135deg, hsl(${step.color} / 0.25), hsl(${step.color} / 0.08))`,
                  border: `1px solid hsl(${step.color} / 0.25)`,
                }}
              >
                <step.icon className="w-6 h-6" style={{ color: `hsl(${step.color})` }} />
              </div>
              <div className="text-xs font-bold text-muted-foreground mb-2 tracking-widest">{step.num}</div>
              <h3 className="font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
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
