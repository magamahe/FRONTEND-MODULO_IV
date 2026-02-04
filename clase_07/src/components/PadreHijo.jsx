import { useState } from "react";

function Hijo({ saludar }) {
  return (
    <button
      className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600"
      onClick={saludar}
    >
      Saludar
    </button>
  );
}

function Padre() {
  const [mensaje, setMensaje] = useState("Hola");

  return (
    <div className="flex flex-col gap-3">
      <p className="text-slate-700 font-medium">{mensaje}</p>
      <Hijo saludar={() => setMensaje("Hola desde el Hijo 👋")} />
    </div>
  );
}

export default Padre;
