import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  SiHtml5, SiCss, SiJavascript, SiTypescript, 
  SiReact, SiVite, SiTailwindcss, SiNodedotjs, 
  SiSupabase, SiGit, SiGithub, SiVercel, SiFigma 
} from 'react-icons/si';

const SKILLS = [
  { name: 'HTML5', icon: SiHtml5 },
  { name: 'CSS3', icon: SiCss },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'React', icon: SiReact },
  { name: 'Vite', icon: SiVite },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Supabase', icon: SiSupabase },
  { name: 'Git', icon: SiGit },
  { name: 'GitHub', icon: SiGithub },
  { name: 'Vercel', icon: SiVercel },
  { name: 'Figma', icon: SiFigma },
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="skills" className="py-24 bg-card/30">
      <div className="container mx-auto px-6 max-w-7xl text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">My Tech Stack</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The tools and technologies I use to build robust and scalable digital products.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-card border border-border group hover:bg-primary hover:border-primary transition-all duration-300 cursor-default"
            >
              <skill.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground group-hover:scale-110 transition-all duration-300" />
              <span className="font-medium text-foreground group-hover:text-primary-foreground transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
