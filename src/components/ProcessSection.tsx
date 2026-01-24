import { motion, useInView } from "framer-motion";
import { Search, Layout, Paintbrush, Smartphone } from "lucide-react";
import { useRef, useState } from "react";

const processes = [
  {
    icon: Search,
    title: "Аналитика и Сценарии",
    description: "Глубокое погружение в нишу. Разработка CJM (пути клиента). Я проектирую то, как пользователь будет мыслить на сайте, а не только то, как он будет смотреть.",
    step: "01",
    color: "primary",
  },
  {
    icon: Layout,
    title: "UX-Проектирование",
    description: "Создание каркаса и логики. Сначала — структура и смыслы, потом — визуал.",
    step: "02",
    color: "primary",
  },
  {
    icon: Paintbrush,
    title: "UI и Верстка",
    description: "Реализация на Tilda или WordPress. Чистый код, быстрая загрузка, безупречная типографика.",
    step: "03",
    color: "secondary",
  },
  {
    icon: Smartphone,
    title: "App-Adaptation",
    description: "Не просто «мобильная версия», а адаптив, тактильно напоминающий нативное приложение. Удобство большого пальца и интуитивные свайпы.",
    step: "04",
    color: "secondary",
  },
];

const ProcessSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="process" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-3xl" 
        />
      </div>

      {/* Connection Line */}
      <svg className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 hidden lg:block" preserveAspectRatio="none">
        <motion.line
          x1="0.5"
          y1="0"
          x2="0.5"
          y2="100%"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          strokeDasharray="8 8"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <defs>
          <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(var(--primary) / 0)" />
            <stop offset="20%" stopColor="hsl(var(--primary) / 0.5)" />
            <stop offset="80%" stopColor="hsl(var(--secondary) / 0.5)" />
            <stop offset="100%" stopColor="hsl(var(--secondary) / 0)" />
          </linearGradient>
        </defs>
      </svg>

      <div className="section-container relative z-10" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full border border-primary/30 text-primary text-sm font-medium mb-6"
          >
            Методология
          </motion.span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Системная <span className="gradient-text">поэтапность</span> работы
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Дизайн без логики — декорация. Мой процесс строится от задачи.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {processes.map((process, index) => (
            <motion.div
              key={process.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`glass-card p-8 pt-10 relative group cursor-pointer transition-all duration-500 ${
                hoveredIndex === index ? 'scale-[1.02] shadow-[0_0_60px_hsl(var(--' + process.color + ')_/_0.3)]' : ''
              } ${hoveredIndex !== null && hoveredIndex !== index ? 'opacity-50 scale-[0.98]' : ''}`}
            >
              {/* Step Number - Above the card */}
              <div className="absolute -top-6 left-6 w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center z-20">
                <span className={`font-display font-bold text-${process.color}`}>{process.step}</span>
              </div>

              {/* Hover Glow */}
              <motion.div
                className={`absolute inset-0 rounded-2xl bg-${process.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="flex items-start gap-5 relative z-10">
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-${process.color}/10 flex items-center justify-center group-hover:bg-${process.color}/20 transition-colors`}
                >
                  <process.icon className={`w-7 h-7 text-${process.color}`} />
                </motion.div>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {process.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {process.description}
                  </p>
                </div>
              </div>

              {/* Animated Border */}
              <motion.div
                className={`absolute inset-0 rounded-2xl border-2 border-${process.color}/0 group-hover:border-${process.color}/30 transition-colors duration-500`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
