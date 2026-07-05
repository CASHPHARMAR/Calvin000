import { Link } from 'wouter';
import { Home as HomeIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-[100dvh] w-full flex items-center justify-center bg-background text-foreground relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-[80px]" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center z-10 px-6"
      >
        <h1 className="font-heading text-8xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-primary to-secondary mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Page not found
        </h2>
        <p className="text-muted-foreground mb-10 max-w-md mx-auto">
          The page you are looking for doesn't exist or has been moved. 
          Let's get you back on track.
        </p>
        
        <Link 
          href="/"
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)]"
        >
          <HomeIcon className="w-5 h-5" />
          Go Home
        </Link>
      </motion.div>
    </div>
  );
}
