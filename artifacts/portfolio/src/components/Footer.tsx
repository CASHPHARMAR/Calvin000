import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const NAV_LINKS = [
    { name: 'Home', href: '#home' },
    { name: 'Who I Am', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-6 max-w-7xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-8 border-b border-border/50 pb-8">
          
          <div className="flex flex-col space-y-2">
            <span className="font-heading font-bold text-xl tracking-tight">
              Calvin<span className="text-primary">.</span>
            </span>
            <p className="text-sm text-muted-foreground">
              Building products people love to use.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {NAV_LINKS.map(link => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex justify-end gap-4">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Back to top 
              <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
          
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Calvin Selassie. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with React & <span className="text-red-500">♥</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
