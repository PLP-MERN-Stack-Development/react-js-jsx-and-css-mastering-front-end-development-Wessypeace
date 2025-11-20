import { AlertCircle } from 'lucide-react';
import { Card } from './Card';

/**
 * Error message component
 */
export const ErrorMessage = ({ message, onRetry }) => {
  return (
    <Card className="bg-destructive/10 border-destructive/20">
      <div className="flex items-start gap-3">
        <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <p className="text-foreground font-medium">Error</p>
          <p className="text-muted-foreground text-sm mt-1">{message}</p>
          {onRetry && (
            <button
              onClick={onRetry}
              className="text-primary hover:underline text-sm mt-2"
            >
              Try again
            </button>
          )}
        </div>
      </div>
    </Card>
  );
};
