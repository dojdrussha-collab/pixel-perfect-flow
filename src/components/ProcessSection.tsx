import { motion } from "framer-motion";
import { Search, Layout, Paintbrush, Smartphone } from "lucide-react";

const processes = [
  {
    icon: Search,
    title: "Аналитика и сценарии",
    description: "Погружение в нишу. Проектирование CJM. Продумываю, как пользователь мыслит на сайте, а не только как смотрит.",
    step: "01",
  },
  {
    icon: Layout,
    title: "UX-проектирование",
    description: "Каркас и логика. Сначала структура и смыслы, потом визуал.",
    step: "02",
  },
  {
    icon: Paintbrush,
    title: "UI и верстка",
    description: "Реализация на Tilda или WordPress. Чистый код, быстрая загрузка, точная типографика.",
    step: "03",
  },
  {
    icon: Smartphone,
    title: "Адаптация",
    description: "Не просто мобильная версия — адаптив, напоминающий нативное приложение. Удобство большого пальца.",
    step: "04",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 lg:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium mb-3 block">
            Методология
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Системная поэтапность работы
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {processes.map((process, index) => (
            <motion.div
              key={process.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 relative card-hover group"
            >
              {/* Step Number */}
              <div className="absolute -top-3 left-6 px-3 py-1 rounded-md bg-background border border-border">
                <span className="font-display font-bold text-primary text-sm">{process.step}</span>
              </div>

              <div className="flex items-start gap-4 pt-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <process.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {process.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {process.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
