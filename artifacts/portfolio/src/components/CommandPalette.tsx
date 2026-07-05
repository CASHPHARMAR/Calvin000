import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Command } from 'cmdk';
import { Search, Home, User, Briefcase, Code, Terminal, Mail, Sun, Moon, Copy, ArrowRight } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  // Focus input when opened
  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [open]);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: top - 80,
        behavior: 'smooth'
      });
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('calvinselassie1@gmail.com');
    // We'd use a toast here ideally, but keeping it simple
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="w-full max-w-xl bg-card border border-border rounded-xl shadow-2xl overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <Command className="w-full h-full flex flex-col bg-transparent" label="Command Menu">
                <div className="flex items-center border-b border-border px-4 py-3">
                  <Search className="w-5 h-5 text-muted-foreground mr-3" />
                  <Command.Input 
                    ref={inputRef}
                    placeholder="Type a command or search..." 
                    className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none text-lg"
                  />
                  <div className="flex gap-1">
                    <kbd className="bg-muted px-2 py-1 rounded text-xs font-mono text-muted-foreground">esc</kbd>
                  </div>
                </div>

                <Command.List className="max-h-[300px] overflow-y-auto p-2 scrollbar-thin">
                  <Command.Empty className="py-6 text-center text-muted-foreground">
                    No results found.
                  </Command.Empty>

                  <Command.Group heading="Navigation" className="text-xs font-medium text-muted-foreground px-2 py-1.5 [&_[cmdk-group-items]]:mt-1">
                    <Command.Item 
                      onSelect={() => runCommand(() => scrollTo('#home'))}
                      className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-foreground cursor-pointer aria-selected:bg-primary/10 aria-selected:text-primary data-[selected=true]:bg-primary/10 data-[selected=true]:text-primary"
                    >
                      <Home className="w-4 h-4" />
                      Home
                    </Command.Item>
                    <Command.Item 
                      onSelect={() => runCommand(() => scrollTo('#about'))}
                      className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-foreground cursor-pointer aria-selected:bg-primary/10 aria-selected:text-primary data-[selected=true]:bg-primary/10 data-[selected=true]:text-primary"
                    >
                      <User className="w-4 h-4" />
                      Who I Am
                    </Command.Item>
                    <Command.Item 
                      onSelect={() => runCommand(() => scrollTo('#services'))}
                      className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-foreground cursor-pointer aria-selected:bg-primary/10 aria-selected:text-primary data-[selected=true]:bg-primary/10 data-[selected=true]:text-primary"
                    >
                      <Briefcase className="w-4 h-4" />
                      Services
                    </Command.Item>
                    <Command.Item 
                      onSelect={() => runCommand(() => scrollTo('#work'))}
                      className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-foreground cursor-pointer aria-selected:bg-primary/10 aria-selected:text-primary data-[selected=true]:bg-primary/10 data-[selected=true]:text-primary"
                    >
                      <Code className="w-4 h-4" />
                      Featured Work
                    </Command.Item>
                    <Command.Item 
                      onSelect={() => runCommand(() => scrollTo('#skills'))}
                      className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-foreground cursor-pointer aria-selected:bg-primary/10 aria-selected:text-primary data-[selected=true]:bg-primary/10 data-[selected=true]:text-primary"
                    >
                      <Terminal className="w-4 h-4" />
                      Skills & Tech Stack
                    </Command.Item>
                    <Command.Item 
                      onSelect={() => runCommand(() => scrollTo('#contact'))}
                      className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-foreground cursor-pointer aria-selected:bg-primary/10 aria-selected:text-primary data-[selected=true]:bg-primary/10 data-[selected=true]:text-primary"
                    >
                      <Mail className="w-4 h-4" />
                      Contact
                    </Command.Item>
                  </Command.Group>

                  <Command.Separator className="h-px bg-border my-1 mx-2" />

                  <Command.Group heading="Actions" className="text-xs font-medium text-muted-foreground px-2 py-1.5 [&_[cmdk-group-items]]:mt-1">
                    <Command.Item 
                      onSelect={() => runCommand(toggleTheme)}
                      className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-foreground cursor-pointer aria-selected:bg-primary/10 aria-selected:text-primary data-[selected=true]:bg-primary/10 data-[selected=true]:text-primary"
                    >
                      {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                      Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode
                    </Command.Item>
                    <Command.Item 
                      onSelect={() => runCommand(copyEmail)}
                      className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-foreground cursor-pointer aria-selected:bg-primary/10 aria-selected:text-primary data-[selected=true]:bg-primary/10 data-[selected=true]:text-primary"
                    >
                      <Copy className="w-4 h-4" />
                      Copy Email Address
                    </Command.Item>
                    <Command.Item 
                      onSelect={() => runCommand(() => window.open('https://github.com/CASHPHARMAR/', '_blank'))}
                      className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-foreground cursor-pointer aria-selected:bg-primary/10 aria-selected:text-primary data-[selected=true]:bg-primary/10 data-[selected=true]:text-primary"
                    >
                      <ArrowRight className="w-4 h-4" />
                      Go to GitHub
                    </Command.Item>
                  </Command.Group>
                </Command.List>
              </Command>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
