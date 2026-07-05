import { motion } from 'framer-motion';
import calvinPhoto from "@assets/1000145184_1783251718808.jpg";
import { SiReact, SiTypescript, SiTailwindcss, SiJavascript, SiSupabase, SiVercel } from 'react-icons/si';

const TECH_BADGES = [
  { icon: SiReact, name: 'React', delay: 0, duration: 4, yOffset: -20, xOffset: 20 },
  { icon: SiTypescript, name: 'TypeScript', delay: 0.5, duration: 3.5, yOffset: 10, xOffset: 60 },
  { icon: SiTailwindcss, name: 'Tailwind CSS', delay: 1, duration: 4.2, yOffset: 40, xOffset: 30 },
  { icon: SiJavascript, name: 'JavaScript', delay: 1.5, duration: 3.8, yOffset: 30, xOffset: -30 },
  { icon: SiSupabase, name: 'Supabase', delay: 2, duration: 4.5, yOffset: 0, xOffset: -60 },
  { icon: SiVercel, name: 'Vercel', delay: 2.5, duration: 3.6, yOffset: -30, xOffset: -20 },
];

export default function Hero() {
  const headingText = "I build beautiful, fast, and user-focused web experiences.";
  const words = headingText.split(" ");

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Column - Content */}
          <div className="flex flex-col items-start space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col space-y-4"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Available for Freelance
              </div>
              <h2 className="text-muted-foreground uppercase tracking-widest text-sm font-semibold">
                Full-Stack Developer · Frontend Specialist
              </h2>
            </motion.div>

            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-lg text-muted-foreground max-w-xl leading-relaxed"
            >
              I create modern websites and web applications with clean code, intuitive design, and a focus on delivering real-world solutions. Passionate about building digital products that make an impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a 
                href="#work" 
                className="px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] active:scale-95"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3.5 rounded-full border border-border bg-card/50 backdrop-blur-sm text-foreground font-medium hover:bg-muted transition-all active:scale-95"
              >
                Let's Talk
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex items-center gap-4 pt-4 border-t border-border/50 w-full max-w-md"
            >
              <p className="text-sm text-muted-foreground italic">
                "Building products people love to use."
              </p>
            </motion.div>
          </div>

          {/* Right Column - Visuals */}
          <div className="relative flex justify-center items-center h-[500px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-border shadow-2xl shadow-primary/20"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 mix-blend-overlay z-10" />
              <img 
                src={calvinPhoto} 
                alt="Calvin Selassie" 
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>

            {/* Floating Badges */}
            {TECH_BADGES.map((badge, i) => (
              <motion.div
                key={badge.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + badge.delay }}
                className="absolute z-20 hidden md:block"
                style={{
                  top: `calc(50% + ${badge.yOffset}px)`,
                  left: `calc(50% + ${badge.xOffset}px)`,
                }}
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ 
                    duration: badge.duration, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: badge.delay 
                  }}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/80 backdrop-blur-md border border-border shadow-lg"
                >
                  <badge.icon className="w-4 h-4 text-primary" />
                  <span className="text-xs font-medium">{badge.name}</span>
                </motion.div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
