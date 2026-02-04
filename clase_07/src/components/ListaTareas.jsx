import { useState } from "react";

function ListaTareas() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState("");

  return (
    <div className="flex flex-col gap-3 max-w-sm">
      <div className="flex gap-2">
        <input
          className="flex-1 border rounded-lg px-3 py-2"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Nueva tarea"
        />
        <button
          className="bg-blue-500 text-white px-4 rounded-lg hover:bg-blue-600"
          onClick={() => {
            setTareas([...tareas, nuevaTarea]);
            setNuevaTarea("");
          }}
        >
          +
        </button>
      </div>

      <ul className="list-disc list-inside text-slate-700">
        {tareas.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaTareas;
