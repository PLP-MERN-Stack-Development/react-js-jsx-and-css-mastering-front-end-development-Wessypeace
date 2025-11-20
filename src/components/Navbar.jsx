import { NavLink } from 'react-router-dom';
import { CheckSquare } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { cn } from '@/lib/utils';

/**
 * Navigation bar component
 */
export const Navbar = () => {
  const linkClass = ({ isActive }) =>
    cn(
      'px-4 py-2 rounded-lg font-medium transition-colors duration-200',
      isActive
        ? 'bg-primary text-primary-foreground'
        : 'text-foreground hover:bg-secondary'
    );

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 text-xl font-bold text-primary hover:opacity-80 transition-opacity">
            <CheckSquare className="h-6 w-6" />
            <span className="hidden sm:inline">React Mastery</span>
          </NavLink>

          {/* Navigation Links */}
          <div className="flex items-center gap-2">
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
            <NavLink to="/tasks" className={linkClass}>
              Tasks
            </NavLink>
            <NavLink to="/api-data" className={linkClass}>
              API Data
            </NavLink>
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
