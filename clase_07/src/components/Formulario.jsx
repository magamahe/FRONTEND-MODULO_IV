import { useState } from "react";

function Formulario() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");

  return (
    <div className="flex flex-col gap-3 max-w-sm">
      <input
        className="border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <input
        className="border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
        placeholder="Apellido"
        value={apellido}
        onChange={(e) => setApellido(e.target.value)}
      />

      <p className="text-slate-700">
        Hola <span className="font-semibold">{nombre} {apellido}</span>
      </p>
    </div>
  );
}

export default Formulario;
