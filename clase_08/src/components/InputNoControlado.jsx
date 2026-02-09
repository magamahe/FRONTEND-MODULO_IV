import { useRef, useState } from "react";

function InputNoControlado() {
    // El estado del input no se maneja desde el componente, sino que se accede directamente al DOM
  const inputRef = useRef();
  // El valor se obtiene al hacer clic en el botón, no mientras se escribe
  const [valor, setValor] = useState("");

  const mostrarValor = () => {
    setValor(inputRef.current.value);
  };

  return (
    <div>
      <h3>Input no controlado</h3>

      <input type="text" ref={inputRef} />

      <button onClick={mostrarValor}>
        Mostrar valor
      </button>

      <p>Valor: {valor}</p>
    </div>
  );
}

export default InputNoControlado;
