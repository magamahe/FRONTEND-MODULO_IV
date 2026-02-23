export default function Lista({ tareas }) {
  return (
    <ul className="space-y-2">
      {tareas.map((t, i) => (
        <li
          key={i}
          className="bg-pink-100 px-3 py-2 rounded-xl shadow-sm text-gray-700"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}