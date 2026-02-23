import { useState } from "react";

export default function Formulario({ tareas, setTareas }) {
  const [input, setInput] = useState("");

  const agregar = () => {
    if (!input) return;
    setTareas([...tareas, input]);
    setInput("");
  };

  return (
    <div className="flex gap-2">
      <input
        className="border border-pink-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 outline-none px-3 py-2 rounded-xl w-full"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button
        onClick={agregar}
        className="bg-pink-300 hover:bg-pink-400 text-white px-4 rounded-xl shadow transition"
      >
        Agregar
      </button>
    </div>
  );
}