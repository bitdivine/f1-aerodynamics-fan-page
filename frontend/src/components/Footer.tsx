import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t-4 border-destructive mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center space-y-4">
          <p className="text-sm md:text-base">
            <span className="font-semibold">Educational Fan Page</span> • Not affiliated with Formula 1®
          </p>
          <p className="text-sm flex items-center justify-center gap-2 flex-wrap">
            © 2025. Built with{' '}
            <Heart className="w-4 h-4 fill-destructive text-destructive inline-block" />{' '}
            using{' '}
            <a 
              href="https://caffeine.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-destructive transition-colors font-medium"
            >
              caffeine.ai
            </a>
          </p>
          <p className="text-xs text-primary-foreground/80 max-w-2xl mx-auto">
            This is a fan-made educational resource created to share knowledge about Formula 1 aerodynamics. 
            All technical information is for educational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}
