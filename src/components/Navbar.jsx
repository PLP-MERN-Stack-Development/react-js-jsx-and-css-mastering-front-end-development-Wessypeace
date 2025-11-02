import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="bg-blue-600 text-white dark:bg-gray-800 p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Task Manager</h1>
      <button
        onClick={toggleTheme}
        className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-200 dark:bg-gray-700 dark:text-white"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
}