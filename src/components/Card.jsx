export default function Card({ title, children }) {
  return (
    <div className="border rounded-xl shadow-md p-4 bg-white dark:bg-gray-900 dark:text-white">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      {children}
    </div>
  );
}