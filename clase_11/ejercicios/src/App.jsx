import { useState } from "react";
import InputA from "./Components/InputA";
import InputB from "./Components/InputB";
import Formulario from "./Components/Formulario";
import Lista from "./Components/Lista";
import Incrementar from "./Components/Incrementar";
import Decrementar from "./Components/Decrementar";
import Pregunta from "./Components/Pregunta";
import Resultado from "./Components/Resultado";

export default function App() {
  const [texto, setTexto] = useState("");
  const [tareas, setTareas] = useState([]);
  const [contador, setContador] = useState(0);
  const [respuesta, setRespuesta] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-teal-100 p-6 space-y-6">

      {/* Ejercicio 1: Inputs */}
      <section className="bg-white/70 backdrop-blur p-6 rounded-2xl shadow-md space-y-3">
        <h2 className="text-xl font-semibold text-purple-700">Inputs sincronizados</h2>
        <div className="flex gap-3">
          <InputA texto={texto} setTexto={setTexto} />
          <InputB texto={texto} setTexto={setTexto} />
        </div>
      </section>

      {/* Ejercicio 2: Tareas */}
      <section className="bg-white/70 backdrop-blur p-6 rounded-2xl shadow-md space-y-3">
        <h2 className="text-xl font-semibold text-pink-700">Lista de tareas</h2>
        <Formulario tareas={tareas} setTareas={setTareas} />
        <Lista tareas={tareas} />
      </section>

      {/* Ejercicio 3: Contador */}
      <section className="bg-white/70 backdrop-blur p-6 rounded-2xl shadow-md text-center space-y-3">
        <h2 className="text-xl font-semibold text-teal-700">Contador global</h2>
        <div className="flex justify-center items-center gap-4">
          <Decrementar setContador={setContador} />
          <p className="text-2xl font-bold text-gray-700">{contador}</p>
          <Incrementar setContador={setContador} />
        </div>
      </section>

      {/* Ejercicio 4: Encuesta */}
      <section className="bg-white/70 backdrop-blur p-6 rounded-2xl shadow-md space-y-3">
        <Pregunta setRespuesta={setRespuesta} />
        <Resultado respuesta={respuesta} />
      </section>

    </div>
  );
}