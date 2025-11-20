import { useState, useMemo } from 'react';
import { Plus } from 'lucide-react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { TaskItem } from './TaskItem';
import { Button } from './Button';
import { Card } from './Card';

/**
 * Task Manager component with filtering and persistence
 */
export const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [newTaskText, setNewTaskText] = useState('');
  const [filter, setFilter] = useState('all');

  // Add new task
  const addTask = () => {
    if (newTaskText.trim()) {
      const newTask = {
        id: Date.now().toString(),
        text: newTaskText.trim(),
        completed: false,
        createdAt: Date.now(),
      };
      setTasks([newTask, ...tasks]);
      setNewTaskText('');
    }
  };

  // Toggle task completion
  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Filter tasks
  const filteredTasks = useMemo(() => {
    switch (filter) {
      case 'active':
        return tasks.filter(task => !task.completed);
      case 'completed':
        return tasks.filter(task => task.completed);
      default:
        return tasks;
    }
  }, [tasks, filter]);

  // Task statistics
  const stats = useMemo(() => ({
    total: tasks.length,
    active: tasks.filter(t => !t.completed).length,
    completed: tasks.filter(t => t.completed).length,
  }), [tasks]);

  return (
    <div className="space-y-6">
      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="text-center">
          <div className="text-3xl font-bold text-primary">{stats.total}</div>
          <div className="text-sm text-muted-foreground mt-1">Total Tasks</div>
        </Card>
        <Card className="text-center">
          <div className="text-3xl font-bold text-accent">{stats.active}</div>
          <div className="text-sm text-muted-foreground mt-1">Active</div>
        </Card>
        <Card className="text-center">
          <div className="text-3xl font-bold text-success">{stats.completed}</div>
          <div className="text-sm text-muted-foreground mt-1">Completed</div>
        </Card>
      </div>

      {/* Add task input */}
      <Card>
        <div className="flex gap-2">
          <input
            type="text"
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTask()}
            placeholder="Add a new task..."
            className="flex-1 px-4 py-2 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground placeholder:text-muted-foreground"
          />
          <Button variant="primary" onClick={addTask}>
            <Plus className="h-5 w-5 mr-2" />
            Add Task
          </Button>
        </div>
      </Card>

      {/* Filter buttons */}
      <div className="flex gap-2 flex-wrap">
        <Button
          variant={filter === 'all' ? 'primary' : 'secondary'}
          size="sm"
          onClick={() => setFilter('all')}
        >
          All ({stats.total})
        </Button>
        <Button
          variant={filter === 'active' ? 'primary' : 'secondary'}
          size="sm"
          onClick={() => setFilter('active')}
        >
          Active ({stats.active})
        </Button>
        <Button
          variant={filter === 'completed' ? 'primary' : 'secondary'}
          size="sm"
          onClick={() => setFilter('completed')}
        >
          Completed ({stats.completed})
        </Button>
      </div>

      {/* Task list */}
      <div className="space-y-3">
        {filteredTasks.length === 0 ? (
          <Card className="text-center py-12">
            <p className="text-muted-foreground">
              {filter === 'all' ? 'No tasks yet. Add one to get started!' : `No ${filter} tasks.`}
            </p>
          </Card>
        ) : (
          filteredTasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          ))
        )}
      </div>
    </div>
  );
};
