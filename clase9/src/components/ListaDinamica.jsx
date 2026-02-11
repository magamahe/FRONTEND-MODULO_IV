import { useState } from 'react';

const ListaTareas = ({ userId }) => {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);

  const agregarTarea = () => {
    if (tarea.trim() === "") return;
    setTareas([...tareas, { id: Date.now(), texto: tarea }]);
    setTarea("");
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter(t => t.id !== id));
  };

  return (
    <div className="p-6 bg-slate-800 rounded-xl shadow-lg border border-slate-700">
      <span className="text-xs text-slate-500 uppercase font-bold">User ID: {userId}</span>
      <h2 className="text-xl font-bold mb-4 text-purple-400">Actividad 4: Lista de Tareas</h2>
      
      <div className="flex gap-2 mb-6">
        <input 
          type="text" 
          value={tarea}
          onChange={(e) => setTarea(e.target.value)}
          className="flex-1 p-2 bg-slate-900 border border-slate-600 rounded-md text-white"
        />
        <button onClick={agregarTarea} className="bg-purple-600 px-4 py-2 rounded-lg font-bold">Añadir</button>
      </div>

      <ul className="space-y-2">
        {tareas.map((t) => (
          <li key={t.id} className="flex justify-between items-center bg-slate-700 p-3 rounded-lg">
            <span>{t.texto}</span>
            <button onClick={() => eliminarTarea(t.id)} className="text-red-400 hover:text-red-600 font-bold">Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaTareas;