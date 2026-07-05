import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const STATS = [
  { label: 'Projects Completed', value: '6+' },
  { label: 'Technologies Used', value: '13+' },
  { label: 'Years Learning', value: '2+' },
  { label: 'Real Products Built', value: '4' },
];

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-card/30">
      <div className="container mx-auto px-6 max-w-7xl">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column */}
          <div className="flex flex-col space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold">Who I Am</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-primary to-transparent" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              I'm <span className="text-foreground font-medium">Calvin Selassie</span>, a Full-Stack Developer specializing in frontend development. I build modern, responsive, and user-focused web applications that combine clean design with reliable performance. 
              <br/><br/>
              I'm constantly exploring new technologies, including AI and cybersecurity, to create digital solutions that solve real-world problems. Every project is an opportunity to learn, improve, and deliver experiences that people genuinely enjoy using.
            </motion.p>
          </div>

          {/* Right Column - Stats Grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
                className="bg-card border border-border p-6 rounded-2xl flex flex-col items-center justify-center text-center group hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="font-heading text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-primary to-secondary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
