import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const packages = [
  {
    id: "mvp",
    label: "MVP",
    title: "Быстрая сборка",
    description: "Тест ниши или запуск продукта на стандартных блоках",
    features: ["Лендинги и промо", "Срок: 3–5 дней", "Готовый сайт для трафика"],
    primary: false,
  },
  {
    id: "full",
    label: "Full UX/UI",
    title: "Концептуальная разработка",
    description: "Имидж и отстройка от конкурентов с нуля",
    features: ["Магазины и порталы", "Глубокая UX-проработка", "Визуальный актив"],
    primary: true,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 border-t border-border">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-xs text-muted-foreground uppercase tracking-widest mb-3 block">
            Форматы
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            Два сценария
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`glass-card p-6 flex flex-col ${pkg.primary ? 'border-primary/30' : ''}`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-primary font-medium uppercase tracking-wider">
                  {pkg.label}
                </span>
                {pkg.primary && (
                  <span className="text-xs text-muted-foreground">Популярный</span>
                )}
              </div>

              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {pkg.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-6">
                {pkg.description}
              </p>

              <ul className="space-y-2 mb-6 flex-grow">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1 h-1 bg-primary rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>

              <motion.a
                href="https://t.me/GenerationEon"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className={`${pkg.primary ? 'btn-primary' : 'btn-outline'} w-full text-center inline-flex items-center justify-center gap-2`}
              >
                Выбрать
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
