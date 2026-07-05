import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Shield, Cloud, Server, Layout } from 'lucide-react';

const JOURNEY_STEPS = [
  {
    title: "Started Learning Web Development",
    desc: "Began with HTML, CSS, and JavaScript fundamentals, discovering a passion for building on the web.",
    date: "Phase 1"
  },
  {
    title: "Built Real-World Projects",
    desc: "Created functional websites and applications for real users, learning state management and routing.",
    date: "Phase 2"
  },
  {
    title: "Specialized in Frontend",
    desc: "Focused deeply on React, TypeScript, and modern UI development to craft premium user experiences.",
    date: "Phase 3"
  },
  {
    title: "Exploring AI Integration",
    desc: "Bringing intelligence to web applications by integrating AI features and large language models.",
    date: "Phase 4"
  },
  {
    title: "Learning Cybersecurity",
    desc: "Expanding knowledge of web security, best practices, and ethical hacking fundamentals.",
    date: "Phase 5"
  },
  {
    title: "Building Products for Real Users",
    desc: "Delivering polished, user-tested digital products that solve actual problems elegantly.",
    date: "Present"
  }
];

const EXPLORING = [
  { icon: Brain, title: "AI Development", desc: "LLMs, embeddings, and intelligent UX" },
  { icon: Shield, title: "Cybersecurity", desc: "Web app security and secure coding" },
  { icon: Cloud, title: "Cloud Tech", desc: "Serverless architectures and Edge computing" },
  { icon: Server, title: "Backend Eng", desc: "Databases, APIs, and system design" },
  { icon: Layout, title: "Modern UI/UX", desc: "Micro-interactions and design systems" },
];

export default function Journey() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="journey" className="py-24 bg-card/30 overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">My Journey</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The path of continuous learning and evolution as an engineer.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {JOURNEY_STEPS.map((step, i) => {
            const isEven = i % 2 === 0;
            return (
              <div key={step.title} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-8 last:mb-0">
                
                {/* Dot */}
                <div className="absolute left-[15px] md:left-1/2 w-3 h-3 rounded-full bg-primary md:-translate-x-1/2 z-10 shadow-[0_0_10px_rgba(124,58,237,0.5)] group-hover:scale-150 transition-transform duration-300" />
                
                {/* Spacer for empty side on desktop */}
                <div className="hidden md:block w-1/2" />
                
                {/* Content Card */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="w-[calc(100%-40px)] ml-10 md:w-[calc(50%-40px)] md:ml-0 p-6 bg-card border border-border rounded-2xl hover:border-primary/30 transition-colors shadow-sm"
                >
                  <span className="text-xs font-bold tracking-wider text-primary uppercase mb-2 block">
                    {step.date}
                  </span>
                  <h3 className="font-heading text-lg font-bold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Currently Exploring */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-32 pt-16 border-t border-border"
        >
          <h3 className="font-heading text-2xl font-bold text-center mb-10">Currently Exploring</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {EXPLORING.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 1 + (i * 0.1) }}
                className="bg-background border border-border p-5 rounded-xl text-center hover:border-primary/50 hover:shadow-[0_0_15px_rgba(124,58,237,0.1)] transition-all group"
              >
                <div className="w-10 h-10 mx-auto rounded-lg bg-muted flex items-center justify-center mb-3 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                  <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h4 className="font-medium text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
