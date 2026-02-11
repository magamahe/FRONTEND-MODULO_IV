import { useState } from 'react';

const InputControlado = ({ userId }) => {
  const [texto, setTexto] = useState("");

  return (
    <div className="p-6 bg-slate-800 rounded-xl shadow-lg border border-slate-700">
      <span className="text-xs text-slate-500 uppercase font-bold">User ID: {userId}</span>
      <h2 className="text-xl font-bold mb-4 text-emerald-400">Actividad 3: Input Controlado</h2>
      
      <input 
        type="text" 
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Escribe algo..."
        className="w-full p-2 bg-slate-900 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
      />
      
      <div className="mt-4 p-3 bg-slate-900 rounded-md min-h-[50px]">
        <p className="text-slate-400 italic">Vista previa:</p>
        <p className="text-lg text-emerald-200 break-words">{texto || "Esperando entrada..."}</p>
      </div>
    </div>
  );
};

export default InputControlado;