import { useState } from "react";
import "./Respuesta"

export default function Pregunta({ data, onResponder }) {
  const [seleccion, setSeleccion] = useState(null);

  const responder = () => {
    onResponder(seleccion);
    setSeleccion(null);
  };

  return (
    <div className="pregunta fade">
      <h3>{data.pregunta}</h3>

      {data.opciones.map((op, i) => (
        <button
          key={i}
          className={`opcion ${seleccion === i ? "seleccionada" : ""}`}
          onClick={() => setSeleccion(i)}
        >
          {op}
        </button>
      ))}

      <button className="btn" onClick={responder}>
        Responder
      </button>
    </div>
  );
}
