import { Github, Heart } from 'lucide-react';

/**
 * Footer component with links and copyright
 */
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>© {currentYear} React Mastery</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              Built with <Heart className="h-4 w-4 text-destructive fill-destructive" /> using React & Tailwind
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://react.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              React Docs
            </a>
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Tailwind CSS
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
