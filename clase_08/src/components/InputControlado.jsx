import { useState } from "react";

function InputControlado() {
  // El estado del input se maneja desde el componente
  const [texto, setTexto] = useState("");

  return (
    <div>
      <h3>Input controlado</h3>

      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />

      <p>Escribiendo: {texto}</p>
    </div>
  );
}

export default InputControlado;
