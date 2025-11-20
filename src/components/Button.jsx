import { cn } from '@/lib/utils';

/**
 * Reusable Button component with multiple variants
 */
export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-primary text-primary-foreground hover:opacity-90 focus:ring-primary shadow-soft hover:shadow-medium',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 focus:ring-secondary',
    danger: 'bg-destructive text-destructive-foreground hover:opacity-90 focus:ring-destructive shadow-soft hover:shadow-medium',
    success: 'bg-success text-success-foreground hover:opacity-90 focus:ring-success shadow-soft hover:shadow-medium',
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth && 'w-full',
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
