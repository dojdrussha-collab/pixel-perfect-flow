import { motion } from "framer-motion";
import { ArrowRight, PenTool, Globe, Bot, MessageCircle, TrendingUp, Target } from "lucide-react";

const services = [
  {
    icon: PenTool,
    title: "Контент-стратегия и производство",
    description: "Разрабатываю уникальный Tone of Voice. Создаю контент полного цикла — от копирайтинга до видеопродакшена.",
  },
  {
    icon: Globe,
    title: "Мультиплатформенная экосистема",
    description: "Выстраиваю присутствие на Telegram, VK, Дзен, VC, YouTube. Каждый канал усиливает остальные.",
  },
  {
    icon: Bot,
    title: "AI-автоматизация маркетинга",
    description: "Внедряю чат-ботов, автоматизацию через n8n, ChatGPT и Midjourney. Процессы работают 24/7.",
  },
  {
    icon: MessageCircle,
    title: "Премиум Telegram-каналы",
    description: "Навигационные боты, встроенные чат-боты, профессиональный визуал и архитектура удержания аудитории.",
  },
  {
    icon: TrendingUp,
    title: "Конверсия и масштабирование",
    description: "Лид-магниты, лендинги, A/B-тестирование и принципы психологии внимания. Масштабирую результаты.",
  },
  {
    icon: Target,
    title: "Таргетированная стратегия",
    description: "Анализ аудитории, сегментация, персонализация контента для каждого сегмента и канала.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-28 relative">
      <div className="glow-line top-0 left-[15%] right-[15%] absolute" />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-badge mb-6 mx-auto">
            <span>Услуги</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Полный цикл контент-маркетинга
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-sm">
            От стратегии до автоматизации — каждое решение с фокусом на ROI
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="feature-card group"
            >
              <div className="feature-icon">
                <service.icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              </div>
              <h3 className="font-display text-base font-bold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                {service.description}
              </p>
              <a
                href="https://t.me/Solarstonne"
                target="_blank"
                rel="noopener noreferrer"
                className="learn-more"
              >
                Подробнее <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
