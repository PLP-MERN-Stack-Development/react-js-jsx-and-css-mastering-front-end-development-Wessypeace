import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Button from "./Button";
import Card from "./Card";

export default function TaskManager() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: input, done: false }]);
    setInput("");
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <Card title="Task Manager">
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
          className="border p-2 rounded flex-grow"
        />
        <Button label="Add" onClick={addTask} color="green" />
      </div>

      <ul>
        {tasks.length === 0 && <p>No tasks yet.</p>}
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center py-2 border-b dark:border-gray-700"
          >
            <span
              onClick={() => toggleTask(task.id)}
              className={`cursor-pointer ${task.done ? "line-through text-gray-500" : ""}`}
            >
              {task.text}
            </span>
            <Button label="Delete" onClick={() => removeTask(task.id)} color="red" />
          </li>
        ))}
      </ul>
    </Card>
  );
}