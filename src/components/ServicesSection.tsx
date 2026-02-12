import { motion } from "framer-motion";
import { ArrowRight, PenTool, Globe, Bot, MessageCircle, TrendingUp, Layers, Cpu, Target } from "lucide-react";

const services = [
  {
    icon: PenTool,
    title: "Контент-стратегия и производство",
    description: "Разрабатываю уникальный Tone of Voice. Создаю контент полного цикла — от копирайтинга до видеопродакшена.",
    color: "240 80% 62%",
  },
  {
    icon: Globe,
    title: "Мультиплатформенная экосистема",
    description: "Выстраиваю присутствие на Telegram, VK, Дзен, VC, YouTube. Каждый канал усиливает остальные.",
    color: "190 90% 55%",
  },
  {
    icon: Bot,
    title: "AI-автоматизация маркетинга",
    description: "Внедряю чат-ботов, автоматизацию через n8n, ChatGPT и Midjourney. Процессы работают 24/7.",
    color: "280 80% 62%",
  },
  {
    icon: MessageCircle,
    title: "Премиум Telegram-каналы",
    description: "Навигационные боты, встроенные чат-боты, профессиональный визуал и архитектура удержания аудитории.",
    color: "340 80% 62%",
  },
  {
    icon: TrendingUp,
    title: "Конверсия и масштабирование",
    description: "Лид-магниты, лендинги, A/B-тестирование и принципы психологии внимания. Масштабирую результаты.",
    color: "160 80% 50%",
  },
  {
    icon: Target,
    title: "Таргетированная стратегия",
    description: "Анализ аудитории, сегментация, персонализация контента для каждого сегмента и канала.",
    color: "30 90% 55%",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-28 relative">
      <div className="glow-line top-0 left-[10%] right-[10%] absolute" />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-badge mb-6 mx-auto">
            <Layers className="w-3.5 h-3.5 text-primary" />
            <span>Услуги</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-5">
            Полный цикл контент-маркетинга
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            От стратегии до автоматизации — каждое решение с фокусом на ROI вашего бизнеса
          </p>
        </motion.div>

        {/* AirLume style - grid 3x2 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="feature-card group"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                style={{
                  background: `linear-gradient(135deg, hsl(${service.color} / 0.25) 0%, hsl(${service.color} / 0.08) 100%)`,
                  border: `1px solid hsl(${service.color} / 0.25)`,
                }}
              >
                <service.icon className="w-6 h-6" style={{ color: `hsl(${service.color})` }} />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
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
