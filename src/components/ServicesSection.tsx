import { motion } from "framer-motion";
import { ArrowRight, PenTool, Globe, Bot, MessageCircle, TrendingUp } from "lucide-react";

const services = [
  {
    icon: PenTool,
    title: "Контент-стратегия и производство",
    description:
      "Разрабатываю уникальный Tone of Voice. Создаю контент полного цикла — от копирайтинга до видеопродакшена. Адаптирую под специфику каждой платформы для максимальной конверсии.",
    large: true,
  },
  {
    icon: Globe,
    title: "Мультиплатформенная экосистема",
    description:
      "Выстраиваю присутствие на Telegram, VK, Дзен, VC, YouTube. Каждый канал работает на усиление остальных. Результат — синергия, а не разрозненные посты.",
    large: true,
  },
  {
    icon: Bot,
    title: "AI-автоматизация маркетинга",
    description:
      "Внедряю чат-ботов для Telegram, настраиваю автоматизацию через n8n, использую ChatGPT и Midjourney для генерации контента. Ваши маркетинговые процессы работают круглосуточно.",
    large: false,
  },
  {
    icon: MessageCircle,
    title: "Премиум Telegram-каналы",
    description:
      "Трансформирую канал в интерактивную платформу: навигационные боты, встроенные чат-боты, профессиональный визуал и архитектура удержания аудитории.",
    large: false,
  },
  {
    icon: TrendingUp,
    title: "Конверсия и масштабирование",
    description:
      "Проектирую лид-магниты, посадочные страницы, лендинги. Применяю A/B-тестирование и принципы психологии внимания. Выявляю точки роста и масштабирую результаты.",
    large: false,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      {/* Separator glow */}
      <div className="glow-line top-0 left-[10%] right-[10%] absolute" />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs text-primary font-medium uppercase tracking-widest mb-4 block">Услуги</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Полный цикл контент-маркетинга
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            От стратегии до автоматизации — каждое решение с фокусом на ROI вашего бизнеса
          </p>
        </motion.div>

        {/* Top row - 2 large cards */}
        <div className="grid md:grid-cols-2 gap-5 mb-5">
          {services
            .filter((s) => s.large)
            .map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="feature-card"
              >
                <div className="feature-icon">
                  <service.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-grow">{service.description}</p>
                <a
                  href="https://t.me/Solarstonne"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-primary font-medium mt-5 hover:gap-3 transition-all"
                >
                  Подробнее <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            ))}
        </div>

        {/* Bottom row - 3 cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {services
            .filter((s) => !s.large)
            .map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="feature-card"
              >
                <div className="feature-icon">
                  <service.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-base font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-grow">{service.description}</p>
                <a
                  href="https://t.me/Solarstonne"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-primary font-medium mt-5 hover:gap-3 transition-all"
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
