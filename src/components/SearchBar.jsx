import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Search bar component
 */
export const SearchBar = ({ onSearch, className, ...props }) => {
  return (
    <div className={cn('relative', className)}>
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
      <input
        type="text"
        className="w-full pl-10 pr-4 py-2 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground placeholder:text-muted-foreground"
        onChange={(e) => onSearch(e.target.value)}
        {...props}
      />
    </div>
  );
};
