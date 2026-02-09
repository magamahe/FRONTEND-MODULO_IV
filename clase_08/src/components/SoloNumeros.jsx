import { useState } from "react";

function SoloNumeros() {
  const [mensaje, setMensaje] = useState("");

  const validarTecla = (e) => {
    if (isNaN(e.key) && e.key !== "Backspace") {
      e.preventDefault();
      setMensaje("⚠ Solo números permitidos");
    } else {
      setMensaje("");
    }
  };

  return (
    <div>
      <h3>Solo números</h3>

      <input type="text" onKeyDown={validarTecla} />

       <p>{mensaje}</p>
    </div>
  );
}

export default SoloNumeros;
