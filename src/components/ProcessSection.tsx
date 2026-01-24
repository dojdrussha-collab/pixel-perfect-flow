import { motion } from "framer-motion";
import { Search, Layout, Paintbrush, Smartphone } from "lucide-react";

const processes = [
  {
    icon: Search,
    title: "Аналитика и Сценарии",
    description: "Глубокое погружение в нишу. Разработка CJM (пути клиента). Я проектирую то, как пользователь будет мыслить на сайте, а не только то, как он будет смотреть.",
  },
  {
    icon: Layout,
    title: "UX-Проектирование",
    description: "Создание каркаса и логики. Сначала — структура и смыслы, потом — визуал.",
  },
  {
    icon: Paintbrush,
    title: "UI и Верстка",
    description: "Реализация на Tilda или WordPress. Чистый код, быстрая загрузка, безупречная типографика.",
  },
  {
    icon: Smartphone,
    title: "App-Adaptation",
    description: "Не просто «мобильная версия», а адаптив, тактильно напоминающий нативное приложение. Удобство большого пальца и интуитивные свайпы.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
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
            Системная <span className="gradient-text">поэтапность</span> работы
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Дизайн без логики — декорация. Мой процесс строится от задачи.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {processes.map((process, index) => (
            <motion.div
              key={process.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-8 card-hover group"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <process.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                    {process.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
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
