import { ListTodo } from 'lucide-react';
import { TaskManager } from '@/components/TaskManager';

/**
 * Tasks page component
 */
const Tasks = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Page header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
          <ListTodo className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-4xl font-bold text-foreground">Task Manager</h1>
        <p className="text-muted-foreground text-lg">
          Organize your tasks with persistent localStorage storage
        </p>
      </div>

      {/* Task manager component */}
      <TaskManager />
    </div>
  );
};

export default Tasks;
