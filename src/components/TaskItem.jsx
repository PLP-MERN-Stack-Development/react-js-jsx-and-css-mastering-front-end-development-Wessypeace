import { Check, Trash2 } from 'lucide-react';
import { Button } from './Button';
import { cn } from '@/lib/utils';

/**
 * Individual task item component
 */
export const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <div
      className={cn(
        'flex items-center gap-3 p-4 bg-card border border-border rounded-lg transition-all duration-200 hover:shadow-soft',
        task.completed && 'opacity-60'
      )}
    >
      {/* Checkbox */}
      <button
        onClick={() => onToggle(task.id)}
        className={cn(
          'flex-shrink-0 w-6 h-6 rounded border-2 flex items-center justify-center transition-all duration-200',
          task.completed
            ? 'bg-success border-success'
            : 'border-muted-foreground hover:border-primary'
        )}
        aria-label={task.completed ? 'Mark as incomplete' : 'Mark as complete'}
      >
        {task.completed && <Check className="h-4 w-4 text-success-foreground" />}
      </button>

      {/* Task text */}
      <span
        className={cn(
          'flex-1 text-foreground',
          task.completed && 'line-through text-muted-foreground'
        )}
      >
        {task.text}
      </span>

      {/* Delete button */}
      <Button
        variant="danger"
        size="sm"
        onClick={() => onDelete(task.id)}
        aria-label="Delete task"
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
};
