import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Star } from 'lucide-react';

const PROJECTS = [
  {
    name: 'Belinda Data Hub',
    status: '🟢 Live',
    url: 'https://belindadatahub.vercel.app/',
    description: 'A data management dashboard for organizing and visualizing business data with clean analytics views.',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    name: 'Chef Fest AI',
    status: '🟢 Live',
    url: 'https://chef-fest-ai.vercel.app/',
    description: 'An AI-powered recipe discovery platform that suggests meals based on available ingredients.',
    tech: ['React', 'AI Integration', 'Tailwind CSS'],
  },
  {
    name: 'Calvix',
    status: '🟡 Under Development',
    url: 'https://calvix.lovable.app/',
    description: 'A personal productivity tool currently in active development focusing on efficient workflow management.',
    tech: ['React', 'TypeScript', 'Supabase'],
  },
  {
    name: 'ChefBot Assistant',
    status: '🟡 Under Development',
    url: 'https://chefbot-assistant.vercel.app/',
    description: 'An AI-powered cooking assistant chatbot helping users find and create personalized recipes.',
    tech: ['React', 'AI/LLM', 'Tailwind CSS'],
  }
];

export default function Work() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="work" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
          <p className="text-muted-foreground max-w-2xl">
            A selection of projects that showcase my frontend capabilities and approach to problem-solving.
          </p>
        </motion.div>

        {/* Large Featured Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-card border border-border rounded-3xl overflow-hidden mb-12 hover:border-primary/30 transition-colors duration-500 group"
        >
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium bg-amber-500/10 text-amber-500 border border-amber-500/20 rounded-full">
                <Star className="w-3.5 h-3.5 fill-current" />
                Featured
              </span>
              <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 rounded-full">
                🟢 Live
              </span>
            </div>
            
            <h3 className="font-heading text-3xl md:text-4xl font-bold mb-4 group-hover:text-primary transition-colors">
              Electronic Hive
            </h3>
            
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              A modern electronics e-commerce platform with product listings, shopping cart, and smooth user experience. Built with React and deployed on Vercel.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-10">
              {['React', 'TypeScript', 'Tailwind CSS', 'Vercel'].map(tech => (
                <span key={tech} className="px-3 py-1 bg-muted text-muted-foreground rounded-md text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex items-center gap-4 mt-auto">
              <a 
                href="https://electronic-hive.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
              >
                Live Demo <ExternalLink className="w-4 h-4" />
              </a>
              <button 
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-transparent text-foreground font-medium hover:bg-muted transition-colors"
                title="Code repository"
              >
                <Github className="w-4 h-4" /> GitHub
              </button>
            </div>
          </div>

          <div className="relative h-64 lg:h-auto overflow-hidden bg-muted flex items-center justify-center p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/10 to-background z-0" />
            <div className="relative z-10 w-full h-full max-h-[400px] rounded-xl border border-border/50 bg-card/80 backdrop-blur-sm shadow-2xl overflow-hidden flex flex-col group-hover:scale-[1.02] transition-transform duration-500">
              <div className="h-8 border-b border-border/50 bg-muted/50 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <div className="mx-auto text-[10px] text-muted-foreground font-mono bg-background/50 px-4 py-1 rounded-md">
                  electronic-hive.vercel.app
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center p-8 bg-gradient-to-br from-background to-muted">
                <h4 className="font-heading text-2xl font-bold opacity-30">Electronic Hive</h4>
                <p className="text-sm text-muted-foreground mt-2 opacity-50 font-mono">&lt;EcommercePlatform /&gt;</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + (i * 0.1) }}
              className="bg-card border border-border rounded-2xl overflow-hidden group hover:-translate-y-2 hover:border-primary/30 transition-all duration-300 flex flex-col"
            >
              <div className="h-48 relative overflow-hidden bg-muted flex items-center justify-center p-6 border-b border-border">
                <div className="absolute inset-0 bg-gradient-to-tr from-muted to-background z-0" />
                <div className="relative z-10 w-full h-full rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm shadow-lg overflow-hidden flex flex-col group-hover:scale-105 transition-transform duration-500">
                  <div className="h-6 border-b border-border/50 bg-muted/50 flex items-center px-3 gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500/80" />
                    <div className="w-2 h-2 rounded-full bg-amber-500/80" />
                    <div className="w-2 h-2 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex-1 flex items-center justify-center bg-gradient-to-b from-background/50 to-muted/50">
                    <span className="font-heading font-bold opacity-30">{project.name}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-heading text-xl font-bold group-hover:text-primary transition-colors">{project.name}</h3>
                  <span className="text-xs font-medium px-2.5 py-1 bg-muted rounded-full">
                    {project.status}
                  </span>
                </div>
                
                <p className="text-muted-foreground text-sm mb-6 flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map(t => (
                    <span key={t} className="px-2 py-1 bg-background border border-border text-xs text-muted-foreground rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border">
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex justify-center items-center gap-2 py-2.5 rounded-lg bg-primary/10 text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-colors text-sm"
                  >
                    Visit Site <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button className="p-2.5 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
                    <Github className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
