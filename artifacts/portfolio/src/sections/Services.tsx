import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MonitorSmartphone, Code2, ShoppingCart, Sparkles, Cloud, Wrench } from 'lucide-react';

const SERVICES = [
  {
    icon: MonitorSmartphone,
    title: 'Website Development',
    description: 'Build full responsive websites from scratch that look great on any device.',
  },
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'Pixel-perfect React/TypeScript interfaces tailored for performance and usability.',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Websites',
    description: 'Online stores optimized for conversions with smooth checkout experiences.',
  },
  {
    icon: Sparkles,
    title: 'AI-Powered Web Apps',
    description: 'Integrate intelligent AI features and LLMs into modern web applications.',
  },
  {
    icon: Cloud,
    title: 'Deployment & Hosting',
    description: 'Deploy to modern cloud platforms like Vercel, Netlify, and manage environments.',
  },
  {
    icon: Wrench,
    title: 'Maintenance & Support',
    description: 'Ongoing updates, bug fixes, and continuous performance improvements.',
  },
];

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">What I Offer</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions blending technical expertise with creative problem-solving.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card border border-border p-8 rounded-2xl hover:-translate-y-2 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:hover:shadow-[0_8px_30px_rgba(124,58,237,0.1)]"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
