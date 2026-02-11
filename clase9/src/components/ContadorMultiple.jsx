import { useState } from 'react';

const Contador = ({ userId }) => {
  const [contador, setContador] = useState(0);

  return (
    <div className="p-6 bg-slate-800 rounded-xl shadow-lg border border-slate-700">
      <span className="text-xs text-slate-500 uppercase font-bold">User ID: {userId}</span>
      <h2 className="text-xl font-bold mb-4 text-blue-400">Actividad 1 & 2: Contador</h2>
      
      <p className="text-3xl mb-6 font-mono">El valor actual es: <span className="text-white">{contador}</span></p>
      
      <div className="flex gap-4">
        <button onClick={() => setContador(contador - 1)} className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded-lg transition-colors">-</button>
        <button onClick={() => setContador(contador + 1)} className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg transition-colors">+</button>    
        <button onClick={() => setContador(0)} className="bg-orange-600 hover:bg-orange-500 px-4 py-2 rounded-lg transition-colors">↻</button>
      </div>
    </div>
  );
};

export default Contador;