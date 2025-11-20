import { cn } from '@/lib/utils';

/**
 * Reusable Card component
 */
export const Card = ({ children, className, hover = false }) => {
  return (
    <div
      className={cn(
        'bg-card border border-border rounded-lg p-6 shadow-soft transition-shadow duration-200',
        hover && 'hover:shadow-medium',
        className
      )}
    >
      {children}
    </div>
  );
};
