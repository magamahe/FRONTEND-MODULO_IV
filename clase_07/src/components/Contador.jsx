import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div className="flex items-center gap-4">
      <button
        className="px-4 py-2 bg-red-400 text-white rounded-lg hover:bg-red-500"
        onClick={() => setContador(contador - 1)}
      >
        -
      </button>

      <span className="text-2xl font-bold">{contador}</span>

      <button
        className="px-4 py-2 bg-green-400 text-white rounded-lg hover:bg-green-500"
        onClick={() => setContador(contador + 1)}
      >
        +
      </button>
    </div>
  );
}

export default Contador;
