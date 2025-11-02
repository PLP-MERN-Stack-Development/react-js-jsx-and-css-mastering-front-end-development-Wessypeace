export default function Button({ label, onClick, color = "blue" }) {
  const base = "px-4 py-2 text-white rounded hover:opacity-90";
  const colors = {
    blue: "bg-blue-600",
    red: "bg-red-500",
    green: "bg-green-600",
  };

  return (
    <button onClick={onClick} className={`${base} ${colors[color]}`}>
      {label}
    </button>
  );
}