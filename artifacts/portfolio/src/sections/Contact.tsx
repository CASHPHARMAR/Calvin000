import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, CheckCircle2, ArrowRight } from 'lucide-react';
import { FaGithub, FaSnapchatGhost, FaInstagram, FaTiktok } from 'react-icons/fa';

const SOCIALS = [
  { name: 'GitHub', icon: FaGithub, url: 'https://github.com/CASHPHARMAR/' },
  { name: 'Snapchat', icon: FaSnapchatGhost, url: 'https://www.snapchat.com/add/cash_pharmar?share_id=UCglE59-8hA&locale=en-US' },
  { name: 'Instagram', icon: FaInstagram, url: 'https://www.instagram.com/itz_calvin7' },
  { name: 'TikTok', icon: FaTiktok, url: 'https://www.tiktok.com/@byte_brothers' },
];

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [copied, setCopied] = useState(false);
  
  const email = "calvinselassie1@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column */}
          <div className="flex flex-col space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Let's Build <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Together</span>.
              </h2>
              <p className="text-xl text-muted-foreground max-w-md">
                Have a project in mind? I'm open to opportunities, collaborations, and interesting challenges.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card border border-border rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm"
            >
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold mb-2">Drop me a line</p>
                <a href={`mailto:${email}`} className="text-xl md:text-2xl font-medium hover:text-primary transition-colors flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  {email}
                </a>
              </div>
              
              <button 
                onClick={handleCopyEmail}
                className={`px-5 py-2.5 rounded-full font-medium transition-all flex items-center gap-2 ${
                  copied 
                    ? 'bg-green-500/10 text-green-500 border border-green-500/20' 
                    : 'bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground'
                }`}
              >
                {copied ? (
                  <><CheckCircle2 className="w-4 h-4" /> Copied!</>
                ) : (
                  <>Copy Email</>
                )}
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold mb-4">Find me online</p>
              <div className="flex flex-wrap gap-4">
                {SOCIALS.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-4 py-3 bg-muted/50 rounded-xl hover:bg-primary hover:text-primary-foreground transition-all duration-300 group border border-transparent hover:border-primary/50"
                  >
                    <social.icon className="w-5 h-5" />
                    <span className="font-medium text-sm">{social.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Decorative Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full aspect-square max-w-md">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-background to-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
              <div className="absolute inset-4 border border-border/50 rounded-full flex items-center justify-center bg-card/30 backdrop-blur-sm">
                <div className="absolute inset-10 border border-primary/20 rounded-full flex items-center justify-center">
                  <div className="absolute inset-10 border border-secondary/20 rounded-full flex items-center justify-center bg-background/50">
                    <span className="font-heading text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-primary to-secondary opacity-80">
                      CS
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
